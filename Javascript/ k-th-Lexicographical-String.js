function getHappyString(n, k) {
    const result = []; // To store all happy strings
    const letters = ['a', 'b', 'c']; // The set of allowed characters

    // Helper function to generate happy strings using backtracking
    function backtrack(current) {
        // If the current string has reached the desired length, add it to the result
        if (current.length === n) {
            result.push(current);
            return;
        }

        // Iterate through all possible characters
        for (const char of letters) {
            // Only add a character if it does not repeat the last character
            if (current.length === 0 || current[current.length - 1] !== char) {
                backtrack(current + char); // Recursively build the string
            }
        }
    }

    // Start the backtracking with an empty string
    backtrack("");

    // Return the k-th string (1-indexed) if it exists, otherwise return an empty string
    return k <= result.length ? result[k - 1] : "";
}

// Example Usage
console.log(getHappyString(1, 3)); // Output: "c"
console.log(getHappyString(1, 4)); // Output: ""
console.log(getHappyString(3, 9)); // Output: "cab"
