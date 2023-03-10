---
sidebar_position: 1
title: "Python Lists"
description: "One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items."
keywords: [python lists, list add, list remove, list access]
---

# Python Lists

One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items.

## Accessing List Items

Accessing individual items in a list is a fundamental operation that you'll need to perform frequently. In Python, you can access a list item by referring to its index, which is an integer value that represents the item's position in the list. The first item in the list has an index of 0, the second item has an index of 1, and so on.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
print(fruits[0]) # Output: 'apple'
print(fruits[2]) # Output: 'cherry'
```

You can also access list items using negative indexing, which starts from the end of the list. The last item in the list has an index of -1, the second-to-last item has an index of -2, and so on.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
print(fruits[-1]) # Output: 'kiwi'
print(fruits[-3]) # Output: 'cherry'
```

## Changing List Items

Lists are mutable, which means that you can change their contents after they have been created. To modify an item in a list, you can simply assign a new value to its index.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
fruits[1] = 'pear'
print(fruits) # Output: ['apple', 'pear', 'cherry', 'orange', 'kiwi']
```

## Adding List Items

You can add new items to a list using several methods. One way is to use the `append()` method, which adds an item to the end of the list.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
fruits.append('pear')
print(fruits) # Output: ['apple', 'banana', 'cherry', 'orange', 'kiwi', 'pear']
```

Another way to add items to a list is to use the `insert()` method, which allows you to specify the index where the new item should be inserted.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
fruits.insert(1, 'pear')
print(fruits) # Output: ['apple', 'pear', 'banana', 'cherry', 'orange', 'kiwi']
```

## Removing List Items

You can remove items from a list using the `remove()` method, which removes the first occurrence of the specified item.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
fruits.remove('banana')
print(fruits) # Output: ['apple', 'cherry', 'orange', 'kiwi']
```

Another way to remove items from a list is to use the `del` statement, which can remove an item at a specific index or remove the entire list.

Here's an example:

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
del fruits[1]
print(fruits) # Output: ['apple', 'cherry', 'orange', 'kiwi']

del fruits # remove the entire list
```

## Conclusion

Python lists are versatile and powerful data structures that you will use frequently in your coding journey. Understanding how to access, change, add, and remove list items is essential for manipulating lists effectively. By mastering these fundamental skills, you'll be well on your way to becoming a proficient Python programmer.