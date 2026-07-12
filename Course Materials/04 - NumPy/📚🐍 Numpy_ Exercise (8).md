# Exercise

## Average versus Median

NumPy provides several statistical functions that help summarize your data.

Two of the most commonly used are:

- `np.mean()` – Calculates the **average** of the values.
- `np.median()` – Finds the **middle value** after sorting the data.

When a dataset contains **outliers** (values that are much larger or smaller than the rest), the **mean** can be heavily affected, while the **median** usually provides a better representation of the typical value.

In this exercise, `np_stores` is a 2D NumPy array with 500 rows and 3 columns representing:

1. Number of employees
2. Daily revenue
3. Floor size

---

## Instructions

- Create a NumPy array named `np_revenue` containing the **second column** of `np_stores`.
- Print the **mean** of `np_revenue`.
- Print the **median** of `np_revenue`.

---

> [!TIP]
> Use column indexing to extract the second column:

```python
np_stores[:, 1]
```

Then use:

- `np.mean()`
- `np.median()`

to calculate the summary statistics.

---

## Starter Code

```python
import numpy as np  
  
stores = [  
    [20, 150.0, 4.5],  
    [15, 120.0, 4.2],  
    [30, 210.0, 4.8],  
    [18, 175.0, 4.3],  
    [25, 190.0, 4.6]  
]  
np_stores = np.array(stores)  
  
# Create np_revenue from np_stores  
  
  
# Print out the mean of np_revenue  
  
  
# Print out the median of np_revenue
```

---
