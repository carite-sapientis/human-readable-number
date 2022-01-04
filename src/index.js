const upToTwenty = ['', "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
	"twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ['', "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
const thousands = ['', 'thousand', 'million', 'billion'];
module.exports = function toReadable(number) {

	if (number === 0) {
		return 0;
	}
	let counter = 0;
	let result = '';
	while (number > 0) {
		if (number % 1000 !== 0) {
			result = `${getWord(number % 1000)} ${thousands[counter]} ${result}`;
		}
		number = Math.floor(number / 1000);
		counter += 1;
	}
	return result;


	function getWord(number) {
		if (number === 0) {
			return 'Zero';
		}
		else if (number < 20) {
			return upToTwenty[number];
		}
		else if (number < 100) {
			return `${tens[Math.floor(number / 10)]} ${getWord(number % 10)}`;
		}
		else {
			return `${upToTwenty[Math.floor(number / 100)]} hundred ${getWord(number % 100)}`;
		}
	}
}