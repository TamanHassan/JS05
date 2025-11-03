const account = {
    accountName: "Taman",
    balance: 1000,

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

    account.getAcoountName(); Taman 
    account.getBalance(); 1000
    account.deposit(500); You deposited $500. New balance is $1500.
    account.witdrawal(200); You withdrew $200. New balance is $1300.
    account.withdrawal(5000); Account Error: Insufficient funds.
    account.exitAccount(); Exiting account.
    


