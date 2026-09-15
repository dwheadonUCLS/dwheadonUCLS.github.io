## Declare a variable
```java
VariableType variableName;
```
```java
// Example
int numOranges;
```
Once a variable has been declared, it's type cannot change

## Primitive Data Types
| Type | Description | Default Value | Example(s) | Operators
| --- | --- | --- | --- | --- |
| int | integers | 0 | 8, -3, 100000 | + - * / % |
| double | numbers with decimal points | 0.0 | 3.14159 | + - * / |
| boolean | true or false | false | true | && \|\| ! | 
| String | sequence of characters | null | "hello", "3.14" | + |

## Naming rules

1.  Cannot be a reserved keyword
2.  Cannot _start_ with a number
3.  No punctuation, delimeters, or special characters
4.  No spaces
5.  Can't already be a variable with that name

_Recommended_ (not required) to use camel case

## Use Camel Case

`capitalizeFirstLetterOfNewWords`

Use when appropriate: when the purpose of the variable can't be summarized in a single word

## Define a variable

Assign a value: assumes it's already been declared

```java
variableName = compatibleValue;
```

compatibleValue can be a literal value, another variable (already defined), method call (that returns a value), or an expression but it has to be the same type as the variable (as established when it was declared)

```java
// Examples
pi = 3.14; r = pi;
circumference = 2 * Math.PI * r; 
oppositeSide = Math.sin(45) * h;
```


## Declare and define a variable simultaneously

```java
VariableType variableName = initialValue;
```
```java
// Example
double pi = 3.14;
```