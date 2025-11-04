const account = {
    accountName: "Taman",
    balance: 1000,

    getAccountName: function() {
        console.log(`Account Name: ${this.accountName}`);
    },

    getBalance: function() {
        console.log(`Current Balance: $${this.balance}`);
    },

    deposit: function(amount) {
        if (amount <= 0 || isNaN(amount)) {  
            this.accountError("Invalid deposit amount.");
            return;
        }
        this.balance += amount;
        console.log(`You deposited $${amount}. New balance is $${this.balance}.`);
    },
    accountError: function(message) {
        console.error(`Account Error: ${message}`);
    },

    exitAccount: function() {
        console.log("Exiting account.");
    }
    };

    account.getAccountName(); 
    account.getBalance(); 
    account.deposit(500); 
    account.withdrawal(200); 
    account.withdrawal(5000);
    account.exitAccount(); 



