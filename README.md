# Vish-hooks React Hooks

This project includes a set of custom React hooks. Here are the hooks and their usage examples:

## useFocus

This hook allows you to manage focus on a particular element.

```javascript
import { useFocus } from 'vish-hooks';

const Component = () => {
  const [ref, isFocused] = useFocus();

  return <input ref={ref} />;
};
```

## useIsFirstRender

This hook allows you to check if the component is rendered for the first time.

```javascript
import { useIsFirstRender } from 'vish-hooks';

const Component = () => {
  const isFirstRender = useIsFirstRender();

  return <div>{isFirstRender ? 'First Render' : 'Not First Render'}</div>;
};
```

## useIsMounted

This hook allows you to check if the component is mounted.

```javascript
import { useIsMounted } from 'vish-hooks';

const Component = () => {
  const isMounted = useIsMounted();

  return <div>{isMounted ? 'Mounted' : 'Not Mounted'}</div>;
};
```


## usePrevious

This hook allows you to get the previous value of a state.

```javascript

import { usePrevious } from 'vish-hooks';

const Component = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count} - Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```



## useSWR

This hook allows you to fetch data using SWR.

```javascript

import { useSWR } from 'vish-hooks';

const Component = () => {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1');

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{data.title}</div>;
};
```


## useToggle

This hook allows you to toggle between two states.

```javascript

import { useToggle } from 'vish-hooks';

const Component = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <p>{isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleIsOn}>Toggle</button>
    </div>
  );
};
```



## useTimeout

This hook allows you to set a timeout.

```javascript

import { useTimeout } from 'vish-hooks';

const Component = () => {
  const [isReady, cancel, reset] = useTimeout(5000);

  return (
    <div>
      <p>{isReady ? 'Ready' : 'Not Ready'}</p>
      <button onClick={cancel}>Cancel</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

## useUpdateEffect

This hook allows you to run an effect only when the component is updated.

```javascript

import { useUpdateEffect } from 'vish-hooks';

const Component = () => {
  const [count, setCount] = useState(10);

  useUpdateEffect(() => {
    console.log('Updated');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

## useEffectOnce

This hook allows you to run an effect only once.

```javascript

import { useEffectOnce } from 'vish-hooks';

const Component = () => {
  useEffectOnce(() => {
    console.log('Mounted');
  });

  return <div>Mounted</div>;
};
```


## useClickOutside

This hook allows you to detect clicks outside a particular element.

```javascript

import { useClickOutside } from 'vish-hooks';

const Component = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  useClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          <p>Click outside this element to close</p>
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
};
```


## useArray

This hook allows you to manage an array.

```javascript

import { useArray } from 'vish-hooks';

const Component = () => {
  const [todos, { push, remove, filter, update }] = useArray([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Firebase' },
    { id: 3, text: 'Learn GraphQL' },
  ]);

  return (
    <div>
      <button onClick={() => push({ id: 4, text: 'Learn Hooks' })}>Add Todo</button>
      <button onClick={() => update(1, { id: 1, text: 'Learn Hooks' })}>Update Todo</button>
      <button onClick={() => remove(1)}>Remove Todo</button>
      <button onClick={() => filter((todo) => todo.id !== 1)}>Remove Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};
```


## useDebounce

This hook allows you to debounce a value.

```javascript

import { useDebounce } from 'vish-hooks';

const Component = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
      />
      <p>Actual value: {value}</p>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
};
```

## useHover

This hook allows you to detect if the mouse is over a particular element.

```javascript

import { useHover } from 'vish-hooks';

const Component = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      {isHovered ? (
        <p>Move the mouse out of here!</p>
      ) : (
        <p>Hover over me!</p>
      )}
    </div>
  );
};
```

## useFocus

`useFocus` is a custom React hook that allows you to track whether the user's browser is currently focused on your application or not.

```javascript

import React from 'react';
import { useFocus } from 'vish-hooks';

const Component = () => {
    const [isFocused, setIsFocused] = useFocus();

    return (
        <div>
            {isFocused ? 'The window is focused' : 'The window is not focused'}
        </div>
    );
};

export default Component;
```