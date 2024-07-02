// 1 misol

/*function swap(a, b) {
    return [b, a];
}


let a = 1;
let b = 2;
[a, b] = swap(a, b);
console.log(`a: ${a}, b: ${b}`); 

let x = "hello";
let y = "world";
[x, y] = swap(x, y);
console.log(`x: ${x}, y: ${y}`);*/


// 2 misol

/*function assertString(input) {
    if (typeof input !== 'string') {
        throw new Error('Input is not a string');
    }
}

try {
    assertString("hello")
    console.log("Input is a string");
} catch (e) {
    console.error(e.message);
}

try {
    assertString(123);
} catch (e) {
    console.error(e.message);
}*/


// 3 misol


/*function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter(item => item < pivot);
    const right = array.filter(item => item > pivot);
    const middle = array.filter(item => item === pivot);
    return [...quicksort(left), ...middle, ...quicksort(right)];
}


function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000));

const quicksortStart = performance.now();
const quicksortedArray = quicksort(array);
const quicksortEnd = performance.now();
console.log(`Quicksort ishlash vaqti: ${quicksortEnd - quicksortStart} ms`);


const mergesortStart = performance.now();
const mergesortedArray = mergesort(array);
const mergesortEnd = performance.now();
console.log(`Mergesort ishlash vaqti: ${mergesortEnd - mergesortStart} ms`);*/
