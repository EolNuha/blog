---
sidebar_position: 6
title: "Python Booleans"
description: "Python Booleans: Python has its own data type for truth values: booleans. In this tutorial, we will explore what booleans are, how they work, and how you can use them in Python code."
keywords: [python booleans, true values, false values, boolean operators]
---

# Python Booleans: True or False?

## Introduction

Programming languages rely on the concept of truth values, which are the values that determine whether an expression is true or false. Python is no exception, and it has its own data type for truth values: booleans. In this tutorial, we will explore what booleans are, how they work, and how you can use them in Python code.

## What are Booleans?

A boolean is a data type that has only two possible values: `True` or `False`. In Python, True and False are reserved keywords that represent these two values. Booleans are commonly used in programming to control the flow of code based on whether a condition is true or false. For example, a boolean can be used to determine whether a user has entered a valid password, or whether a certain condition has been met in a loop.

## Boolean Operators

Python provides a set of operators that can be used to manipulate and evaluate booleans. These operators include logical operators, comparison operators, and identity operators.

### Logical Operators

Logical operators are used to combine boolean values and return a new boolean value based on the result of the combination. Python provides three logical operators: and, or, and not. Here's how they work:

- and: returns True if both operands are True, otherwise it returns False.
- or: returns True if at least one operand is True, otherwise it returns False.
- not: returns the opposite boolean value of the operand.

Here's an example that shows how these operators work:

```python
x = True
y = False

print(x and y) # Output: False
print(x or y) # Output: True
print(not x) # Output: False
```

### Comparison Operators

Comparison operators are used to compare two values and return a boolean value based on the result of the comparison. Python provides six comparison operators: `==`, `!=`, `>`, `<`, `>=`, and `<=`. Here's how they work:

- `==`: returns True if the operands are equal, otherwise it returns False.
- `!=`: returns True if the operands are not equal, otherwise it returns False.
- `>`: returns True if the left operand is greater than the right operand, otherwise it returns False.
- `<`: returns True if the left operand is less than the right operand, otherwise it returns False.
- `>=`: returns True if the left operand is greater than or equal to the right operand, otherwise it returns False.
- : returns True if the left operand is less than or equal to the right operand, otherwise it returns False.

Here's an example that shows how these operators work:

```python
x = 5
y = 10

print(x == y) # Output: False
print(x != y) # Output: True
print(x > y) # Output: False
print(x < y) # Output: True
print(x >= y) # Output: False
print(x <= y) # Output: True
```

### Identity Operators

Identity operators are used to compare the memory locations of two objects and return a boolean value based on the result of the comparison. Python provides two identity operators: `is` and `is not`. Here's how they work:

- `is`: returns True if the operands are the same object, otherwise it returns False.
- `is not`: returns True if the operands are not the same object, otherwise it returns False.

Here's an example that shows how these operators work:

```python
x = [1, 2, 3]
y = [1, 2, 3]
z = x

print(x is y) # Output: False
print(x is not y) # Output: True
print(x is z) # Output: True
```

## Python's `bool()` Built-in Function
To evaluate values and variables, Python has the `bool()` build-in function that takes any value and returns `True` or `False` based on the value given.

:::note Example

Evaluate a string and an integer:
```python
print(bool("Hello world")) #outputs: True
print(bool(15)) #outputs: True
```
Or you can evaluate a variable that has some value:
```python
txt = "Hello from InnoHive"
print(bool(txt)) #outputs: True
```
:::

Almost every value in Python returns `True` if it has some sort of content. Every string, number, list, tuple, set, or dictionary is `True` except empty ones.

**Example**
```python
bool("some string") #outputs: True
bool(12345) #outputs: True
bool(["String 1", "String 2", "String 3"]) #outputs: True
```

And since not many values return false, except empty ones, we will list the values that return false in Python below:
```python
bool(False) #outputs: False
bool(None) #outputs: False
bool(0) #outputs: False
bool("") #outputs: False
bool(()) #outputs: False
bool([]) #outputs: False
bool({}) #outputs: False
```

## Conclusion

Booleans are a fundamental data type in Python that are used to represent truth values. They are commonly used in programming to control the flow of code based on whether a condition is true or false. Python provides a set of operators that can be used to manipulate and evaluate booleans, including logical operators, comparison operators, and identity operators. Understanding booleans and how they work is essential for writing effective Python code.