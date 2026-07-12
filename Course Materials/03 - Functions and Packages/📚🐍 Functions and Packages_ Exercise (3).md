# Exercise

## String Methods

Strings come with many built-in **methods** that allow you to manipulate and analyze text.

If you'd like to explore all available string methods, you can type the following in the IPython Shell:

```python
help(str)
```

A string named `place` has already been created for you to experiment with.

---

## Instructions

- Use the `.upper()` method on `place` and store the result in `place_up`.
- Print both `place` and `place_up`. Notice whether the original string changes.
- Print the number of times the letter `'o'` appears in `place` by calling the `.count()` method.

---

> [!TIP]
> String methods return a **new string** or value. They do **not** modify the original string unless you assign the result to a variable.

---

## Starter Code

```python
# string to experiment with: place
place = "poolhouse"

# Use upper() on place
place_up = ____

# Print out place and place_up
____
____

# Print out the number of o's in place
____
```

---

> [!NOTE]- Reference Solution (Instructor Only)

```python
# string to experiment with: place
place = "poolhouse"

# Use upper() on place
place_up = place.upper()

# Print out place and place_up
print(place)
print(place_up)

# Print out the number of o's in place
print(place.count("o"))
```

---

> [!SUCCESS] Expected Output

```text
poolhouse
POOLHOUSE
3
```