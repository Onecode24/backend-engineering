class Employyee {
    public calculatePay (): number {
        let value: number = 0;
        // implement algorithm for hr, accounting and it
        return value;
    }
    public reportHours (): number {
        let report: number = 0;
        // implement algorithm for hr, accounting and it
        return report;
    }
  
    public save (): Promise<any> {
      // implement algorithm to save employee
      return Promise.resolve();
    }
  }

  //! This is bad, very bad. The algorithm for each department is located in the same class.
  //! If one department were to request a change to one of their respective algorithms,
  //! it has the increased potential to ripple into another department's algorithm.