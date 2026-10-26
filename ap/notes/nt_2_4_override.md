# Overrides and overloads

## Override a method that already exists in a ParentType

```java
@Override 
visibility returnType methodName(pType pName) { 
    // New code to run when calling this method 
}
``` 

### Example
```java
public class MyCarpeter extends Carpeter { 
    @Override 
    public void move() { 
        // two steps for every move
        super.move(); 
        super.move(); 
    } 
}
```

The method name, parameters and return type have to be ***identical*** to the original for it to be considered overridden.

NOTE: if you intend to call the parent class' method inside your overriding method you must use the `super` prefix or you will get infinite recursion (AKA stack overflow crash)

The `@Override` notation isn't strictly necessary but it's _very_ good practice (ie. it will be required by your instructor).

## Overloading

This is the practice of providing multiple methods with the same name but with different *signatures*: different number / types of parameters. Java will know which version of the method to call based on the parameter values that are passed to the method call. 

### Example Class
```java
public class MyTurtle extends Turtle { 
    @Override 
    public void goForward(int distance) { // the normal version takes a double
        System.out.println("Moving " + distance + "whole pixels"); // and doesn't print
    } 
}
```

### Example Program
```java
public class TurtleProgram { 
    public static void main(String[] args) {
        World w = new World();
        Turtle t = new Turtle(w, 100, 100, 0);
        t.goForward(50); // calls the overloaded version in MyTurtle
        t.goForward(50.2); // calls the original version in Turtle
    }
}
```
