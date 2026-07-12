# Exercise  
  
## 2D Arithmetic  
  
Just like 1D NumPy arrays, **2D NumPy arrays** support **element-wise arithmetic**.  
  
In this exercise, `np_stores` is a 2D NumPy array with three columns representing:  
  
1. Number of employees  
2. Daily revenue (in dollars)  
3. Floor size (in square meters)  
  
You'll update the data and then convert some of the values using a conversion array.  
  
---  
  
## Instructions  
  
- Add `np_stores` and `updated`, then print the result.  
- Create a NumPy array named `conversion` with the values `1`, `0.92`, and `10.76`.  
- Multiply `np_stores` by `conversion` and print the result.  
  
---  
  
> [!TIP]  
> When multiplying a 2D NumPy array by a 1D NumPy array with the same number of columns, **NumPy broadcasts** the values across every row.  
  
For example:  
  
- Column `0` is multiplied by `1`.  
- Column `1` is multiplied by `0.92`.  
- Column `2` is multiplied by `10.76`.  
  
---  
  
## Starter Code  
  
```python  
import numpy as np  
  
# Each row: [Employees, Revenue (thousands), Rating]  
stores = [  
    [20, 150.0, 4.5],  
    [15, 120.0, 4.2],  
    [30, 210.0, 4.8],  
    [18, 175.0, 4.3],  
    [25, 190.0, 4.6]  
]  
  
# Updates to each store  
updated = [  
    [2, 10.0, 0.1],  
    [1, 5.0, 0.0],  
    [3, 15.0, 0.2],  
    [2, 8.0, 0.1],  
    [1, 12.0, 0.0]  
]  
  
np_stores = np.array(stores)  
  
# Print out addition of np_stores and updated  
  
  
# Create numpy array: conversion  
  
  
# Print out product of np_stores and conversion

```  
  
---  
  