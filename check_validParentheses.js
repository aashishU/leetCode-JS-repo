/*
*****  Valid Parentheses  *****

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
    Input: s = "()"
    Output: true

Example 2:
    Input: s = "()[]{}"
    Output: true

Example 3:
    Input: s = "(]"
    Output: false
*/

// __________________________________________________________________________________________________________________________

var isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];

        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        }
        else if (s[i] == ')' && top == '(' || s[i] == '}' && top == '{' || s[i] == ']' && top == '[') {
            stack.pop(s[i]);
        }
        else return false;
    }
    return stack.length === 0;
};


// Problem Logic:

// - create an empty array named 'stack'.
// - 'for' loop for traversing given String 's'.
// - create variable 'top' to get the last element from array named 'stack' (just like an actual stack).
// - if we get 'Open brackets' while traversing String, Add them to the stack.
// - if we get 'Closed brackets', we check top element of stack for matching 'Open brackets':
//     * if 'true' then remove 'Closed bracket' from the stack and move on with the String.
//     * if 'false' then return false.

// - if loop completed successfully satisfying every condition then check if stack is empty or not?
//     * if 'true' return true,
//     * else return false.
