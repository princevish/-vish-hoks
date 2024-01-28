import { useEffect, useRef, useState } from "react";
/**
 * Custom hook that tracks whether an element is being hovered over.
 *
 * @returns A tuple containing a ref and a boolean value. The ref can be attached to the element that needs to be tracked for hover, and the boolean value indicates whether the element is currently being hovered over.
 */
export function useHover() {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        var _a, _b;
        setIsHovered(false);
        function monitorHover() {
            setIsHovered(true);
        }
        function monitorHoverLeave() {
            setIsHovered(false);
        }
        (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseenter", monitorHover);
        (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseleave", monitorHoverLeave);
        return () => {
            var _a, _b;
            (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("mouseenter", monitorHover);
            (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener("mouseleave", monitorHoverLeave);
        };
    }, []);
    return [ref, isHovered];
}
