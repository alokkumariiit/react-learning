# Level 6 - Context API

## Overview

Context API provides a way to share data across multiple components without manually passing props through every level.

This solves the problem known as prop drilling.

---

## Topics Covered

- createContext()
- Provider
- useContext()
- Global State
- Prop Drilling
- Shared State

---

## Why Context API?

Without Context

```
App
 ↓
Parent
 ↓
Child
 ↓
GrandChild
```

Every component passes props.

With Context

```
Context
    ↓
Any Component
```

No unnecessary prop passing.

---

## Example

```jsx
const UserContext = createContext();
```

---

## Outcome

You'll learn how to manage global data such as themes, authentication, and user information without external libraries.