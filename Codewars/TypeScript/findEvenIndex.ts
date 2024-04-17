export function findEvenIndex(arr: number[]): number {
    if (arr.length == 0) {
        return -1
    }

    for (let i = 0; i < arr.length; i++) {
        let left = 0;
        let right = 0;

        // slice the given array to the left and right parts depending on i
        let toTheLeft = arr.slice(0, i);
        let toTheRight = arr.slice(i + 1);

        // handle first and last index of array
        if (i != 0) {
            // reduces an array to one number value
            left = toTheLeft.reduce((total, num) => { return total + num; });
        }
        if (i != arr.length - 1) {
            right = toTheRight.reduce((total, num) => { return total + num; });
        }

        if (left == right) {
            return i;
        }
    }

    return -1;
}