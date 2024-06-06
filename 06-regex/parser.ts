import { OperatorsType, QuantityType, StateDataType } from "./types";

const last = <T>(arr: T[]) => arr[arr.length-1]

function parse(regex: string){
    const stack : Array<Array<StateDataType>>  = [[]]
    let i=0;
    while (i<regex.length) {
        const next = regex[i];
        switch(next){
            case '.': {
                last(stack).push({
                    type: OperatorsType.Wildcard,
                    quantify: QuantityType.ExactlyOne
                });
                i++;
                continue;
            }

            case '?' : {
                const lastState = last(last(stack))
                if(!lastState || lastState.quantify !== QuantityType.ExactlyOne){
                    throw new Error('Invalid regex')
                }
                lastState.quantify = QuantityType.ZeroOrOne
                i++;
                continue;
            }

            case '*' : {
                const lastState = last(last(stack))
                if(!lastState || lastState.quantify !== QuantityType.ExactlyOne){
                    throw new Error('Invalid regex')
                }
                lastState.quantify = QuantityType.ZeroOrMore
                i++;
                continue;
            }

            case '+' : {
                /** 
                 * This is a bit tricky, because we have to check the state exist one and if possible more, then 
                 * we check the one and add a new state with the same type and quantify ZeroOrMore
                */
                const lastState = last(last(stack))
                if(!lastState || lastState.quantify !== QuantityType.ExactlyOne){
                    throw new Error('Invalid regex')
                }
                const zeroOrMoreCopy = {...lastState, quantify: QuantityType.ZeroOrMore}
                last(stack).push(zeroOrMoreCopy)
                i++;
                continue;
            }

            case '(' : {
                /**
                 * We push a new array to the stack, this will be the new group of state to be added
                 */
                stack.push([])
                i++;
                continue;
            }

            case ')' : {
                /**
                 * After we close the group, we have to check if the group must have at least one element
                 * then we add the group as a new state to the last state in the stack 
                 */
                const lastState = last(stack)
                if(lastState.length <= 1){
                    throw new Error('Invalid regex')
                }
                const states = stack.pop()
                last(stack).push({
                    type: OperatorsType.GroupElement,
                    quantify: QuantityType.ExactlyOne,
                    states
                })
                i++;
                continue;
            }

            case '\\' : {
                if(i+1 >= regex.length){
                    throw new Error('Invalid regex')
                }
                last(stack).push({
                    type: regex[i+1],
                    quantify: QuantityType.ExactlyOne,
                    value: regex[i+1],
                });
                i+=2;
                continue;
            }

            default: {
                last(stack).push({
                    type: OperatorsType.Element,
                    quantify: QuantityType.ExactlyOne,
                    value: next,
                });
                i++;
                continue;
            }
        }
    }

    if(stack.length !== 1){
        throw new Error('Invalid regex')
    }
    return stack[0]
}

// import {inspect} from 'util'
// const regex = 'a?(b.*c)+d';
// console.log(inspect(parse(regex),false, Infinity));



export default parse