"use strict";
class TransitionFunction {
    constructor(mapping) {
        this.compute = (input) => {
            try {
                // @ts-ignore
                return this.mapping.get(input);
            }
            catch (e) {
                throw new Error();
            }
        };
        this.mapping = mapping;
    }
}
