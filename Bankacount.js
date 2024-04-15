class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount} into account.`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount} from account.`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Create two instances of the BankAccount class
  const account1 = new BankAccount(1001, "John Doe", 500);
  const account2 = new BankAccount(1002, "Jane Smith", 1000);
  
  // Demonstrate functionality of methods
  console.log("Account 1:");
  account1.deposit(200);
  account1.withdraw(50);
  account1.displayAccountInfo();
  
  console.log("\nAccount 2:");
  account2.deposit(300);
  account2.withdraw(1500); // Attempting to withdraw more than the balance
  account2.displayAccountInfo();