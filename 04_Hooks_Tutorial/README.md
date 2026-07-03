# Level 4 - Hooks in React

## Overview

Hooks allow function components to use React features such as state, lifecycle methods, and references.

---

## Hooks Covered

### useState

Manage component state.

---

### useEffect

Handle side effects like

- API Calls
- Timers
- DOM Updates

---

### useRef

- Access DOM elements
- Store mutable values

---

### useMemo

Optimize expensive calculations.

---

### useCallback

Prevent unnecessary function recreation.

---

## Other Hooks

- useContext
- useReducer
- useLayoutEffect
- Custom Hooks

---

## Dependency Array

```
useEffect()
```

Runs every render

```
useEffect(()=>{},[])
```

Runs once

```
useEffect(()=>{},[count])
```

Runs whenever count changes

---

## Outcome

You'll understand how modern React applications manage state and lifecycle using hooks.