* encode: turn something into the binary that a computer can store
* decode: turn some binary back into the thing it was intended to represent
* ASCII: American Standard Code for Information Interchange: the standard that specifies what 1-byte number each character on your keyboard corresponds to
* standard: a universally accepted rule or way of doing something
* Unicode: the correspondence of numbers to characters that encompasses all the characters in all human languages
* UTF-8: the most common way to encode Unicode characters using a variable amount of bytes (1-4)
    * compatible with ASCII: the most common characters are encoded with 1 bytes (the ASCII characters). The extra (unused by ASCII) bit is used as a "lookahead" (to the next byte) identifier.
