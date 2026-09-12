# Binary
### For a quiz re-take, you need to write out everything except the parts labeled as "Example..."

Binary is the base-2 number system which can only have digits from 0-1. A **bi**nary dig**it**s is refered to as a **bit**.

Place values are:
```
___  ___  ___  ___  ___  ___  ___  ___  ___  ___
etc  512  128   64   32   16   8    4    2    1
```
## Disambiguation

Given a bunch of digits like `10101` the average person would assume that this is ten-thousand, one-hundred, and one (ie. a base 10 number). If we want to make it clear that it is actually a binary number we prefix it with `0b` thus `0b10101` which is equivalent to the base-10 number `21`. The number `21` is clearly not binary (binary numbers can't have `2` in them) but it could be a base-3 number. We can make it explicit that it's base-10 by prefixing it with `0d` thus `0d21`

## Grouping

Binary number systems are critical for computers because it is much easier to represent 2 numerals (0 and 1) with electrical systems (off and on) than the ten numerals that would be needed to represent digits in base-10 (0 - 9).

In a computer, binary numbers are always stored in chunks of 8 bits which we call a **byte**. This is a rather small amount of information (a number between 0 and 255) so we're usually dealing with *many* bytes. 
* 1,000 bytes == kilo-byte (KB)
* 1,000,000 bytes == mega-byte (MB)
* 1,000,000,000 bytes == giga-byte (GB)
* 1,000,000,000,000 bytes == tera-byte (TB)
* 1,000,000,000,000,000 bytes == peta-byte (PB)

---

* binary: the base-2 number system that computers use because it's easy to represent just 2 states (on and off)
* binary place values: starts at 1 and goes up by a factor of 2: `512 256 128  64  32  16   8   4   2   1`
* binary digits: only 0 or 1 (the two states we need to represent for binary numbers)
* bit: abbreviation for "binary digit"
* binary number representation: representing a number in the base-2 number system
    * e.g. "eleven" in base-2 would be 1011 (one $8, no $4, one $2 and one $1)
    * e.g. a [binary odometer](https://harryli0088.github.io/binary-visualized/) can give you a sense for how value is added or removed as you increase or decrease its value
* most significant digit: the digit in a number that's in the larget place value
* binary prefix: the `0b` that you put at the beginning of a binary number to make it clear that it is indeed a binary number
    * e.g. you wouldn't want to mistake the binary number `1011` for the base-10 number "one thousand, eleven" so instead we write `0b1011`
* byte: a group of 8 binary digits. For computer manufaturing reasons binary is always stored in a computer in chunks of 8.
* all data in a computer is stored as binary in chunks of 8 (a byte)
* binary grouping: even though the leading zero's are in a number are not needed, in binary they are often written out to fill out the byte
    * e.g. in the binary number `00001011` the leading `0000` are unecessary but still represented in the computer
