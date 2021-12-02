// My solution
class Vec {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.vec = {
            x: this.x,
            y: this.y
        }
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

Vec.prototype.plus = function(vec) {
    return {
        Vec: {
            x: this.x + vec.x,
            y: this.y + vec.y
        }
    }
}

Vec.prototype.minus = function(vec) {
    return {
        Vec: {
            x: this.x - vec.x,
            y: this.y - vec.y
        }
    }
}

// Book solution
// class Vec {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     plus(other) {
//         return new Vec(this.x + other.x, this.y + other.y);
//     }

//     minus(other) {
//         return new Vec(this.x - other.x, this.y - other.y);
//     }

//     get length() {
//         return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
// }