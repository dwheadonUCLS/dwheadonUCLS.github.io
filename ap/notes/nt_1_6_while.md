## Execute code as long as a condition is true

```java
while (loopCondition) { 
    /* Code to run as long as the
    loop condition is true */ 
}
``` 

Better to use this than a for loop with a break

### Example
```java
// Move forward until a wall 
while (karel.frontIsClear()) { 
    karel.move(); 
}
```

## Prematurely end a loop

```java
break;
``` 

### Example
```java
// Prints out the numbers from 15 to 99 until it gets to a multiple of 13 
for (int i = 15; i < 100; i++) { 
    if (i % 13 == 0) { 
        break; 
    } 
    System.out.println(i); 
}
```

## Skip an iteration of a loop

```java
continue;
``` 

### Example
```java
// Prints out the numbers from 15 to 99 except for multiple of 13 
for (int i = 15; i < 100; i++) { 
    if (i % 13 == 0) { 
        continue; 
    } 
    System.out.println(i); 
}
```
