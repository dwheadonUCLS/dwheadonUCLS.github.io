## Execute code a specific number of times

```java
for (indexVarInit; runCondition; incrementOrDecrement) { 
    // Code to run multiple times 
}
```
`indexVarInit` tells you where to start; `runCondition` tells you where to stop (or rather how long to keep going); `incrementOrDecrement` tells you how to get there
```java
// Example: Prints out the numbers from 0 to 99 
for (int i = 0; i < 100; i++) { 
    System.out.println(i); 
}
```

## Different ways to increment and decrement

The following 3 lines are equivalent: they each increase the variable by 1 
```java
variableName = variableName + 1; 
variableName += 1; 
variableName++; 
```
The following 3 lines are equivalent they each decrease the value of the variable by 1 
```java
variableName = variableName - 1; 
variableName -= 1; 
variableName--;
```
```java
// Examples
// This one could use other variables 
numApples = numApples + 3; 
// This one can use other increments 
numApples += 2; 
// This one can only increment by 1 
numApples++; 
// Similarly for decrement
numApples = numApples - 3; 
numApples -= 2; 
numApples--;
```

## Nested loops

You can have loops inside of loops but indentation should be consistent and care should be taken not to use the same variable to control the two loop.

```java
// Example: a common error with nested loops
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; i++) {
        // This loop will be infinite because j will never reach 10
    }
}