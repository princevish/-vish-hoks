import { useEffect } from "react";
/**
 * Executes the provided effect function only once, after the component has mounted.
 *
 * @param effect - The effect function to be executed.
 *
 * @example
 *
 * useEffectOnce(() => {
 *   // Perform some side effect
 * });
 */
export function useEffectOnce(effect) {
    useEffect(effect, [effect]);
}
