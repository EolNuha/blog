---
sidebar_position: 5
title: "Python Numbers"
description: "Python Numbers: Python provides several data types for working with numbers, including integers, floating-point numbers, and complex numbers. In this blog post, we will explore these data types and their properties in detail."
keywords: [python numbers, numbers tutorial, python integers, python float, python complex numbers, python random numbers]
---

# Python Numbers

One of the essential features of Python is its built-in support for numbers. Python provides several data types for working with numbers, including integers, floating-point numbers, and complex numbers. In this blog post, we will explore these data types and their properties in detail.

## Integers

Integers are whole numbers, i.e., they do not have a fractional part. In Python, we can define integers using the `int` keyword. For example, the following code defines two integers:

```python
x = 10
y = -5
```

In this example, `x` and `y` are both integers. The first one is a positive integer, and the second one is a negative integer.

### Arithmetic Operations with Integers

Python supports several arithmetic operations with integers, including addition, subtraction, multiplication, division, and more. Let's see some examples of these operations:

```python
# addition
a = 5 + 3
print(a)  # output: 8

# subtraction
b = 10 - 7
print(b)  # output: 3

# multiplication
c = 4 * 2
print(c)  # output: 8

# division
d = 10 / 2
print(d)  # output: 5.0
```

Note that the division operation returns a floating-point number, even if the result is a whole number.

### Integer Division and Modulus

Python also supports integer division and modulus operations. The integer division returns the quotient of the division, discarding any fractional part. The modulus operation returns the remainder of the division. Let's see an example:

```python
# integer division
e = 10 // 3
print(e)  # output: 3

# modulus
f = 10 % 3
print(f)  # output: 1
```

In this example, `e` is the result of the integer division of 10 by 3, which is 3. The modulus operation returns the remainder of this division, which is 1.

### Bitwise Operations with Integers

Python also supports bitwise operations with integers, including AND, OR, XOR, left shift, and right shift. These operations work on the binary representation of the integers. Let's see an example:

```python
# bitwise AND
g = 10 & 5
print(g)  # output: 0

# bitwise OR
h = 10 | 5
print(h)  # output: 15

# bitwise XOR
i = 10 ^ 5
print(i)  # output: 15

# left shift
j = 10 << 1
print(j)  # output: 20

# right shift
k = 10 >> 1
print(k)  # output: 5
```

In this example, the bitwise AND operation between 10 and 5 returns 0 because no bits are common between them. The bitwise OR operation returns 15 because all bits are set in either 10 or 5. The bitwise XOR operation returns 15 because only the bits that are different between 10 and 5 are set. The left shift operation shifts the bits of 10 to the left by one position, which is equivalent to multiplying it by 2. The right shift operation shifts the bits of 10 to the right by one position, which is equivalent to dividing it by 2.

## Floating-Point Numbers

Floating-point numbers are numbers that have a fractional part. In Python, we can define floating-point numbers using the `float` keyword. For example, the following code defines two floating-point numbers:

```python
x = 3.14
y = -2.5
```

In this example, `x` and `y` are both floating-point numbers. The first one is a positive number with a fractional part, and the second one is a negative number with a fractional part.

### Arithmetic Operations with Floating-Point Numbers

Python supports the same arithmetic operations with floating-point numbers as it does with integers. However, the results may not be exact due to the way floating-point numbers are represented internally. Let's see an example:

```python
# addition
a = 0.1 + 0.2
print(a)  # output: 0.30000000000000004

# multiplication
b = 0.1 * 0.2
print(b)  # output: 0.020000000000000004
```

In this example, we can see that the addition and multiplication operations with floating-point numbers may produce results that are not exact. This is because floating-point numbers are represented in binary form, which may cause rounding errors.

## Complex Numbers

Complex numbers are numbers that have a real part and an imaginary part. In Python, we can define complex numbers using the `complex` keyword. For example, the following code defines two complex numbers:

```python
x = 2 + 3j
y = -1 - 2j
```

In this example, `x` and `y` are both complex numbers. The first one has a real part of 2 and an imaginary part of 3, and the second one has a real part of -1 and an imaginary part of -2.

### Arithmetic Operations with Complex Numbers

Python supports arithmetic operations with complex numbers, including addition, subtraction, multiplication, and division. Let's see an example:

```python
# addition
a = (2 + 3j) + (4 - 5j)
print(a)  # output: (6 - 2j)

# subtraction
b = (2 + 3j) - (4 - 5j)
print(b)  # output: (-2 + 8j)

# multiplication
c = (2 + 3j) * (4 - 5j)
print(c)  # output: (23 + 2j)

# division
d = (2 + 3j) / (4 - 5j)
print(d)  # output: (-0.4117647058823529 + 0.6470588235294118j)
```

In this example, we can see that arithmetic operations with complex numbers work in the same way as with real numbers.

## Random Numbers
Python does not have a `random()` function to make a random number, but Python has a built-in module called `random` that can be used to make random numbers:

Import the random module, and display a random number between 1 and 19:
```python
import random

print(random.randrange(1, 20))
```
:::note
`random.randrange()` in not-inclusive.
:::

If you want to generate a random number from an inclusive range, you can use `random.randint()`:
```python
import random

print(random.randrange(1, 20)) #20 will be included
```

## Conclusion

Numbers are an essential part of programming, and Python provides several data types for working with them. In this blog post, we explored the three main data types for numbers in Python: integers, floating-point numbers, and complex numbers. We also saw how to perform arithmetic and bitwise operations with integers, arithmetic operations with floating-point numbers, and arithmetic operations with complex numbers. Understanding these concepts is crucial for working with numerical data in Python.