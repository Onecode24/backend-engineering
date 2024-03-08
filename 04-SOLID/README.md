# Principle SOLID
Principle SOLID 5 software design principles that help to create a good software architecture with :
- Tolerate change
- Easy code to understand
- Easy to maintain
- Write components that can be used in many software systems

## SOLID
- S: Single Responsibility Principle
- O: Open-Closed Principle
- LisKov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

### Single Responsibility Principle
***A class should have only one reason to change*** \
We determine responsability of one class according to the **social structure** of the **users usage**. \
**Example:** go to file [SingleResponsibilityPrinciple](./04x01_SRP)

### Open-Closed Principle
***A class should be open for extension, but closed for modification*** \
This principle is about **extending** the behavior of a class without **modifying** it. So to add new functionality, it shouldn't require changing the existing code.

**Tips**: To do this, we write **interfaces** and **abstract classes** in order to dictate the higher-level policy that needs to be implemented, and then we implement that policy using concrete classes.

**Example:** go to file [OpenClosedPrinciple](./04x02_OCP)