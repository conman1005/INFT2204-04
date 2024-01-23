let numbers = [1,2,3,4,5,6,7,8,9,0];


// DEPRICATED
export const squareNumsOld = numbers.map(function(n) {
    return n * n;
});


export const squares = numbers.map(n => n * n);

var even = [];

export const evens = numbers.forEach(n => {
    if (n % 2 === 0) {
        even.push(n);
    }
});

export const authour = {
    fullName: "Conner Cullity",
    books: ["Hello"],
    printBooks() {
        this.books.forEach((book) => console.log(book + " by " + this.fullName));
    }
}