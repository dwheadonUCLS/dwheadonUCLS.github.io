# Data types

The most common built-in types are:
* str: a string: a sequence of characters / letters that makes up a word, phrase, sentence or even an entire book. In Python these must be enclosed in either single quotes (AKA apostrophes) our double quotes. Triple-quoted strings can be used for strings that require multiple lines.
* int: an integer: can be either positive or negative but cannot have a fractional part
* float: a floating point number which can have a fractional part
* bool: a boolean: something that is either `True` or `False`

All delimiters have to be matched by a corresponding close delimiter. The delimiter used depends on the type of thing:
* strings: "", '', and the triple-quoted versions
* tuples, function arguments: ()
* dictionaries, sets, f-string values: {}
* lists: []

You can use only single-quotes (apostrophes) inside of strings that are delimited by double-quotes and you can only use double-quotes inside of strings that are delimited by single quotes unless you escape them with `\`

Special escape sequences are used for whitespace characters
* `\n` for newlines
* `\t` for tabs
