const assert = require('chai').assert;
const path = require("path");
const SyllableParser = require("../lib//SyllableParser");

const parser = new SyllableParser("TR");

describe(path.basename(__filename, '.js'), function () {
    it('örnek', function () {
        assert.deepEqual(parser.parse("örnek"), ["ör", "nek"]);
    });

    it('okul', function () {
        assert.deepEqual(parser.parse("okul"), ["o", "kul"]);
    });

    it('kültür', function () {
        assert.deepEqual(parser.parse("kültür"), ["kül", "tür"]);
    });

    it('robdöşambır', function () {
        assert.deepEqual(parser.parse("robdöşambır"), ["rob", "dö", "şam", "bır"]);
    });

    it('robdöşambr', function () {
        assert.deepEqual(parser.parse("robdöşambr"), ["rob", "dö", "şambr"]);
    });

    it('tren', function () {
        assert.deepEqual(parser.parse("tren"), ["tren"]);
    });

    it('spor', function () {
        assert.deepEqual(parser.parse("spor"), ["spor"]);
    });

    it('sporcu', function () {
        assert.deepEqual(parser.parse("sporcu"), ["spor", "cu"]);
    });

    it('makinist', function () {
        assert.deepEqual(parser.parse("makinist"), ["ma", "ki", "nist"]);
    });

    it('kredi', function () {
        assert.deepEqual(parser.parse("kredi"), ["kre", "di"]);
    });

    it('aile', function () {
        assert.deepEqual(parser.parse("aile"), ["a", "i", "le"]);
    });

    it('kreatif', function () {
        assert.deepEqual(parser.parse("kreatif"), ["kre", "a", "tif"]);
    });

    it('saat', function () {
        assert.deepEqual(parser.parse("saat"), ["sa", "at"]);
    });

    it('kredi count', function () {
        assert.equal(parser.getSyllableCount("kredi"), 2);
    });
});