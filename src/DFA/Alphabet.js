"use strict";
class Alphabet {
    constructor(members) {
        this.size = () => { return this.members.length; };
        // O(self.size())
        this.contains = (test_member) => {
            // next two lines replaces a lisp ormap call
            (this.members.map(s => { return s == test_member; })) // assemble a list of the symbols in the alphabet that match the target
                .reduce((s1, s2) => { return s1 || s2; });
        }; // check that at least one matches
        this.members = members;
    }
}
