# Instance Variables

## Define an instance variable

Each object (AKA instance) of a particular type (created with `new`) will maintain it's own value for each instance variable that you give to the class. Note that there's no `static` keyword here. The absence of `static` is what makes it an instance variable.

```java
visibility VariableType variableName = defaultValue;
``` 

### Example
```java
public class Employee { 
    private String myName = "Undefined"; 
    private int myAge; // no default value 
}
```

Instance variables are typically the first thing _directly_ inside a class definition (ie. not inside a method)

The `visibility` should almost always be private

It's good practice to give instance variables a default value but not necessary because they will often be given a value in the constructor...

## Define a constructor

**Note**: There's no return type here because a constructor always returns an object of this class type. If you put a return type here (even void) Java will **not** recognize it as a constructor and you will be very confused.

**Note:** Until you make your own, all classes have a default constructor that takes no parameters. Once you create your own constructor the default one is no longer available.

```java
public TypeName(pType pName, pType pName) { 
    // Code to run when creating 
    // an object of this type 
}
``` 

### Example
```java
public class Employee {
    private String myName;
    private int myAge;

    public Employee(String name, int age) { 
        this.myName = name; 
        this.myAge = age; 
    }
}
```

You will ***almost always*** want to save the parameters passed to a constructor in an instance variable. Use `this` to disambiguate between parameters and instance variables (especially when they have the same name). If the names don't clash you don't *need* to use this but it's good practice to use it anyway.

## Call a constructor to create an instance of an object

```java
ObjectType variableName = new ObjectType(required, parameter, values);
``` 

### Example
```java
Employee emp1 = new Employee("Gene Harmon", 32);
```

The required parameter values are defined by the constructor definition. The types of the parameters and the types of the values _must_ match.


