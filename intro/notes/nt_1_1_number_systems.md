# Number Systems
### For a quiz re-take, you need to write out everything except the parts labeled as "Example..."

Number systems have a positive integer base: the number around which the system is structured

## Place values

* all number systems start with a 1 in the first (right-most) place
* each place to the left of the first place goes up by a factor of the base of the number system (refered to as `x` here)
```
_____  _____  _____
x*x*1   x*1     1
```
* The first place can also be thought of as x⁰ since any number to the 0th power is 1
```
__  __  __  __
x³  x²  x¹  x⁰
```

### Example: Base-3
```
Place values would be:
__  __  __  __
3³  3²  3¹  3⁰
Which is equivalent to:
__  __  __  __
27   9   3   1
```
## Digits
* In any number system each digit will be a numeral from 0 to (base-1)
* You will *never* use the base as a numeral (ironic, right?) because you could replace that with a 1 in the *next* place
* The actual digit used combined with the place value will determine value of the place

### Example: Base-3
```
Digits in base-3: 0-2

 2   0   1   2
__  __  __  __ == 2*27 + 0*9 + 1*3 + 2*1 == 54 + 0 + 3 + 2 == 59
27   9   3   1
```

The maximum value you can represent with n-digits of any number system is always
base^n - 1

### Example: 4 digits in base-3
```
Maximum number (because you can't have 3 in a base-3 number) is: 
 2   2   2   2
__  __  __  __ == 3⁴ - 1 == 81 - 1 == 80
27   9   3   1

Note that 3⁴ (which would be 10000 in base-3) is the *next* place value 

You could also get this number by adding up the digit values but that's a *lot* harder:
 2   2   2   2
__  __  __  __ == 2*27 + 2*9 + 2*3 + 2*1 == 54 + 18 + 6 + 2 == 80
27   9   3   1
```

## Base comparisons
* With a larger base, the place values go up much faster (it's exponential): so larger numbers can be expressed with less digits but you have a more numerals that you have to deal with
* With a smaller base, you will usually have to use more places (digits) to represent a number but you have less numerals that you have to deal with: this will be critical for computers
