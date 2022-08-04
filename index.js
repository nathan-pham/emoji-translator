const emojilib = require("emojilib")

const findEmojiSynonym = (word) => {
    const preprocessedWord = word
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

    for (const [emoji, synonyms] of Object.entries(emojilib)) {

        if (synonyms.includes(preprocessedWord)) {
            return word.replace(
                new RegExp(preprocessedWord, "gi"),
                emoji
            )
        }
    }

    return word
}

const translate = (sentence) => (
    sentence
        .split(" ")
        .map(findEmojiSynonym)
        .join(' ')
)

console.log(translate("Hello!"))