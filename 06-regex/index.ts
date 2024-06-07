import parse from "./parser";
import { OperatorsType, QuantityType, StateDataType } from "./types";

function checkStateMatchingAtIndex(state: StateDataType, str: string, index: number) :  [boolean, number] {
    if(index>=str.length) {
        return [false, 0]
    }
    if(state.type === OperatorsType.Wildcard) {
        return [true, 1]
    }
    
    if(state.type === OperatorsType.Element) {
        const match = str[index] === state.value
        return [match, match ? 1 : 0]   
    }

    if(state.type === OperatorsType.GroupElement) {
        return test(state.states!, str.slice(index))
    }

    throw new Error('Invalid state type')
}

function test(states: Array<StateDataType>, str : string) : [boolean, number] {
    const queue = states.slice() // make copy the array from start to end
    let i=0;
    let currentState = queue.shift() // get the first element from the array

    while(currentState) {
        switch(currentState.quantify) {
            case QuantityType.ExactlyOne: {
                const [isMatch, consumed] = checkStateMatchingAtIndex(currentState, str, i)
                if(!isMatch) {
                    return [false, 0]
                }
                i+=consumed;
                currentState = queue.shift()
                continue;
            }

            case QuantityType.ZeroOrOne: {
                if(i>=str.length) {
                    currentState = queue.shift()
                    continue;
                }
                const [isMatch, consumed] = checkStateMatchingAtIndex(currentState, str, i)
                i+=consumed;
                currentState = queue.shift()
                continue;
            }

            case QuantityType.ZeroOrMore: {
                /**
                 *! Sensitivity: We have to check the state matching until it's not matching anymore
                 */
                while(i<str.length) {
                    const [isMatch, consumed] = checkStateMatchingAtIndex(currentState, str, i)
                    if(!isMatch || consumed === 0) {
                        break;
                    }
                    i+=consumed;
                }
                currentState = queue.shift()
                continue;
            }

            default: {
                throw new Error('Invalid quantify')
            }
        }
    }
    return [true, i]
}

const regex = 'a(b.)*cd'
const states = parse(regex)
const str = 'ab!b$cd'
const result = test(states, str)
console.log(result);
