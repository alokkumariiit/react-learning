# Level 3 - Props in React

## Overview

Props are used to pass data from one component to another.

Think of props as function arguments.

---

## Topics Covered

- What are Props?
- Passing Props
- Receiving Props
- Props Object
- Parent Component
- Child Component
- Reusable Components
- Dynamic Data Rendering

---

## Example

```jsx
function Car(props) {
    return <h2>{props.brand}</h2>;
}

<Car brand="BMW" />
```

---

## Why Props?

Without props every component would display fixed data.

Props make components reusable.

Example:

```
Card
Card
Card
Card
```

One component

Different Data

---

## Real World Example

Product Card

User Card

Movie Card

Course Card

Employee Card

---

## Outcome

After completing this section you'll know how React applications share data between components.