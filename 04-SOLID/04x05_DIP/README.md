## Example

In this example we are going to show a great implementation of the Dependency Inversion Principle (DIP) with the example of [EmailService](../04x02_OCP/README.md).

We are going to create a `EmailService` class that will be the high-level module and we will create a `SendGridService` and `MailChimpService` classes that will be the low-level modules.\
We will use the `MailService` class to send an email and we will use the `SendGridService` and `MailChimpService` classes to send the email respecting the DIP.