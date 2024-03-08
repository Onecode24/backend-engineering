class _SendGridService {
    public sg : any;
    constructor (sendgridInstance: any) {
        this.sg = sendgridInstance;
    }

    sendGridMail (from: string, to: string[], body: any) {
        // format the mail object to the sendgrid api shape
        // send it
        // create a result object 
        // return the result (success, failure, bounded, etc)
    }
}

class _MailChimpService {
    public sendGridService: SendGridService;
    constructor (sendGridService: SendGridService) {
        this.sendGridService = sendGridService;
    }

    sendChimpMail (from: string, to: string[], body: any) {
        // format the mail object to the mailchimp api shape
        // send it
        // create a result object 
        // return the result (success, failure, bounded, etc)
    }
}

//! The problem with this approach is that if we want to add a new service,
//! we will have to modify everywhere SendGridMail class is used. This violates the Open/Closed Principle.
//! We should be able to add new functionality without modifying existing code.