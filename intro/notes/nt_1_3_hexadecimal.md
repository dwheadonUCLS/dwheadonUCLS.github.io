# Hexadecimal
### For a quiz re-take, you need to write out everything except the parts labeled as "Example..."

Hexadecimal is the base-16 number system: hex (6) dec (10): 6+10 = 16

Place values are:
```
_____  _____  _____  _____  _____
65536   4096   256     16     1
```

## Digits

Digits in hexedecimal can be values from 1 to 15 but we can't use 10 - 15 because those are actually 2 digits.

### Example: why 15 can't be used in hexadecimal
```
 1   5 
__  __ == 16 + 5 == 21
16   1
```
So instead we use capital letters A-F to represent these values with a single digit. 

| Numeral | Value |
| ------- | ----- |
| A | 10 |
| B | 11 |
| C | 12 |
| D | 13 |
| E | 14 |
| F | 15 |

## Disambiguation

Like binary, we need a way to indicate that a number is actually hexedecimal. For example `11` in base-10 is "eleven" but in hexadecimal is 17. To do this we use the prefix `0x` so that when we see `0x11` we know that it's actually the hexadecimal for 17.

## Why hexadecimal

Hexedecimal is ***NOT*** used by computers. Long binary numbers can be difficult for us (humans) to fathom because even relatively small numbers can take up several digits. We use hexedecimal to condense long binary numbers into a more condensed form. 

We could use base-10 but converting to base-10 is quite difficult but converting binary to hexedecimal is trivial. We just chunk the binary into groups of **4** and then each chunk can be converted individually to a number between 0 and 15 which directly translates to one of our hexadecimal digits.

### Example
```
0b110101001110010 -> 0110 1010 0111 0010 -> 6 A 7 2 -> 0x6A72
Note the extra zero  ^ here doesn't change the number
```

Translating back from hexadecimal to binary is just as easy. It's just the same process in reverse

### Example
```
0x2FACE -> 0010 1111 1010 1100 1110 -> 0b101111101011001110 
Note the extra zeros again on the left do not change the number and are usually left off of the result
```

---

* hexadecimal: the base-16 number system (often shortened to just "hex") which humans use to condense long strings of binary numbers to make them more intelligible
* hexadecimal place values: starts at 1 and goes up by a factor of 16: `65536  4096   256    16     1`
* hexadecimal digits: 0 through F (representing the number 15 with a single digit)
* hexadeimcal number representation: representing a number in the base-16 number system
    * e.g. "nine hundred, eleven" in base-16 would be 38F (three $256, eight $16, and fifteen $1)
* hex prefix: the `0x` that you put at the beginning of a hexadecimal number to make it clear that it is indeed a hex number
    * e.g. you wouldn't want to mistake the hex number `1011` for the base-10 number "one thousand, eleven" so instead we write `0x1011` which is the base-10 number `4,113`
* hex condensing: 4 digits in binary can be easily converted / condensed into 1 digit of hex
* hex grouping: since 1 digit in hex is 4 digits in binary, 2 digits in hex is 8 digits in binary and since the computer always stores binary in chunks of 8, hex is usually displayed in chunks of 2 digits
    * e.g. in the binary number `0F` the leading `0` is unecessary but still represented in the computer
* binary / hex translation: because 16 is a power of 2 it is very easy to translate from binary to hex (and vice-versa). You just chunk the binary into groups of 4 and translate that as if it was a number by itself. 
    * e.g. 0b1100001010 == 0b0011100001010 == 0b 0011 0000 1010 == 0x30A
