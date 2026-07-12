# Exercise

## Selective Import

Instead of importing an entire package, Python also allows you to import **specific objects** from a package.

For example, if you only need the value of `pi` from the `math` package, you can import it directly:

```python
from math import pi
```

This lets you use `pi` directly without writing `math.pi`.

To calculate the circumference and area of a circle, use the following formulas:

$$
C = 2\pi r
$$

$$
A = \pi r^2
$$

---

## Instructions

- Import `pi` directly from the `math` package.
- Use `pi` to calculate the circumference of the circle and store the result in `C`.
- Use `pi` to calculate the area of the circle and store the result in `A`.

---

> [!TIP]
> When you import a specific object using `from ... import ...`, you can use it directly without prefixing it with the package name.

---

## Starter Code

```python
# Import pi function of math package


# Calculate C


# Calculate A


print("Circumference: " + str(C))
print("Area: " + str(A))
```

---
