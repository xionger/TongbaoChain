class Block {
    constructor(_timestamp, _lastHash, _hash, _data) {
        this.timestamp = _timestamp;
        this.lastHash = _lastHash;
        this.hash = _hash;
        this.data = _data;
    }
}

module.exports = Block;