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

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
    // static set = new Set();

    // static from(array) {
    //     for (let number of array) {
    //         this.set.add(number);
    //     }

    //     return this.set;
    // }
}

class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    next() {
      if (this.position >= this.group.set.length) {
        return {done: true};
      } else {
        let result = {value: this.group.set[this.position],
                      done: false};
        this.position++;
        return result;
      }
    }
}
