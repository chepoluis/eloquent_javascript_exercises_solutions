class Group {
    constructor() {
        this.set = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.set.push(value);
        }
    }

    has(value) {
        return this.set.includes(value);
    }

    delete(value) {
        this.set = this.set.filter(number => number !== value);
    }

    static from(numbers) {
        let group = new Group;

        for (let number of numbers) {
            group.add(number);
        }

        return group;
    }

    // static set = new Set();

    // static from(array) {
    //     for (let number of array) {
    //         this.set.add(number);
    //     }

    //     return this.set;
    // }
}
