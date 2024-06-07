
export const OperatorsType = {
    Wildcard: 'wildcard',
    GroupElement: 'groupElement',
    Element: 'element'
}

export const QuantityType = {
    ExactlyOne: 'exactlyOne',
    ZeroOrOne: 'zeroOrOne',
    ZeroOrMore: 'zeroOrMore',
}


export type StateDataType = {
    type: string,
    quantify: string,
    states?: Array<StateDataType>,
    value?: string
}