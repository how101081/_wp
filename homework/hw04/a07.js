class Vector {
    constructor(values) {
        this.values = values;
    }

    add(other) {
        if (this.values.length !== other.values.length) {
            throw new Error("Vectors must have the same dimension");
        }
        let result = this.values.map((val, index) => val + other.values[index]);
        return new Vector(result);
    }

    sub(other) {
        if (this.values.length !== other.values.length) {
            throw new Error("Vectors must have the same dimension");
        }
        let result = this.values.map((val, index) => val - other.values[index]);
        return new Vector(result);
    }

    dot(other) {
        if (this.values.length !== other.values.length) {
            throw new Error("Vectors must have the same dimension");
        }
        let result = this.values.reduce((sum, val, index) => sum + val * other.values[index], 0);
        return result;
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b).sub(b).dot(b));
