
// All of this must be in different files, but for the sake of the example I put it in same file. You should put them all in one file.

interface EmailTransmissionResult {
    // Define properties and methods based on your specific requirements
    success: boolean;
}

interface IEmailService {
    sendMail(mail: Mail): Promise<EmailTransmissionResult>;
}

class Mail {
    // Define properties and methods for the Mail class
    subject: string;
    from: string;
    to: string[];
    body: any;
}

class SendGridService implements IEmailService {
    sendMail(mail: Mail): Promise<EmailTransmissionResult> {
        // Implement SendGrid email sending logic here
        return new Promise((resolve, reject) => {});
    }
}

class MailChimpService implements IEmailService {
    sendMail(mail: Mail): Promise<EmailTransmissionResult> {
        // Implement MailChimp email sending logic here
        return new Promise((resolve, reject) => {});
    }
}

class AmazonSESService implements IEmailService {
    sendMail(mail: Mail): Promise<EmailTransmissionResult> {
        // Implement Amazon SES email sending logic here
        return new Promise((resolve, reject) => {});
    }

    generateReport(): Promise<AWSSESReportPDF> {
        // Implement report generation logic here
        return new Promise((resolve, reject) => {});
    }
}

class AWSSESReportPDF { 
   // Define properties and methods for AWSSESReportPDF class 
} 

class MailgunService implements IEmailService { 
   sendMail(mail: Mail): Promise<EmailTransmissionResult> { 
      // Implement Mailgun email sending logic here 
      return new Promise((resolve, reject) => {}); 
   } 

   getEmailOpens(): number { 
      // Return number of emails opened 
      return 0; 
   } 

   getEmailClicks(): number { 
      // Return number of emails clicked on links inside them.
      return 0;  
   }  
}



// Go to use-case.ts file to see it in action