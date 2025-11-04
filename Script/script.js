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

    withdrawal: function(amount) {
        if (amount <= 0 || isNaN(amount)) {  
            this.accountError("Invalid withdrawal amount.");
            return;
        }

        if (amount > this.balance) {
            this.accountError("Insufficient funds for this withdrawal.");
            return;
        }

        this.balance -= amount;
        console.log(`You withdrew $${amount}. New balance is $${this.balance}.`);
    },


    accountError: function(message) {
        console.error(`Account Error: ${message}`);
    },

    exitAccount: function() {
        console.log("Exiting account.");
        this.accountName = "";
        this.balance = 0;
        console.log("Account data cleared.");
    }
    };

    function atm() {
        let action;
        do {
            action = prompt(
                `Choose an action:
                1.View balance
                2.Deposit Money
                3.Withdraw Money
                4.Exit Account
                5.Change Account Name
                6.Exit ATM (Log Out) `
            );

            switch(action) {
                case '1':
                    account.getBalance();
                    break;
                case '2':
                    let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                    account.deposit(depositAmount);
                    break;
                case '3':
                    let withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
                    account.withdrawal(withdrawalAmount);
                    break;
                case '4':
                    account.exitAccount();
                    break;
                case '5':
                    let newName = prompt("Enter new account name:");
                    account.accountName = newName;
                    console.log(`Account name changed to ${newName}.`);
                    break;
                case '6':
                    console.log("Logging out of ATM.");
                    break;
                default:
                    console.log("Invalid action. Please try again.");
            }
        } while (action !== '6');
    }


    account.getAccountName(); 
    account.getBalance(); 
    account.deposit(500); 
    account.withdrawal(200); 
    account.withdrawal(5000);
    account.exitAccount(); 



