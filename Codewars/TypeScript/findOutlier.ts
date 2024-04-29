/* 
Challenge:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a 
single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

export function findOutlier(integers: number[]): number {
    let evenNumbers: number[] = [];
    let oddNumbers: number[] = [];

    for (let i = 0; i < integers.length; i++) {
        if (isEvenNumber(integers[i])) {
            evenNumbers.push(integers[i]);
        } else {
            oddNumbers.push(integers[i]);
        }

        // Stop looping when the outlier is found
        if (i >= 2) {
            if (evenNumbers.length == 1) {
                return evenNumbers[0];
            } else if (oddNumbers.length == 1) {
                return oddNumbers[0];
            }
        }
    }
    // should never happen
    return 0;
}

export function isEvenNumber(number: number): boolean {
    return number % 2 === 0;
}
