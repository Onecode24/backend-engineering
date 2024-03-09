

const mailChimpService = new MailChimpService();
const sendGridService = new SendGridService();

const emailService = new EmailService(mailChimpService); //or new EmailService(sendGridService); 