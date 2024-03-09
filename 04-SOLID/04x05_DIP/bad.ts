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


class _SendGridService implements IMailService {
    sendMail(email: IMail): Promise<ShortEmailTransmissionResult> {
      // send mail
      return Promise.resolve({success: true, message: 'Mail sent successfully'});
    }
}

class _MailChimpService implements IMailService {
    sendMail(email: IMail): Promise<ShortEmailTransmissionResult> {
      // send mail
      return Promise.resolve({success: true, message: 'Mail sent successfully'});
    }
}

class _EmailService {
    // we're limiting ourselves to a particlar concrete class.
    private emailService: _SendGridService; // <- concretion
    constructor (emailService: _SendGridService) { // <- concretion
      this.emailService = emailService;
    }
    
    send_newMail(email: IMail): Promise<ShortEmailTransmissionResult> {
      return this.emailService.sendMail(email);
    }
}