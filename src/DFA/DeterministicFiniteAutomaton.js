"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeterministicFiniteAutomaton = void 0;
class DeterministicFiniteAutomaton {
    constructor(states, alphabet, transition_function, start_state, accept_states) {
        // doest the _input_ cause this machine to end in an accept state?
        this.accepts = (input) => {
            return this.accept_states.includes(this.compute_state(input));
        };
        // computes the state that this machine ends in on the given _input_
        this.compute_state = (input) => {
            let current_state = this.start_state;
            for (let c in input.split('')) {
                current_state = this.transition_function.compute([current_state, c]);
            }
            return current_state;
        };
        // INVARIANTS:
        // 1. _transition_function_ is actually a function (unique outputs for unique inputs). We don't enforce this
        // 2. _start_state_ is a member of _states_
        const invariant2 = (_states, _start_state) => {
            return _states.includes(_start_state);
        };
        // 3. _accept_state_ is a subset of _states_
        const invariant3 = (_states, _accept_states) => {
            return !!~_accept_states.join('').indexOf((_states.map(s => s.name)).join(''));
        };
        this.states = states;
        this.alphabet = alphabet;
        this.transition_function = transition_function;
        if (invariant2(this.states, start_state)) {
            this.start_state = start_state;
        }
        else {
            throw new Error(`start state must be a valid state in the automaton. State \"${start_state.name}\" is not.`);
        }
        if (invariant3(this.states, accept_states)) {
            this.accept_states = accept_states;
        }
        else {
            throw new Error(`accept states must be a subset of the states. States ${accept_states.map(s => s.name)} 
            does not form a subset`);
        }
    }
}
exports.DeterministicFiniteAutomaton = DeterministicFiniteAutomaton;
