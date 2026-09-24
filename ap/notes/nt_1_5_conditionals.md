## Conditionally execute code
```java
if (booleanExpression1) { 
    // Code to run when booleanExpression1 is true 
} else if (booleanExpression2) { 
    // Code to run when booleanExpression1 is false AND booleanExpression2 is true 
} else { 
    // Code to run when BOTH / ALL conditions are false 
}
```

The `else` and the `else if` parts are optional but the if part is NOT optional

The else does _NOT_ have a condition. Its condition is implicitly the opposite of the if's. If you put a condition it will not compile or run.

### Example
```
if (age >= 20) { 
    System.out.println("You're old'"); 
} else if (age > 13) { 
    System.out.println("You're a teenager"); 
} else { 
    System.out.println("You're a little kid"); 
}
```

## Create a boolean expression

Any of the following or combination of them
1. boolean value
1. boolean variable
1. method that returns a boolean value 
1. comparison operation 
1. boolean operation (all of which evaluate to a boolean value)
```java
// Mirroring the list above
true 
isRoom
karel.frontIsClear()
age > 10 
karel.frontIsClear() && row > 10
```

Comparison operators:   <   <=   ==   !=   >=   >

Boolean operators:   
* and: `&&`
* or: `||`   
* not: `!`

The "and" and "or" operators take two operands (left and right) while the "not" operator only takes one operand (right)

String methods: see [the docs](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html) (especially equals and contains)
