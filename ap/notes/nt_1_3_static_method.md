## Create a simple static method

```java
public static void methodName(paramType paramName) { 
    // Code to run when the method is called 
}
``` 

```java
// Example
public static void makeL(Turtle t) { 
    t.goForward(100); 
    t.turnLeft(90); 
    t.goForward(100); 
}
``` 
* Convention: make methods have an _action (verb)_ name

## Call a static method in the same class where it's defined

```java
methodName(paramValue);
``` 
```java
// Example
makeL(terry);
``` 

## Call a static method in a *different* class

```java
// Assuming the class has been imported
ClassName.methodName(required, parameter, values);
```
```java
// Example: In the main method inside MyProgram.java 
double tax = Store.calcTax(100); // my function in Store.java
double distance = Math.sqrt(x * x + y * y); // Java function in Math.java
``` 

## Comments

```java
// Single line comment 

/* 
    Multi 
    line 
    comment 
*/ 

/** 
 * <h1>JavaDoc</h1> comments have two asterisks and can 
 * contain HTML. They should be placed immediately before a method 
 */
```
