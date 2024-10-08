class Ship {
    constructor(length) {
        this.length = length;
        this.hits = [];
        this.vertical = false;
    }
    hit(position) {
        this.hits.push(position);
    }
    isSunk() {
        return this.length === this.hits.length;
    }
}

export default Ship;