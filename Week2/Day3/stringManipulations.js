// // Learn how to manipulate strings and use looping statements in a programming language to solve practical problems.

// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

let s = "Hello World"
s =s.split(" ")
console.log(s[1].length)


// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.

s = " fly me to the moon "
s=s.trim().split(' ')
console.log(s[s.length-1].length)


// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.


//pseudocode 
// 1.Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result

function isAnagram(s1,s2){

    s1=  s1.trim().toLowerCase().split("").sort().join("")
    console.log(s1)
    s2=  s2.trim().toLowerCase().split("").sort().join("")
    console.log(s2)
    
    return s1===s2

    }

 console.log(isAnagram("listen","silent"))

