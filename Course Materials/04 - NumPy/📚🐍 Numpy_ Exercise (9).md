# Exercise

## Explore the Store Data

NumPy provides several statistical functions that help you better understand your data.

In this exercise, `np_stores` is a 2D NumPy array with three columns representing:

1. Number of employees
2. Daily revenue
3. Floor size

You'll calculate several summary statistics to explore the relationship between these variables.

---

## Instructions

- Complete the code to calculate the **median** number of employees.
- Use `np.std()` on the first column of `np_stores` to calculate the **standard deviation**. Store the result in `stddev`.
- Use `np.corrcoef()` to calculate the **correlation matrix** between the first and second columns of `np_stores`. Store the result in `corr`.

---

> [!TIP]
> Useful NumPy functions for this exercise:

```python
np.median()
np.std()
np.corrcoef()
```

To select an entire column from a 2D NumPy array:

```python
np_stores[:, column_index]
```

---

## Starter Code

```python
import numpy as np

# avg = np.mean(np_stores[:, 0])
# print("Average: " + str(avg))

stores = [  
    [20, 150.0, 4.5],  
    [15, 120.0, 4.2],  
    [30, 210.0, 4.8],  
    [18, 175.0, 4.3],  
    [25, 190.0, 4.6]  
]  
  
np_stores = np.array(stores)

# Print median employees
med = ____
print("Median: " + str(med))

# Print out the standard deviation on employees
stddev = ____
print("Standard Deviation: " + str(stddev))

# Print out correlation between first and second column
corr = ____
print("Correlation: " + str(corr))
```

---
