class BankBalance{
    #balance
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if(amount<=0){
            console.log("Deposit amount must be greater than 0.")
            return
        }

        this.#balance += amount;
        console.log(`${amount} deposit`)
    }

    withfraw(amount){
        if(amount<=0){
            console.log("Withdraw amount must be greater than 0.")
            return
        }
        if(amount >this.#balance){
            console.log("Insufficient balance.")
            return
        }
        this.#balance -=amount
        console.log(`${amount} withdraw`)

    }

    tellBalance(amount){
        console.log(`Current balance: ${this.#balance}$`)
        return this.#balance
    }
    
}

const user = new BankBalance(200)

user.tellBalance()
user.deposit(500)
user.withfraw(400)
user.tellBalance()



















