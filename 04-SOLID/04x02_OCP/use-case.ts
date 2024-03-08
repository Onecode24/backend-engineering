const emailService = new SendGridService(); // new MailChimpService(); // new AmazonSESService(); // new MailgunService();

const sampleMail: Mail = {
    subject: 'Hello, World!',
    from: 'noreply@onecode.com',
    to: ['tes@gmail.com'],
    body: 'This is a sample email body.'
    // Other mail properties...
};

emailService.sendMail(sampleMail)
    .then(result => {
        if (result.success) {
            console.log('Email sent successfully.');
        } else {
            console.error('Failed to send email.');
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
