//******** Find length of the last Word in a string ********

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

function findLength(str, i) {     // this function calculates the length of word whose index we just got
    let len = 0;
    for (let j = i; j < str.length; j++) {
        if (str[j] !== ' ') {       // increment len till we get the ' '(blank space)
            len += 1;
        }
    }
    return len;     // End here
};

var lengthOfLastWord = function (s) {        // Start here
    index = null;
    for (let i = 0; i < s.length; i++) {
        if (s[i - 1] === ' ' && s[i] !== ' ') {    // index of char that has a space before
            index = i;     // if we wait for the loop to finish, 'index' after updating for every word, gives us
        }		                // the starting index of the last word.
    }
    return findLength(s, index);    // function call to calculate the length of the word
}