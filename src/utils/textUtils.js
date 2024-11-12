
export function countSentences(text) {
    if (!text) return 0;
    const sentencePattern = /[.!?]+/g;
    return (text.match(sentencePattern) || []).length;
}

export function countWords(text) {
    if (!text) return 0;
    const wordPattern = /\b\w+\b/g;
    return (text.match(wordPattern) || []).length;
}

export function countSyllables(text) {
    if (!text) return 0;
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    let syllableCount = 0;

    words.forEach(word => {
        word = word.replace(/(?:[^aeiouy]es|ed|[^laeiouy]e)$/,'');
        word = word.replace(/^y/,'');
        const syllables = word.match(/[aeiouy]{1,2}/g) || [];
        syllableCount += syllables.length;
    });

    return syllableCount;
}