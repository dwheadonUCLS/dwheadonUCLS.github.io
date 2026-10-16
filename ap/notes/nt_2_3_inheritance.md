# Inheritance

## Define an object type based on another type

```java
public class TypeName extends ParentType { 
    /* constructors and any new methods and instance 
     * variables that will be added on top of the ones 
     * that are inherited from the parent class
     */ 
}
``` 

### Example
```java
public class MyCarpeter extends Carpeter { 
    public MyCarpeter(World w, int rugs) { 
        super(w, 2, 3, EAST, rugs); 
        super.move(); 
    } 
}
```

The _first_ thing in the constructor of a derived (child) class _must_ be a call to the super (parent) constructor. If it's not there Java will put it there for you whether you like it or not.

## Implicitly cast an object to a different type

```java
ParentType variableName = existingObject;
```

### Example
```java
Employee e = new Employee(); Person p = e;
```

## Explicitly casting a value to different type

```java
(targetType) someValue
```

### Example
```java
(int) 5.89
```

Note: casting from a less precise type to a more precise type (e.g. int to double) can happen implicitly (without an explicit cast) but going the other way around requires an explicit cast because some data will (at least potentially) be lost.

## Explicitly cast an object to a different type

```java
(NewType) objectReference
``` 

### Example
```java
// The Employee class inherits from the Person class 
Person p = new Employee(); // valid implicit cast 
Employee e = (Employee) p; // explicit cast needed: not every Person is an Employee
```

Upcasts are always valid and can be done without the explicit cast

Downcasts can cause runtime errors (ClassCastException) and as such require the explicit cast

## Check the type of an object

```java
if (objectReference instanceof SomeType) { 
    // Safe to cast to SomeType 
}
```

### Example
```java
// The Employee class inherits from the Person class 
Person p = new Employee(); 
if (p instanceof Employee) { 
    // Safe to cast p to an Employee 
}
```
