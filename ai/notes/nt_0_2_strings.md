f-strings allow easily putting values into strings
```python
f"some text with {some_value + or_calcualtion} embedded inside"
```

Get a character at a specific (zero-based) position in a string:
```python
string[index]
```

* indecies are zero-based (the first letter is at position 0)
* a negative index will start at the end of the string
* if the index used is bigger than the size of the string, you will get an `IndexError`

Two formats for slicing a string:
```python
string_value_or_variable[start_index : stop_index]
string_value_or_variable[start_index : stop_index : index_step]
```
* it goes up-to-but-not-including the stop index

The `in` operator to check for a sub-string somewhere in a string
```python
sub_string in string
```

Call a method on a string
```python
some_string.method_name(values, of, arguments)
```
* only valid [string methods](https://docs.python.org/3/library/stdtypes.html#string-methods) are allowed
* the methods don't change the string (they are **immutable**) but rather return a new version of the original string with the alterations applied

Go through the characters in a string one letter at a time
```python
for variable_name in some_string:
    # Code to run for each letter in the string 
    # variable_name will represent the current letter
```