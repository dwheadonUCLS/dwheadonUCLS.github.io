# Calling functions

## Basic function call syntax
```python
function_name(argument1, argument2, etc)
```
Note: arguments can be simple values or other function calls but they have to be the **type** of value that the function is expecting.

### Examples
```python
print("hello world")
hex(75)
print( bin(100) )
```

# Finding out about built-in functions
```python
help(function_name)
```
or look up the [documentation](https://docs.python.org/3/library/functions.html)

## Function call syntax with optional parameters
```python
function_name(regular_arguments, optional_parameter=optional_argument)
```
Note: optional parameters need to go at the end

### Example
```python
print(100, 200, 300, sep="+++")
```
## Vocabulary
* syntax: rules you have to follow to make valid code
* function: command that tells Python to do something
* comment: text that is embedded in the code that describes what it does (for human benefit). Comments in Python are started with a `#`: anything after that is ignored by Python
* documentation: the place where you go to find out how to use a function: python.org is the official source (though not always the most helpful)
* separator: used to separate distinct things: Python uses commas ","