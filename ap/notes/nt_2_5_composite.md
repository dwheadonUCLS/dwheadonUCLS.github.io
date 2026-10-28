# Composite classes

Note: There is no new Java syntax for this lesson

A "composite" class (our definition) is a class that is itself composed (instance variables) of other objects (not just primitive data types)

Most of the classes you've seen up to this point have been composed of only primitive data types. But it is possible to have classes that are composed of other classes or even the same type of class that is being defined.

```java
public class CompositeType {
    private OtherClassType c1;
    private YetAnotherClassType c2;

    // with corresponding constructors and getters / setters...
}
```

## Example
```java
public class Employee {
    private String firstName; 
    private String lastName;
    private Address a; // another type of class with a number, street, city, state, zip
    private Employee supervisor; // the same class as is being defined here

    // with corresponding constructors and getters / setters...
}
```
