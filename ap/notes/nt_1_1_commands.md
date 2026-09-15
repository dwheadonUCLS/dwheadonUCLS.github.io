## Define a runnable program
* ***All of your code*** must go inside of the main
```java
public class ProgramName {
    // no code here
    public static void main(String[] args) {
        // All code to run goes here
    }
    // no code here
}
// no code here
```
```java
// Example
public class GreeterProgram {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
* Before running a program it has to be **compiled**: the process of turning human readable Java instructions into machine executable 1's and 0's

## Call a method on an object
* Assumes the object has already been created. 
* Parameter values **must** match what's found in the documentation.
```java
objectName.methodName(required, parameter, values);
```
```java
// Example
karel.move();
terry.goForward(10);
```
## Use any class from a package
```java
import packagename.*;
```
```java
// Example
import turtlefx.*;
// Now we can use Turtles, Worlds, or anything else found in there
```
## Use only one specific class from a package
```java
import packagename.ClassName;
```
```java
// Example
import carpeterfx.Carpeter;
import turtlefx.World;
// But usually you don't want to mix and match
```
## Use static values inside a class
```java
import static packagename.ClassName.*;
```
```java
// Example
import static carpeterfx.Direction.*;
import static javafx.scene.paint.Color.*;
```
## Note on importing
* Importing isn't strictly necessary because you can always use the "fully qualified name" but it allows you to use the values directly and do less typing
```java
// Example
// Instead of needing the fully qualified name
javafx.scene.paint.Color.RED
// Or
carpeterfx.Direction.NORTH
// After importing like this you can instead use just
RED
// Or
NORTH
```
* Final values (ones that can't change) are typically in all UPPERCASE