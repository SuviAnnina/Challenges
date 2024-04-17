export function findEvenIndex(arr: number[]): number {
    if (arr.length == 0) {
        return -1
    }

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // slice the given array to the left and right parts depending on i
        let toTheLeft = arr.slice(0, i);
        let toTheRight = arr.slice(i + 1);

        // handle first and last index of array
        if (i != 0) {
            leftSum = arraySum(toTheLeft);
        }

        if (i != arr.length - 1) {
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