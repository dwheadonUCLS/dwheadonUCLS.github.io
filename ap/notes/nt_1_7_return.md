# Return values

## Create a static method that returns a value

```java
/** 
 * Describe your methods in a Javadoc comment 
 * @param parameterName Describe this parameter 
 * @return Describe the return value 
 */ 
public static returnType methodName(parameterType parameterName, ...) { 
    // Code to run when the method is called 
}
``` 

### Example
```java
class Store { 
    /** 
     * Compute and return the sales tax for the given amount 
     * @param amount The amount for which tax is owed 
     * @return The amount of tax owed (not rounded) 
     */ 
    public static double calcTax(double amount) { 
        return amount * 0.0625; 
    } 
}
```

These static methods are called the same way as other methods but the value that is returned will replace the function call and can be printed, used in a variable assignment or some other expression.

### Example
```java
double taxForMyPurchase = Store.calcTax(99.99);
```