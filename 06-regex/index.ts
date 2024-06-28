import parse from "./parser";
import { BacktrackDataType, OperatorsType, QuantityType, StateDataType } from "./types";

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
    let backtrackStack : Array<BacktrackDataType> = [];
    let currentState = queue.shift() // get the first element from the array

    function backtrack(): Boolean{
        queue.unshift(currentState!)
        let couldBacktrack = false;

        while(backtrackStack.length){
            const {isBacktrackable, state, consumption} = backtrackStack.pop()!;
            if(isBacktrackable) {
                if(consumption?.length === 0) {
                    queue.unshift(state)
                    continue;
                }
                const n = consumption!.pop()!;
                i-=n;
                backtrackStack.push({isBacktrackable, state, consumption})
                couldBacktrack = true;
                break;
            }
            queue.unshift(state)
            consumption?.forEach(n => {
                i-=n;

            });
        }
        if(couldBacktrack){
            currentState = queue.shift()
        }
        return couldBacktrack;
    }

    while(currentState) {
        switch(currentState.quantify) {
            case QuantityType.ExactlyOne: {
                const [isMatch, consumed] = checkStateMatchingAtIndex(currentState, str, i)
                if(!isMatch) {
                    const indexBeforeBacktracking = i;
                    const couldBacktrack = backtrack()
                    if(!couldBacktrack){
                        return [false, indexBeforeBacktracking]
                    }
                    continue;
                }
                backtrackStack.push({
                    isBacktrackable: false,
                    state: currentState,
                    consumption: [consumed],
                })
                i+=consumed;
                currentState = queue.shift()
                continue;
            }

            case QuantityType.ZeroOrOne: {
                if(i>=str.length) {
                    backtrackStack.push({
                        isBacktrackable: false,
                        state: currentState,
                        consumption: [0],
                    })
                    currentState = queue.shift()
                    continue;
                }
                const [isMatch, consumed] = checkStateMatchingAtIndex(currentState, str, i)
                i+=consumed;
                backtrackStack.push({
                    isBacktrackable: isMatch && consumed > 0,
                    state: currentState,
                    consumption: [consumed],
                
                })
                currentState = queue.shift()
                continue;
            }

            case QuantityType.ZeroOrMore: {
                /**
                 *! Sensitivity: We have to check the state matching until it's not matching anymore
                 */
                const backtrackState : BacktrackDataType = {
                    isBacktrackable: true,
                    state: currentState,
                }
                while (true){
                    if(i>=str.length) {
                        if(backtrackState?.consumption?.length === 0) {
                            backtrackState.consumption!.push(0);
                            backtrackState.isBacktrackable = false;
                        }
                        backtrackStack.push(backtrackState)
                        currentState = queue.shift();
                        break;
                    }
                    const [isMatch, consumed] = checkStateMatchingAtIndex(currentState, str, i)
                        if(!isMatch || consumed === 0) {
                            if(backtrackState?.consumption?.length === 0) {
                                backtrackState.consumption!.push(0);
                                backtrackState.isBacktrackable = false;
                            }
                            currentState = queue.shift();
                            break;
                        } 
                        backtrackState?.consumption?.push(consumed);
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

const regex = 'a.*c'
const states = parse(regex)
const str = 'acccccccccccccccc'
const result = test(states, str)
console.log(result);
