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

## Single Responsibility Principle (SRP)
***A class should have only one reason to change*** \
We determine responsability of one class according to the **social structure** of the **users usage**. \
**Example:** go to file [SingleResponsibilityPrinciple](./04x01_SRP)

## Open-Closed Principle (OCP)
***A class should be open for extension, but closed for modification*** \
This principle is about **extending** the behavior of a class without **modifying** it. So to add new functionality, it shouldn't require changing the existing code.

**Tips**: To do this, we write **interfaces** and **abstract classes** in order to dictate the higher-level policy that needs to be implemented, and then we implement that policy using concrete classes.

**Example:** go to file [OpenClosedPrinciple](./04x02_OCP)

## LisKov-Substitution Principle (LSP)
***Derived classes must be substitutable for their base classes*** 

This principle is about **inheritance** and **polymorphism**. It states that if a program is using a base class, then the reference to the base class can be replaced with a derived class without affecting the functionality of the program.

**Example:** go to file [LiskovSubstitutionPrinciple](./04x03_LSP)

## Interface Segregation Principle (ISP)
***A client should never be forced to implement an interface that it doesn't use*** 

This principle is about **interfaces**. It states it’s better to have `smaller`, `focused` **interfaces** rather than large, monolithic ones.

**Example:** go to files[InterfaceSegregationPrinciple](./04x04_ISP)