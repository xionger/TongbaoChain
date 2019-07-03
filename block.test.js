const Block = require('./block');
const cryptoHash = require('./crypto-hash');

const { GENESIS_DATA } = require('./config');

describe('Block', () => {
    const timestamp = '08/09/2019';
    const lastHash = "foo_last_hash";
    const hash = "foo_hash";
    const data = ["data1", "data2"];
    const block = new Block( {timestamp, lastHash, hash, data} );

    it("has a timestamp, last hash, hash and data", () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('genesis()', () => {
        const genesisBlock = Block.genesis();

        it("return block instace genesis", () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it("return genesis data", () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

    describe('mineBlock()', () => {
        const lastBlock = Block.genesis();
        const data = "mined data";
        const minedBlock = Block.mineBlock({ lastBlock, data });

        it("return block instance mined block", () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it("update 'lastHash' to be the 'hash' of the lastBlock", () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        it("'data' is set", () => {
            expect(minedBlock.data).toEqual(data);
        });

        it("'timestamp' is defined", () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });

        it("generate a 'hash' basing on input", () =>{
            expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
        });
    });
});