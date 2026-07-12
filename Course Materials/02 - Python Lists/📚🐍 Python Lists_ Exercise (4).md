# Exercise

## Subset and Conquer

Subsetting Python lists is simple. You can access individual elements by using their **index**.

For example:

```python
x = ["a", "b", "c", "d"]

x[1]
x[-3]  # same result!
```

Remember that Python uses **zero-based indexing**, so the first element has index `0`. You can also use **negative indexes** to count from the end of the list.

The `prices` list is already provided. Your task is to retrieve specific elements from it.

---

## Instructions

- Print the **second element** of the `prices` list (the value `15.5`).
- Print the **last element** of the `prices` list (the value `35.25`) using a negative index.
- Print the price of the **watch** (`80.0`).

---

> [!TIP]
> - Positive indexes start from the beginning (`0`, `1`, `2`, ...).
> - Negative indexes start from the end (`-1`, `-2`, `-3`, ...).

---

## Starter Code

```python
# Create the prices list
prices = ["book", 15.5, "shirt", 25.0, "shoes", 45.99, "watch", 80.0, "bag", 35.25]

# Print out second element from prices
print(prices[____])

# Print out last element from prices
print(prices[____])

# Print out the price of the watch
print(prices[____])
```

---
