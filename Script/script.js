const account = {
    accountName: "Tams"
    balance: 1000,

    deposit: function(amount) {
        if (amount <= 0 ) isNaN(amount) {  
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


