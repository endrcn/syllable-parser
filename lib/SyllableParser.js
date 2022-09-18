class SyllableParser {

    constructor(lang = "TR") {
        this.lang = lang;
    }

    set lang(lang) {
        this._lang = lang;
    }

    get lang() {
        return this._lang;
    }

    parse(text) {
        switch (this.lang) {
            case "TR":
                return this.parseTR(text);
            default:
                return this.errorMessage();
        }

    }

    getSyllableCount(word) {
        let syllables = this.parse(word);
        return syllables.length;
    }

    parseTR(word = "") {
        let vowelRgx = /[aeıioöuüAEIİOÖUÜ]/;
        word = (word + "").split("");
        // let isThereVowel = false;
        let lastVowelIndex = -1;
        let syllables = [];
        let currSyllable = "";
        for (let c = 0; c < word.length; c++) {
            if (!vowelRgx.test(word[c])) { // This char is not a vowel.
                currSyllable += word[c];
            } else { // This char is a vowel
                currSyllable += word[c];
                if (lastVowelIndex >= 0) {
                    if (c - lastVowelIndex == 1) { // two vowels followed one after the other.
                        syllables.push(currSyllable.substring(0, currSyllable.length - (c - lastVowelIndex)));
                        currSyllable = currSyllable.substring(currSyllable.length - (c - lastVowelIndex), currSyllable.length);
                    } else {
                        syllables.push(currSyllable.substring(0, currSyllable.length - 2));
                        currSyllable = currSyllable.substring(currSyllable.length - 2, currSyllable.length);
                    }
                }
                lastVowelIndex = c;

            }
        }
        if (currSyllable.length > 0) {
            syllables.push(currSyllable);
        }
        return syllables;
    }

    errorMessage() {
        return "I cannot yet separate words from another language other than Turkish into syllables.";
    }
}

module.exports = SyllableParser;