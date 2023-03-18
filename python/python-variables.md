---
sidebar_position: 4
title: "Python Variables"
description: "Python Variables: Variables are an essential part of writing good and efficient code in Python. In this tutorial we will give you everything you need to know about variables in Python."
keywords: [python variables, variable types, local variables, global variables, multiple variable values]
---

# Python Variables: A Beginner's Guide

When learning a new programming language, understanding variables is an essential concept. Python variables allow developers to store and manipulate data, making it a vital part of the language. In this blog post, we'll discuss what variables are, how to declare them, and how to use them in Python.

## What are Variables?

In programming, a variable is a container that stores a value. This value can be a number, string, boolean, or any other data type available in Python. Variables are used to store and manipulate data when working with a program.

## Declaring Variables

To declare a variable in Python, you need to give it a name and assign it a value. Here's an example of how to declare a variable:

```python
message = "Hello, World!"
```

In this example, the variable is named `message`, and the value assigned to it is the string `"Hello, World!"`.

## Naming Conventions

When declaring variables in Python, it's essential to follow naming conventions. Here are some guidelines to follow when naming variables:

- Variable names should be descriptive and meaningful.
- Use lowercase letters for variable names.
- If the variable name consists of multiple words, separate them with underscores.
- Avoid using reserved keywords as variable names.

Here are some examples of good variable names:

```python
first_name = "John"
age = 25
is_male = True
```
:::warning Wrong variable names

You cannot start a variable with a number or be a reserved keyword in Python:
```python
#Naming a variable like this will throw an error
10numbers = "ten numbers"

#or use a reserved keyword
continue = "continue word"
```
:::

## Using Variables

Once you've declared a variable, you can use it in your program. Here are some examples of how to use variables in Python:

### Printing Variables

You can print the value of a variable using the `print()` function. Here's an example:

```python
message = "Hello, World!"
print(message)
```

This will output the value of the `message` variable, which is `"Hello, World!"`.

### Updating Variables

You can update the value of a variable at any time by assigning it a new value. Here's an example:

```python
message = "Hello, World!"
print(message)

message = "Hello, Python!"
print(message)
```

This will output `"Hello, World!"` and then `"Hello, Python!"`.

### Arithmetic Operations

Variables can be used in arithmetic operations, such as addition, subtraction, multiplication, and division. Here's an example:

```python
x = 10
y = 5

print(x + y)
print(x - y)
print(x * y)
print(x / y)
```

This will output `15`, `5`, `50`, and `2.0`.

:::tip Tip 

The `+` operator can be used to add different number data types, for example integers with floats:
```python
x = 5
y = 10.35
print(x + y) #outputs: 15.35
```
:::

You can even use the `+` operator to add strings together:
```python
first_message = "Hello"
second_message = "World"

print(first_message + second_message) #outputs: HelloWorld
```
But, if you try to combine a string and a number with the `+` operator, Python will give you an error:

:::warning Type Error 

In this example we will try to use the `+` with a string and an integer, in which case Python will throw a *TypeError*:
```python
x = 5
y = "The InnoHive"
print(x + y)
```
:::

## Variable Types

Python has no command for declaring a variable.
A variable is created the moment you first assign a value to it.
In Python, unlike other languages you don't have to declare a type, and even can change the type after it's been set.

To read more about data types checkout our tutorial: [Python Data Types](python-data-types)

Here are some examples of different variable data types:

```python
#integer
x = 10

#float
y = 3.14

#string
message = "Hello, World!"

#boolean
is_student = True

#None type ~ equivalent to null
no_value = None
```

## Assigning Multiple Values to a Single Variable

In Python, we can assign multiple values to a single variable using tuples. A tuple is a collection of values separated by commas and enclosed in parentheses.

```python
a, b, c = 1, 2, 3
```

In the code above, we assigned the values 1, 2, and 3 to the variables "a", "b", and "c" respectively. This is equivalent to writing:

```python
a = 1
b = 2
c = 3
```

We can also assign the same value to multiple variables at once.

```python
x = y = z = 0
```

In the code above, we assigned the value of 0 to the variables "x", "y", and "z". This is equivalent to writing:

```python
x = 0
y = 0
z = 0
```

## Advantages of Assigning Multiple Values to a Single Variable

Assigning multiple values to a single variable can make your code more concise and readable. It can also help you avoid errors by ensuring that related values are stored together. For example, if you have a program that deals with coordinates, you might want to store the x and y values together.

```python
x, y = 5, 10

```

In the code above, we assigned the values 5 and 10 to the variables "x" and "y". Now we can use these variables to represent a point (5, 10).

## Global vs. Local Variables

In Python, variables can be defined either as global or local. A variable's scope determines where it can be accessed and modified within a program. Understanding the differences between global and local variables is crucial to writing efficient and effective code.

### Global Variables

A global variable is a variable that is defined outside of any function and can be accessed and modified from any part of the code, including within functions. To define a global variable, simply declare it outside of any function.

```python
x = 5 # Global variable

def my_function():
  print(x)

my_function() # Output: 5
```

In the example above, `x` is a global variable and can be accessed from within the `my_function()` function because it is not defined inside the function.

### Local Variables

A local variable is a variable that is defined inside a function and can only be accessed and modified within that function. To define a local variable, simply declare it inside a function.

```python
def my_function():
  y = 3 # Local variable
  print(y)

my_function() # Output: 3
```

In the example above, `y` is a local variable and can only be accessed from within the `my_function()` function because it is defined inside the function.

### Variable Name Preference

When a variable is defined both globally and locally, the local variable takes precedence over the global variable within the local scope. This means that if a local variable is defined with the same name as a global variable, any reference to that variable within the local scope will refer to the local variable, not the global variable.

```python
x = 5 # Global variable

def my_function():
  x = 3 # Local variable
  print(x)

my_function() # Output: 3
print(x) # Output: 5
```

In the example above, `x` is defined both globally and locally, but the local variable `x` takes precedence within the `my_function()` function. When `x` is printed within the `my_function()` function, it refers to the local variable with a value of `3`. When `x` is printed outside of the function, it refers to the global variable with a value of `5`.

Understanding the differences between global and local variables is crucial to writing efficient and effective code in Python. By using local variables when appropriate and avoiding naming conflicts, you can ensure that your code is organized, easy to read, and easy to maintain.

## Conclusion

In conclusion, variables are an essential concept in Python programming. They allow developers to store and manipulate data, making them a powerful tool for building programs. By following the guidelines for declaring variables and naming conventions, you can write clean, readable code that others can understand and maintain.