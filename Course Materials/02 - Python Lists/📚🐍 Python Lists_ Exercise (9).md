# Exercise

## Delete List Elements

You can remove elements from a Python list using the `del` statement.

For example:

```python
x = ["a", "b", "c", "d"]
del x[1]
```

Be careful! Once an element is removed, the indexes of all the elements that follow it will shift.

In this exercise, you'll remove the `"jacket"` item and its corresponding price from the `prices` list.

---

## Instructions

- Delete both the string `"jacket"` and its price `55.0` from the `prices` list.
- Print the updated `prices` list.

---

> [!TIP]
> After deleting an element, the indexes of the remaining elements change. If you need to remove consecutive elements, consider deleting the **slice** instead of removing them one at a time.

---

## Starter Code

```python
prices = ["book", 15.5, "shirt", 25.0, "sneakers", 45.99, "watch", 80.0, "bag", 40.0, "jacket", 55.0, "hat", 18.5]

# Delete the jacket items from the list


# Print the updated list


```

---
