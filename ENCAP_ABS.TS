////*Modificar este ejemplo para que el tipo de cuenta se integre en la clase BankAccount por el mecanismo de composición. Además, accountType solo podrá ser de tipo:
//cuenta sueldo
//cuenta dólares
//cuenta corrienta
//caja ahorro


//Ejercicio 1: Encapsulamiento y Abstracción
//Enunciado:
//Crea una clase llamada BankAccount que represente una cuenta bancaria. 
//Esta clase debe tener atributos privados para el titular de la cuenta (owner), el saldo actual (balance) y el tipo de cuenta (accountType). 
//Implementa métodos públicos para depositar dinero (deposit), retirar dinero (withdraw) y obtener el saldo actual (getBalance). 
//Además, utiliza la abstracción para ocultar los detalles internos del funcionamiento de la cuenta.

class BankAccount {
    private owner: string;
    private balance: number;
    private accountType: string;

    constructor(owner: string, balance: number = 0, accountType: string = "Savings") {
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
    }

    deposit(amount: number): string {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        } else {
            return "Invalid deposit amount.";
        }
    }

    withdraw(amount: number): string {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        } else {
            return "Saldo Insuficiente.";
        }
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountType(): string {
        return this.accountType;
    }
}


const account = new BankAccount("Rosana Yuyu", 1000, "Actualizar");


console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.getAccountType());
