import { useEffect, useRef, useState } from "react";
/**
 * Custom hook that debounces a value.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {T} - The debounced value.
 */
export function useDebounce(value, delay) {
    const currentTimer = useRef();
    const [store, setStore] = useState(value);
    useEffect(() => {
        if (currentTimer.current) {
            clearTimeout(currentTimer.current);
        }
        currentTimer.current = setTimeout(() => {
            setStore(value);
        }, delay);
        return () => {
            clearTimeout(currentTimer.current);
        };
    }, [value, delay]);
    return store;
}
