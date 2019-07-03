const cryptoHash = require('./crypto-hash');

describe("cryptoHash()",() => {
    it("generate hash basing on SHA256", () => {
        expect(cryptoHash("tongbao")).toEqual("0b9b1882a89245fa7d5110bf55bd675a4155d48e392523dc177bdaa47fc4c0b1");
    });

    it("generate the same hash for the same batch of input independent of order", () => {
        expect(cryptoHash("Joe", "Jane")).toEqual(cryptoHash("Jane", "Joe"));
    });
});