function countWordOccurrences(text) {
    // Split the text into words (split by spaces)
    const words = text.split(/\s+/);

    // Create a Map to store word counts
    const wordCountMap = new Map();

    // Iterate over each word
    words.forEach(word => {
        word = word.toLowerCase();  // Normalize to lowercase
        
        // If the word is already in the map, increment its count, otherwise set it to 1
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });

    // Return the map containing word counts
    return wordCountMap;
}

// Example usage:
const text = "hello world hello Hello world";
const wordCountMap = countWordOccurrences(text);

// Display the result
wordCountMap.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
