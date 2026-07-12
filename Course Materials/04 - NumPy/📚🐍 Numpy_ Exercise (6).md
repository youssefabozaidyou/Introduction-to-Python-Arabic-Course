# Exercise

## Subsetting 2D NumPy Arrays

Subsetting becomes even more powerful with **2D NumPy arrays**. You can select specific **rows**, **columns**, or even individual elements using the following syntax:

```python
array[row_selection, column_selection]
```

- The part **before** the comma selects the rows.
- The part **after** the comma selects the columns.
- The `:` symbol means **all rows** or **all columns**, depending on where it is used.

---

## Instructions

- Print the **50th row** of `np_stores`.
- Create a new variable named `np_revenue` that contains the **entire second column** of `np_stores`.
- Print the **number of employees** (first column) of the **124th store**.

---

> [!TIP]
> Remember that Python uses **zero-based indexing**:
>
> - The 50th row has index `49`.
> - The 124th row has index `123`.
> - The first column has index `0`.
> - The second column has index `1`.

---

## Starter Code

```python
import numpy as np

np_stores = np.array(stores)

# Print out the 50th row of np_stores


# Select the entire second column of np_stores: np_revenue


# Print out number of employees of 124th store


```

---
