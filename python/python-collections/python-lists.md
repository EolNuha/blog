---
sidebar_position: 1
title: "Python Lists"
description: "One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items."
keywords: [python lists, list add, list remove, list access, sort list, loop lists, join lists, list methods]
---

# Python Lists

One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items.
Lists are created using square brackets `[]`.

## List Items
List items are:
- **Ordered**: The items have a defined order, and the new items will be placed at the end of the list.
- **Changeable**: We can *change*, *add*, and *remove* items in a list after it has been created.
- **Allow duplicate values**: Lists are indexed, meaning it can have items that have the same value.

### List Length
To determine how many items a list contains, we can use Python's built-in function `len()`. The len function takes a list as an argument and returns an integer, indicating the number of items in that given list.
```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
print(len(fruits)) #outputs: 5
```

### Data Types
List items can be of any data type, including strings, numbers, booleans, and even other collection types:
```python
list_1 = [10, 8, 6, 7, 25]
list_2 = ["string 1", "string 2", "string 3"]
list_3 = [True, False, True]
list_4 = [
	[10, 8, 6, 7, 25], 
	["string 1", "string 2", "string 3"]
]
```

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

## Loop Lists
To loop through the items of a list we can use a `for` loop.
**Example: print all the items of the list, one by one**
```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
for fruit in fruits:
	print(fruit) #outputs all list items one by one
```

:::note For Loops
A `for` loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
Learn more about for loops at our tutorial: [Python For Loops](/python-loops/python-for-loops) 
:::

### Loop through index numbers
We can also loop through the list items by referring to their index number. By using Python's `range()` and `len()` functions we can iterate through the list items by using their index numbers.

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
for i in range(len(fruits)):
	print(fruits[i]) #outputs all list items one by one
```

### Using a while loop
We can also loop through the list items using a `while` loop, where we use the `len()` function to determine the length of the list, then start at index `0` and loop your way through the list items by referring to their indexes.

```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
i = 0
while i < len(fruits):
	print(fruits[i]) #outputs all list items one by one
	i += 1
```

:::warning Warning
Remember to increase the index by 1, in this case the variable `i`, otherwise you will be stuck in an infinite loop.
:::
To learn more about `while` loops, checkout our tutorial: [Python While Loops](/python-loops/python-while-loops)

## Sort Lists
Python has a built-in function `sort()`, which sorts the list by default alphanumerically and ascending, 
```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
fruits.sort()
print(fruits) #outputs: ['apple', 'banana', 'cherry', 'kiwi', 'orange']
```
If you want to sort the items in reverse order(descending), pass the `reverse = True` argument to the sort method:
```python
fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']
fruits.sort(reverse = True)
print(fruits) #outputs: ['orange', 'kiwi', 'cherry', 'banana', 'apple']
```
### Custom Sort Function
You can create a custom function of your own and pass it to the sort method as a keyword argument `key = function`, to sort the list items based on a condition you set.

```python
def myFunction(n):
  return abs(n - 50)

my_list = [100, 50, 65, 82, 23]
my_list.sort(key = myFunction)
print(my_list)
```

### Case Insensitive Sort
By default the `sort()` built-in function is case-sensitive, meaning that all capital letters are sorted before lower case letters:

**Example:**
```python
fruits = ['apple', 'banana', 'Cherry', 'orange', 'Kiwi']
fruits.sort()
print(fruits) #outputs: ['Cherry', 'Kiwi', 'apple', 'banana', 'orange']
```
So to sort the list case-insensitive, we can pass the `str.lower` built-in function as a key function in the `sort()` method:
```python
fruits = ['apple', 'banana', 'Cherry', 'orange', 'Kiwi']
fruits.sort(key = str.lower)
print(fruits) #outputs: ['apple', 'banana', 'Cherry', 'Kiwi', 'orange']
```
### Reverse Order
If you want to reverse the order of a list, you can use the `reverse()` method which reverses  the current sorting order of the elements regardless of the alphabet.
```python
fruits = ['apple', 'banana', 'Cherry', 'orange', 'Kiwi']
fruits.reverse()
print(fruits) #outputs: ['Kiwi', 'orange', 'Cherry', 'banana', 'apple']
```

## Join Lists
There are several ways to join two or more lists Python:
1. Using the `+` operator:
	```python
	fruits = ['apple', 'banana', 'cherry']
	more_fruits = ['orange', 'kiwi']

	all_fruits = fruits + more_fruits

	print(all_fruits) #outputs:  ['apple', 'banana', 'cherry', 'orange', 'kiwi']
	```
2. Using the `extend()` method (this method modifies the original list):
	```python
	fruits = ['apple', 'banana', 'cherry']
	more_fruits = ['orange', 'kiwi']

	fruits.extend(more_fruits)

	print(fruits) #outputs:  ['apple', 'banana', 'cherry', 'orange', 'kiwi']
	```
3. (Not preferred) Another way is to iterate through the items of the list and append them to the wanted list, one by one:
	```python
	fruits = ['apple', 'banana', 'cherry']
	more_fruits = ['orange', 'kiwi']

	for item in more_fruits:
		fruits.append(item)

	print(fruits) #outputs:  ['apple', 'banana', 'cherry', 'orange', 'kiwi']

## List Methods
Python has built-in functions that we can use on lists, some of which we already used on the above examples:

<table>
<thead>
<th>Method</th>
<th>Description</th>
</thead>
<tr>
<td><code>append()</code></td>
<td>Adds an element at the end of the list</td>
</tr>
<tr>
<td><code>clear()</code></td>
<td>Removes all the elements from the list</td>
</tr>
<tr>
<td><code>copy()</code></td>
<td>Returns a copy of the list</td>
</tr>
<tr>
<td><code>count()</code></td>
<td>Returns the number of elements with the specified value</td>
</tr>
<tr>
<td><code>extend()</code></td>
<td>Add the elements of a list (or any iterable), to the end of the current list</td>
</tr>
<tr>
<td><code>index()</code></td>
<td>Returns the index of the first element with the specified value</td>
</tr>
<tr>
<td><code>insert()</code></td>
<td>Adds an element at the specified position</td>
</tr>
<tr>
<td><code>pop()</code></td>
<td>Removes the element at the specified position</td>
</tr>
<tr>
<td><code>remove()</code></td>
<td>Removes the item with the specified value</td>
</tr>
<tr>
<td><code>reverse()</code></td>
<td>Reverses the order of the list</td>
</tr>
<tr>
<td><code>sort()</code></td>
<td>Sorts the list</td>
</tr>
</table>

## Conclusion

Python lists are versatile and powerful data structures that you will use frequently in your coding journey. Understanding how to access, change, add, and remove list items is essential for manipulating lists effectively. By mastering these fundamental skills, you'll be well on your way to becoming a proficient Python programmer.