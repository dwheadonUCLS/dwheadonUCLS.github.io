DRY is the principle that all programmers live by
* Don't
* Repeat
* Yourself

Purpose of functions:
1. eliminate repeated code
2. easier to understand
3. easier to test
4. easier to maintain

Function creation / definition syntax:
```python
def function_name(param_1_name, param_2_name, etc):
    # Code to run (indented) when the method is called
    # Parameter values are refered to using the names given above
    # Most functions will want to return something at the end
```
* generally `function_name` should start with an action verb and should **not** be the same as a built-in / imported variable or function
* if a function doesn't return a value `None` is returned by default

Function calling syntax:
```python
function_name(argument_1_value, argument_2_value, etc)
```
* The first value in the parenthesis will be used for the first parameter, etc. (order matters)
* The number of arguments ***has to match*** the number of parameters where the function is defined
* Calling a function doesn't usually do anything so you will want to either save the value it returns in a variable or use it immediately (e.g. `print` it)
* When it is run, the function call gets replaced by the value that is `return`ed
