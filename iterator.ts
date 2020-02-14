// Example proving how an Array implements the Iterable protocol
// meaning it can be iterated via its Iterator's next() fn
let ar = [1,2];
let iterator = ar[Symbol.iterator](),
	result;
do {
	result = iterator.next(); /*?*/
} while (!result.done)
