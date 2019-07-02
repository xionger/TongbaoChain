const Block = require('./block');

describe('Block', () => {
    const timestamp = '08/09/2019';
    const lastHash = "foo_last_hash";
    const hash = "foo_hash";
    const data = ["data1", "data2"];
    const block = new Block(timestamp, lastHash, hash, data);

    it("has a timestamp, last hash, hash and data", () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
});