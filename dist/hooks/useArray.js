import { useCallback, useMemo, useState } from "react";
/**
 * Custom hook that manages an array state and provides actions to modify the array.
 *
 * @template T - The type of items in the array.
 * @param {T[]} initialValue - The initial value of the array.
 * @returns {{ value: T[] } & UseArrayActions<T>} - An object containing the current value of the array and actions to modify it.
 *
 * @example
 * const { value, push, removeByIndex } = useArray<string>(["apple", "banana"]);
 * console.log(value); // ["apple", "banana"]
 * push("orange");
 * console.log(value); // ["apple", "banana", "orange"]
 * removeByIndex(1);
 * console.log(value); // ["apple", "orange"]
 */
export function useArray(initialValue) {
    const [value, setValue] = useState(initialValue);
    const push = useCallback((item) => setValue((prev) => [...prev, item]), []);
    const removeByIndex = useCallback((index) => setValue((prev) => {
        const copy = prev.slice();
        copy.splice(index, 1);
        return copy;
    }), []);
    return useMemo(() => ({ value, push, removeByIndex }), [value, push, removeByIndex]);
}
