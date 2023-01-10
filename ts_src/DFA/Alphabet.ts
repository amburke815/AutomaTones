class Alphabet {
    members : [string]

    constructor(members : [string]) {
        this.members = members
    }

    size = () => { return this.members.length }

    // O(self.size())
    contains = (test_member : string) => {
        // next two lines replaces a lisp ormap call
        (this.members.map(s => { return s == test_member })) // assemble a list of the symbols in the alphabet that match the target
            .reduce((s1, s2) => { return s1 || s2})} // check that at least one matches
}