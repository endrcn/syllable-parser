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

    getSyllableCount(text) {
        let syllables = this.parse(text);
        return syllables.length;
    }

    parseTR(word = "") {
        let vowelRgx = /[aeıioöuüAEIİOÖUÜ]/;
        word = (word + "").split("");
        let isThereVowel = false;
        let syllables = [];
        let currSyllable = "";
        for (let c = 0; c < word.length; c++) {
            if (!vowelRgx.test(word[c])) { // This char is not a vowel.
                currSyllable += word[c];
            } else { // This char is a vowel
                currSyllable += word[c];
                if (!isThereVowel) isThereVowel = true;
                else {
                    syllables.push(currSyllable.substring(0, currSyllable.length - 2));
                    currSyllable = currSyllable.substring(currSyllable.length - 2, currSyllable.length);
                }
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