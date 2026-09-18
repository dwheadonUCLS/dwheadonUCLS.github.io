# Exceptions

## Handle an exception

```java
try { 
    // Code that could throw an exception 
} catch (ExceptionType exceptionName) { 
    // Code to run when an exception occurs 
} finally { 
    // Code to run at the end whether 
    // or not an exception occurs 
}
``` 

### Example
```java
try { 
    doDangerousStuff(); 
} catch (DangerousException de) { 
    System.out.println("Error!"); 
} finally { 
    System.out.println("Goodbye!"); 
}
```

`try` is required, but only *need* one of either `catch` or `finally` but can have both

## Read data from a file

This is just a practical example of handling an exception

```java
import java.io.File; 
import java.util.Scanner; 
// ... 
// inside a method (e.g. main) 
File f = new File("somefilename.txt"); 
Scanner s = null; 
try { 
    // dangerous because the file might not exist
    s = new Scanner(f); 
} catch (Exception e) { 
    System.out.println("Error message..."); 
    System.exit(-1); 
} 
while (s.hasNextLine()) { 
    String line = s.nextLine(); 
    // do something with the data 
}
```

## Pass an exception on (to whomever called this method)

```java
public void myMethod() throws ExceptionType { 
    if (problemSituation == true) { 
        throw new ExceptionType("exception message"); 
    } 
}
``` 

### Example
```java
public void doDangerousStuff() throws DangerousException { 
    if (! goodSituation) { 
        throw new DangerousException(); 
    } 
}
```
