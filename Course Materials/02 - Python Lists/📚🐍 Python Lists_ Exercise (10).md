# Exercise

## Inner Workings of Lists

In Python, assigning one list to another variable does **not** create a new list. Instead, both variables point to the **same list** in memory.

For example:

```python
prices_copy = prices
```

If you modify `prices_copy`, the changes will also appear in `prices`.

To create an **independent copy**, use either:

```python
prices_copy = list(prices)
```

or

```python
prices_copy = prices[:]
```

This way, changes to `prices_copy` won't affect the original list.

---

## Instructions

- Modify the line that creates `prices_copy` so that it becomes an **explicit copy** of `prices`.
- After making the change, updating `prices_copy` should no longer modify `prices`.

---

> [!TIP]
> Assigning one list to another copies the **reference**, not the actual list. Use `list()` or slicing (`[:]`) to create a separate copy.

---

## Starter Code

```python
# Create list prices
prices = [15.5, 25.0, 45.99, 80.0, 35.25]

# Change this command
prices_copy = prices

# Change prices_copy
prices_copy[0] = 10.0

# Print prices
print(prices)
```

---
