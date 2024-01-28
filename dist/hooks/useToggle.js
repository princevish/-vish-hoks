import { useState } from "react";
/**
 * Custom hook that provides a toggle functionality.
 *
 * @param {boolean} on - The initial state of the toggle.
 * @returns {[boolean, () => void]} - A tuple containing the current state of the toggle and a function to toggle the state.
 */
export function useToggle(on) {
    const [onState, setOnState] = useState(on !== null && on !== void 0 ? on : false);
    function toggle() {
        setOnState((prev) => !prev);
    }
    return [onState, toggle];
}
