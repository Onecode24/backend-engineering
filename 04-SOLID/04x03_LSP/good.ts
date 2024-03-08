type TransmissionResult = 'Success' | 'Failure' | 'Bounced'

interface IEmailTransmissionResult {
  result: TransmissionResult;
  message?: string;
}

type Mail = {
    // Define properties and methods for the IMail interface
    subject: string;
    from: string;
    to: string[];
    body: any;
}

interface IMailService {
  sendMail(email: Mail): Promise<IEmailTransmissionResult>
}

class SendGridEmailService implements IMailService {
    sendMail(email: Mail): Promise<IEmailTransmissionResult> {
      // algorithm
      return Promise.resolve({ result: 'Success' });
    }
  }
  
  class MailChimpEmailService implements IMailService {
    sendMail(email: Mail): Promise<IEmailTransmissionResult> {
      // algorithm
      return Promise.resolve({ result: 'Success' });

    }
  }
  
  class MailGunEmailService implements IMailService {
    sendMail(email: Mail): Promise<IEmailTransmissionResult> {
      // algorithm
      return Promise.resolve({ result: 'Success' });

    }
  }
//   ...



// Go to use-case.ts to see the why the LSP is respected