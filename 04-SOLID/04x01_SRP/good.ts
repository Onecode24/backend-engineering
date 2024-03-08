// Abstract Employee class to handle common functionality

abstract class Employee {
    // This needs to be implemented by the derived classes
    public abstract calculatePay(): number;
    // This needs to be implemented by the derived classes
    public abstract reportHours(): number;

    protected save(): Promise<any> {
        // implement algorithm to save employee
        return Promise.resolve();
    };
}

// Create a class for each department that extends Employee

//? HR class
class HR extends Employee {
    calculatePay (): number {
        let pay: number = 0;
        // implement own algorithm
        return pay;
    }
    reportHours (): number {
        let hours: number = 0;
        // implement own algorithm
        return hours;
    }
  }

 //? Accountingclass
class Accounting extends Employee {
    calculatePay (): number {
        let pay: number = 0;
        // implement own algorithm
        return pay;
    }
    reportHours (): number {
        let hours: number = 0;
        // implement own algorithm
        return hours;
    }
}

class IT extends Employee {
    calculatePay (): number {
        let pay: number = 0;
        // implement own algorithm
        return pay;
    }
    reportHours (): number {
        let hours: number = 0;
        // implement own algorithm
        return hours;
    }
}