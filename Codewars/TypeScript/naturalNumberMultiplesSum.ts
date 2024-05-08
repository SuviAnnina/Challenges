/* 
Challenge:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

export class Challenge {
    static solution(number: number) {
        if (number < 0) {
            return 0
        }

        let numbers: number[] = [];
        let sum: number = 0;

        // Calculate multiples of 3
        for (let i = 1; 3 * i < number; i++) {
            numbers.push(3 * i);
        }

        // Calculate multiples of 5 and add them if they don't already exist in the array
        for (let i = 1; 5 * i < number; i++) {
            const newNumber = 5 * i;
            if (!numbers.includes(newNumber)) {
                numbers.push(newNumber);
            }
        }

        for (const element of numbers) {
            sum += element
        }

        return sum
    }
}
