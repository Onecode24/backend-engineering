interface IMail {
    from: string
    to: string
    subject: string
    body: string
    //... other fields
}
  
interface ShortEmailTransmissionResult {
    success: boolean
    message: string
}

interface IMailService {
    sendMail(email: IMail): Promise<ShortEmailTransmissionResult>
}


class SendGridService implements IMailService {
    sendMail(email: IMail): Promise<ShortEmailTransmissionResult> {
      // send mail
      return Promise.resolve({success: true, message: 'Mail sent successfully'});
    }
}

class MailChimpService implements IMailService {
    sendMail(email: IMail): Promise<ShortEmailTransmissionResult> {
      // send mail
      return Promise.resolve({success: true, message: 'Mail sent successfully'});
    }
}

//? IMPORTANT: We're no longer limiting ourselves to a particlar concrete class.

class EmailService {
    private emailService: IMailService; // <- abstraction
    constructor (emailService: IMailService) { // <- abstraction
      this.emailService = emailService;
    }

    sendMail(email: IMail): Promise<ShortEmailTransmissionResult> {
      return this.emailService.sendMail(email);
    }

  }