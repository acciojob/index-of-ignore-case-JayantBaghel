function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s2 === "") {
        return 0;
    }

    // Convert both strings to lower case to perform a case-insensitive search
    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();

    // Use indexOf to find the first occurrence of lowerS2 in lowerS1
    return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
