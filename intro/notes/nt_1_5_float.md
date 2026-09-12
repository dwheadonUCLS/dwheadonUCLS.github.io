# Floating point numbers
### For a quiz re-take, you need to write out everything except the parts labeled as "Example..."

## Negative numbers

* We use the first digit in a **signed number** to represent whether it is positive or negative


## Fractional parts

* The place values to the right of the decimal place are determined by dividing by 2
```
___  ___  ___  .  ___  ___  ___
 4    2    1      1/2  1/4  1/8
```
## Binary multiplication and division

When you multiply a base-10 number by 10 it just moves the decimal one place to the right, the same is true with binary when you multiply by 2
```
Example: these are the same calculation: 0b10 == 2
0b101 * 0b10 == 0b1010
0d5   * 0d2  == 0d10
```
Similarly when you divide a base-10 number by 10 it just moves the decimal one place to the left, the same is true with binary when you divide by 2
```
Example: these are the same calculation: 0.5 == 1/2 == 0b0.1
0b101 * 0b0.1 == 0b10.1
0d5   * 0d0.5 == 0d2.5
```

## Binary scientific notation

Just like regular scientific notation 2.34*10^5 we have binary scientifi notation except the base of the exponent is 2 and the numbers are in binary 10.001*2^101

We usually put scientific numbers in "normal form" where the non-fractional part is a single digit. Similarly with binary scientific notation except in this form, the digit will ***always*** be `1`.

## IEEE 754 standard

The standard for representing 32-bit binary scientific numbers is to have (in this order)
* 1 bit to represent +/- for the number as a whole
* 8 bits to represent the exponent
* 23 bits to represent the fractional part of the significand (the `1.` part is implicit)

```
Example:
10000000111000000000000000000000 -> 
1 00000001 11000000000000000000000 -> 
-       +1 1.11 ->
-          1.11 * 2^+1
 two ways to go from here
binary shift  |  trans to 0d
-11.1         |  -1.75 * 2
trans to 0d   |  multiply out
-3.5          |  -3.5
```

---

* implicit: something that goes without saying
    * e.g. 3 is a positive number; the + is implicit whereas +3 makes the positiveness explicit
* signed integer: an integer that can be positive or negative. The left-most bit is reserved to represent this.
* binary point: like a "decimal point" but for binary
* scientific notation: the standard way to express very large or very small numbers: `significand * base ^ exponent` where the significand in *normal* form
* normal form: a number with the whole part of the significand as a single, non-zero digit
    * e.g. for base-10: 1715.3 == 1.7153*10^3 instead of 17.153*10^2
    * e.g. for base-2: 1101.11 == 1.10111*2^3 instead of 11.0111*2^2
* just as with base-10 we can change the exponent by moving the decimal point left or right the same is true of binary scientific notation
* floating-point number: a number with a fractional part stored on a computer (in binary as with everything)
* IEEE 754: the standard that specifies how to represent floating-point numbers in binary
    * for 32-bit floating point numbers: 
        * 1 bit represents the sign
        * 8 bits represent the exponent
        * 23 bits represent the significand (with an implicit "1.")
* the implicit "1.": the significand in binary normal form will *always* be "1.something" so it is implicit and therefore omitted
