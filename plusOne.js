//`PlusOne

/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

const digits = [1, 2, 3];

var plusOne = function (digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {  // reverse loop
        if (digits[i] !== 9) {    // check if current element is not equal to 9.
            digits[i] += 1;     // if not 9, increment number by 1.
            return digits;

        } else {                // check if element is equal to 9.
            digits[i] = 0;      // if yes, make it 0.
            // now in the next iteration, secondLast element automatically gets increment by 1 using "if" condition.
        }
    }
    return [1, ...digits];       // if all elements are equal to 9, and never got a chance to return, and the loop completes,
    // then adding '1' in front of the array digits
    // at this point, all the elements that were 9 are turned to 0.
};

// Space Complexity : O(1)
// Time Complexity : O(n)




