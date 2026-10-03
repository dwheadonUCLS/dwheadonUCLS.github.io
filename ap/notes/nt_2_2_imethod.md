# Instance Methods

## Define an instance method

Note that there's no `static` keyword here. The absence of `static` is what makes it an instance method.

```java
visibility returnType methodName(pType pName) { 
    // Code to run when calling this method 
}
``` 

### Example
```java
public void getPaid(double money) { 
    this.earnings += money; 
    System.out.println("Woohoo! " + this.name + " got paid " + money + " bucks!"); 
}
```

`visibility`: `public`, `private`, `protected`, or omitted (which makes it "package private")

`returnType`: `void`, primitive data type, or object type

Use `return` to send back a value (of type `returnType`) to the place where this method was called. If it doesn't match the declared `returnType` the code will not compile.

There are two common types of methods: getters (AKA accessors) and setters (AKA mutators)

* Getters will always take _no_ parameters and will return the value of the instance variable that you are getting
* Setters will always take a parameter (the new value for the instance variable) and will return no value (void)

## Call an instance method

```java
objectVariable.methodName(required, parameter, values);
``` 

### Example
```java
bob.getPaid(102.50);
```
