//Mortage repayments example

const readline = require('node:readline');//interface to read input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});//takes user input and write output back to it.

function main(){

  //Question displayed in the console
  rl.question('\nChoose an option:\n\n1. Start new mortgage calculation\n2. Exit\n\n=', (choice) => {

  //If first option is chosen

  if (choice == 1){

    rl.question('Enter the principal amount: ', (principal) => {
    rl.question('Enter the annual interest rate (in percentage): ', (interestRate) => {
    rl.question('Enter the loan term in years: ', (loanTerm) => {
  
  // to throw error if user inputs negative value

  if (principal <= 0 || interestRate <= 0 || loanTerm <= 0) {
       throw new Error("Invalid input: All parameters must be positive.");
              }

  // Convert interest rate to monthly rate
     const monthlyInterestRate = interestRate / 12 / 100;

  // Calculate the number of monthly payments
    const numberOfPayments = loanTerm * 12;

  // Calculate the monthly payment using the formula
    const monthlyPayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    console.log("New monthly mortgage repayment:", monthlyPayment.toFixed(2));//
    main(); // Recursively call main to allow for multiple calculations

    });
     });
     });
      return 
  }

//if second option is chosen
      else if (choice == 2 ){
        console.log("Exiting...");
        rl.close();//closes
      }

 //if invalid choice is chosen     
      else{
        console.log("Invalid choice. Please try again.");
      }
    
  });
}

main();