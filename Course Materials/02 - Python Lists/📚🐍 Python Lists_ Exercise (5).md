# Exercise

## Slicing and Dicing

Selecting a single element from a list is useful, but Python also allows you to select **multiple elements** at once using **list slicing**.

The basic slicing syntax is:

```python
my_list[start:end]
```

- The **start** index is **included**.
- The **end** index is **excluded**.
- If you omit the **start** index, the slice begins at the start of the list.
- If you omit the **end** index, the slice continues to the end of the list.

---

## Instructions

- Use slicing to create a list named `first_half` containing the **first 6 elements** of `prices`.
- Create a list named `second_half` containing the **last 4 elements** of `prices`. Omit the `end` index to simplify the slice.
- Print both `first_half` and `second_half` using `print()`.

---

> [!TIP]
> Slicing returns a **new list** containing the selected elements, while leaving the original list unchanged.

---

## Starter Code

```python
# Create the prices list
prices = ["book", 15.5, "shirt", 25.0, "shoes", 45.99, "watch", 80.0, "bag", 35.25]

# Use slicing to create first_half
first_half = prices[____]

# Use slicing to create second_half
second_half = prices[____]

# Print out first_half and second_half
____
____
```

---
