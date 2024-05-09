/* 
Challenge:
You are given an initial 2-value array (x). You will use this to calculate a score.
If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is 
that number. If neither is a number, return 'Void!'.
Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and 
the number of sub arrays should be equal to the score.

For example:
if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

export function explode(x: (number | string)[]): (number | string)[] | (number | string)[][] {

    let sum = 0;
    let result_array: (number | string)[][] = [];
    let has_zero = false;

    for (let i = 0; i < 2; i++) {
        if (typeof x[i] === 'number') {
            sum += x[i] as number;

            if (x[i] === 0) {
                has_zero = true;
            }
        }
        if (i == 1 && sum == 0 && has_zero == false) {
            return ['Void!']
        }
    }

    for (let i = 0; i < sum; i++) {
        result_array.push([...x]);
    }

    return result_array
}