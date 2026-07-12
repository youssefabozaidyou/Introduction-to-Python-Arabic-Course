# Exercise

## Your First 2D NumPy Array

A **2D NumPy array** is created from a **list of lists**. Each inner list represents a **row**, while each value inside the inner list represents a **column**.

In this exercise, `house_data` contains information about four houses. Each row stores:

- The house area (in square meters).
- The house price (in thousands of dollars).

You'll convert this list of lists into a **2D NumPy array** and inspect its type and dimensions.

---

## Instructions

- Use `np.array()` to create a 2D NumPy array from `house_data`. Name it `np_house_data`.
- Print the type of `np_house_data`.
- Print the shape of `np_house_data` using the `.shape` attribute.

---

> [!TIP]
> The `.shape` attribute returns a tuple in the form:

> `(number_of_rows, number_of_columns)`

---

## Starter Code

```python
import numpy as np

house_data = [[120, 250.5],
              [150, 320.0],
              [90, 185.2],
              [200, 410.0]]

# Create a 2D numpy array from house_data: np_house_data


# Print out the type of np_house_data


# Print out the shape of np_house_data


```

---
