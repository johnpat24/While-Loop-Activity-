// the correct number need to guess
const number = 5

let guess;

while (guess !== number) {
// prompt that will ask the user to enter thier guess    
    guess = parseInt(prompt(" guess the number from 1 to 10: "))
    
//  it will determine if its is higher, lower or correct
    if (guess < number) {
        console.log(" too low!");
    } else if (guess > number) {
        console.log(" too high!");
    } else {
        console.log(" correct!");
    }
}