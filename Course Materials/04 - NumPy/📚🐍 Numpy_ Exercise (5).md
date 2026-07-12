# Exercise

## Store Data in 2D Form

When your data contains multiple pieces of information for each record, organizing it as a **2D NumPy array** makes it easier to analyze and manipulate.

In this exercise, `stores` is a **list of lists**, where each inner list contains:

- The number of employees.
- The daily revenue of a store.

You'll convert this data into a **2D NumPy array** and inspect its dimensions.

---

## Instructions

- Use `np.array()` to create a 2D NumPy array from `stores`. Name it `np_stores`.
- Print the `.shape` attribute of `np_stores`.

---

> [!TIP]
> The `.shape` attribute returns a tuple in the form:

> `(number_of_rows, number_of_columns)`

For this dataset, each row represents one store and each column represents one feature.

---

## Starter Code

```python
import numpy as np  
  
stores = [  
    ["Cairo", "Electronics", 250],  
    ["Alexandria", "Clothing", 180],  
    ["Giza", "Groceries", 320],  
    ["Mansoura", "Furniture", 95],  
    ["Tanta", "Pharmacy", 140],  
    ["Aswan", "Books", 75],  
    ["Luxor", "Sports", 110],  
    ["Suez", "Toys", 60]  
]  
  
# Create a 2D numpy array from stores  
  
  
# Print out the shape of np_stores


```

---
