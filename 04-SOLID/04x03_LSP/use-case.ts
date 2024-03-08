
let emailService : IMailService = new SendGridEmailService();

const mailGunEmailService = new MailGunEmailService();

emailService = mailGunEmailService;

// This is valid because MailGunEmailService is a subtype of IMailService