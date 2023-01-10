class TransitionFunction {
    mapping : Map<[FAState, string], FAState>

    constructor(mapping : Map<[FAState, string], FAState>) {
        this.mapping = mapping
    }

    compute = (input : [FAState, string]) : FAState => {
        try {
            // @ts-ignore
            return this.mapping.get(input)
        } catch (e) {
            throw new Error()
        }}
}