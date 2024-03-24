
/* question 

Write a JavaScript function to insert a string within a string at a particular position (default is 1).

Test Data:
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."

*/



function insertString(str1, insertString, position = 1) {
    // If the position is greater than the length of the main string,
    // concatenate the 'insertString' string to the end of the main string
    if (position > str1.length) {
      return str1 + insertString;
    }
    
    // Otherwise, insert the insertString string at the specified position
    return str1.slice(0, position) + insertString + str1.slice(position);
  }
  
  // Test Data
  console.log(insertString('We are doing some exercises.')); // Output: "We are doing some exercises."
  console.log(insertString('We are doing some exercises.', 'JavaScript ')); // Output: "JavaScript We are doing some exercises."
  console.log(insertString('We are doing some exercises.', 'JavaScript ', 18)); // Output: "We are doing some JavaScript exercises."
  