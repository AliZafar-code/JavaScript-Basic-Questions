function humanize_format(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Invalid input';
    }

    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    let suffix = 'th';
    if (lastDigit === 1 && lastTwoDigits !== 11) {
        suffix = 'st';
    } else if (lastDigit === 2 && lastTwoDigits !== 12) {
        suffix = 'nd';
    } else if (lastDigit === 3 && lastTwoDigits !== 13) {
        suffix = 'rd';
    }

    return number + suffix;
}

// Test Data
console.log(humanize_format());  
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 
