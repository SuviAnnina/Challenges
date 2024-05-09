/* 
Ghallenge:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

export class Kata {
    static getCount(str: string): number {

        const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
        let count: number = 0;

        if (str.length > 0) {
            str.split('').forEach(letter => {
                if (vowels.includes(letter.toLowerCase())) {
                    count++;
                }
            });
        }

        return count;

    }
}