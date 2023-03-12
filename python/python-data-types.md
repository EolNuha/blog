---
sidebar_position: 3
title: Python Data Types
description: "Python Data Types: Python is an object-oriented programming language, which means that everything in Python is an object. One of the most important aspects of Python programming is understanding data types."
keywords: [python data types, python integers, python strings, python collections]
---

# Python Data Types: A Complete Overview

Python is an object-oriented programming language, which means that everything in Python is an object. One of the most important aspects of Python programming is understanding data types. In Python, there are several built-in data types that you can use to store different types of data. Here are some of the most common data types in Python:

## Numeric Data Types

Python has four numeric data types: `int`, `float`, `complex`, and `bool`.

- `int`: This data type is used to store integers, which are positive or negative whole numbers with no decimal point. For example: `5`, `10`, and `0`.
- `float`: This data type is used to store decimal numbers, also known as floating-point numbers. For example: `3.14`, `2.5`, and `0.0`.
- `complex`: This data type is used to store complex numbers, which consist of a real part and an imaginary part. For example: `3 + 4j`, `2j`, and `1 - 1j`.
- `bool`: This data type is used to store Boolean values, which can be either `True` or `False`.

## Sequence Data Types

Python has three sequence data types: `list`, `tuple`, and `range`.

- `list`: This data type is used to store a collection of items that can be of different data types. Lists are mutable, which means they can be changed. For example: `[1, 'apple', True, 3.14]`.
- `tuple`: This data type is used to store a collection of items that can be of different data types. Tuples are immutable, which means they cannot be changed. For example: `(1, 'apple', True, 3.14)`.
- `range`: This data type is used to represent a sequence of numbers. For example: `range(0, 10, 2)` represents the sequence of even numbers from 0 to 8.

## Text Data Type

Python has one text data type: `str`.

- `str`: This data type is used to store a sequence of characters, such as letters, numbers, and symbols. Strings are immutable. For example: `'Hello, World!'`.

## Mapping Data Type

Python has one mapping data type: `dict`.

- `dict`: This data type is used to store a collection of key-value pairs. For example: `{'name': 'John', 'age': 25, 'city': 'New York'}`.

## Set Data Type

Python has one set data type: `set`.

- `set`: This data type is used to store a collection of unique items. Sets are mutable. For example: `{1, 2, 3, 4}`.

Understanding these data types is essential for writing efficient and effective Python code. By choosing the appropriate data type for your data, you can improve the performance and readability of your code.

## Type Conversion

In Python, you can convert one data type to another using type conversion. For example, you can convert an integer to a string using the `str()` function or a string to an integer using the `int()` function. Here are some examples:

```python
# Converting int to str
num = 5
text = str(num)

# Converting str to int
text = '10'
num = int(text)
```

## Built-In Functions

In addition to type conversion functions, Python has many built-in functions that you can use to operate on different data types. Here are some examples:

```python
# Finding the length of a string
text = 'Hello, World!'
length = len(text)

# Finding the maximum value in a list
numbers = [1, 2, 3, 4, 5]
max_num = max(numbers)

# Finding the sum of a tuple
numbers = (1, 2, 3, 4, 5)
sum_nums = sum(numbers)

# Checking if a value is in a set
fruits = {'apple', 'banana', 'orange'}
is_in_set = 'apple' in fruits

# Converting a list to a set
numbers = [1, 2, 3, 4, 5]
set_nums = set(numbers)
```

## User-Defined Data Types

In addition to the built-in data types in Python, you can also create your own user-defined data types. This is done using classes, which are templates for creating objects. Classes define the properties and methods of an object, which determine its behavior. Here's an example of a user-defined class:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('Hello, my name is', self.name)

# Creating an object of the Person class
person = Person('John', 25)

# Accessing the properties of the object
print(person.name) # Output: John
print(person.age) # Output: 25

# Calling the method of the object
person.greet() # Output: Hello, my name is John
```

## Conclusion

Python is a powerful programming language with many built-in data types and functions. By understanding these data types and functions, you can write more efficient and effective code. Whether you're a beginner or an experienced Python programmer, mastering data types is essential for becoming a skilled developer. With the ability to create your own user-defined data types, Python provides the flexibility and power to build complex applications.