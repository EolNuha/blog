---
sidebar_position: 2
title: Python Syntax
description: "Python Syntax: One of the most distinctive and unique features of Python syntax is its use of indentation to denote code blocks. In Python, code blocks are defined by their indentation level, rather than by brackets or other delimiters like in other programming languages, such as C++ or Java."
keywords: [python syntax, python comments, python variables, python data types]
---

# Python Syntax: A Comprehensive Guide for Beginners

## Introduction

When it comes to programming languages, syntax is a crucial element that determines how code is written and understood. Python is an easy-to-learn and widely used programming language that has a clear, concise, and readable syntax. In this blog post, we will explore the basics of Python syntax and highlight its essential features.

## Python Indentation

One of the most distinctive and unique features of Python syntax is its use of indentation to denote code blocks. In Python, code blocks are defined by their indentation level, rather than by brackets or other delimiters like in other programming languages, such as C++ or Java.

This means that the indentation of the code is very important in Python, as it determines which statements are part of a code block and which are not. For example, consider the following code snippet:

```python
if x > 0:
    print("x is positive")
else:
    print("x is non-positive")
```

In this example, the `if` statement and the `else` statement are both indented by four spaces, which indicates that they are both part of the same code block. If we were to remove the indentation on the `else` statement, Python would interpret it as a separate code block, and the code would no longer work correctly.

While some programmers may find Python's indentation-based syntax cumbersome or restrictive, it can also make code more readable and easier to follow. It also encourages developers to write cleaner and more organized code, which can be easier to maintain and debug.

:::warning Syntax error

You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:
```python
if 5 > 2:
 print("Five is greater than two!")
        print("Five is greater than two!")
```

:::

The number of spaces is up to you as a coder, the most common use is four, but it has to be at least one.
```python
if 5 > 2:
	print("Five is greater than two!") 
if 5 > 2:
	print("Five is greater than two!") 
```

## Python Comments

Python comments are used to add explanatory notes or documentation to code. They are ignored by the Python interpreter and are not executed as part of the program. Comments can be used to provide context, explain the purpose of code, or to disable certain parts of the code for testing or debugging purposes.

In Python, comments are denoted by the `#` character, which is placed at the beginning of the comment. Anything that follows the `#` character on the same line is considered a comment and is ignored by Python.

For example, consider the following code snippet:

```python
# This is a comment
print("Hello, World!")
```

In this example, the first line is a comment that provides context or explanation for the code that follows. It is ignored by Python when the code is executed. The second line is the actual code that is executed and outputs the string "Hello, World!" to the console.

Python also supports multi-line comments, which are denoted by placing three quotation marks (`"""`) at the beginning and end of the comment. Anything that appears between the opening and closing quotation marks is considered a comment and is ignored by Python.

```python
"""
This is a multi-line comment.
It can span multiple lines and is denoted by the use of triple quotes.
"""
print("Hello, World!")
```

In this example, the multi-line comment provides more detailed documentation about the code that follows. The `print` statement is the actual code that is executed and outputs the string "Hello, World!" to the console.

## Python Variables
Variables are containers used to store data values in Python. In Python, a variable is created when a value is assigned to it. The value can be of any data type such as **integer**, **float**, **string**, etc.

### Naming Variables
In Python, variable names are case sensitive. A variable name must start with a letter or an underscore character. The rest of the variable name can consist of letters, digits, and underscore characters. Variable names cannot start with a digit. Also, variable names cannot be the same as reserved keywords in Python.

### Assigning Variables

The assignment operator (=) is used to assign a value to a variable. For example, to assign the value 10 to a variable named `num`, you can use the following code:

```python
num = 10
```

### Data Types

In Python, variables can hold values of different data types. Some of the common data types are:

- int: for integer values
- float: for floating-point values
- bool: for Boolean values (True or False)
- str: for string values


There are two types of variables in Python:

### Local Variables

Local variables are variables that are defined inside a function. They can only be accessed from within the function.

```python
def my_function():
  x = 5
  print(x)

my_function() # Output: 5
```

### Global Variables

Global variables are variables that are defined outside of any function. They can be accessed from anywhere in the program.

```python
x = 5

def my_function():
  print(x)

my_function() # Output: 5
```