export function findEvenIndex(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        let leftSum: number = 0;
        let rightSum: number = 0;

        // if not first index, get the sum to the left of index
        if (i != 0) {
            let toTheLeft = arr.slice(0, i);
            leftSum = arraySum(toTheLeft);
        }

        // if not last index, get the sum to the right of index
        if (i != arr.length - 1) {
            let toTheRight = arr.slice(i + 1);
            rightSum = arraySum(toTheRight);
        }

        if (leftSum == rightSum) {
            return i;
        }
    }
    return -1;
}

// reduces an array to one number value 
function arraySum(array: number[]): number {
    return array.reduce((total, num) => { return total + num; });
}