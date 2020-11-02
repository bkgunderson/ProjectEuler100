/*
	The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

	Find the n adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

const sampleNumber = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450;

// creates an array composed of the digits in a number
function createArrayFromNumber(num) {
	let arr = [];
    while (num > 9) {
        var nextElement = num % 10;
        arr.unshift(nextElement);
        num = (num - nextElement) / 10;
    }
    arr.unshift(num);
    return arr;
}

function largestProductInASeries(number, factorCount) {
	let arrayOfDigits = createArrayFromNumber(number);
	// Current start and end digits' indexes
	let startIndex = 0;
	let endIndex = factorCount - 1;
	// Index of the last digit in the array
	let lastIndex = arrayOfDigits.length - 1;

	let largestProduct = 0;

	while(endIndex <= lastIndex) {

		let product = 1; // Product of the current group (start - end)
		let tmpStartIndex = startIndex; 

		// Multiply the product with each of the digits between current start - end
		for(; tmpStartIndex <= endIndex; tmpStartIndex++) {
			product *= arrayOfDigits[tmpStartIndex];
		}

		// Update largest product when a larger one is found
		if(product > largestProduct) largestProduct = product;

		// Increment both start and end for the next group of digits
		startIndex++;
		endIndex++;
	}

	return largestProduct;
}

let result = largestProductInASeries(sampleNumber, 4);
console.log('result:', result);
