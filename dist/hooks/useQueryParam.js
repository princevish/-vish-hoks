import { useCallback, useState } from 'react';
const getQuery = () => {
    if (typeof window !== 'undefined') {
        return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
};
/**
 * Returns the value of a query string parameter by its key.
 *
 * @param {string} key - The key of the query string parameter.
 * @return {string | null} - The value of the query string parameter, or null if the parameter is not found.
 */
const getQueryStringVal = (key) => {
    return getQuery().get(key);
};
export const useQueryParam = (key, defaultVal) => {
    const [query, setQuery] = useState(() => {
        var _a;
        const queryVal = (_a = getQueryStringVal(key)) !== null && _a !== void 0 ? _a : defaultVal;
        return queryVal;
    });
    const updateUrl = useCallback((newVal) => {
        const query = getQuery();
        if (newVal.trim() !== '') {
            query.set(key, newVal);
        }
        else {
            query.delete(key);
        }
        if (typeof window !== 'undefined') {
            const { protocol, host, pathname } = window.location;
            const newUrl = `${protocol}//${host}${pathname}${query.toString()}`;
            window.history.replaceState({}, '', newUrl);
        }
        setQuery(newVal);
    }, [key]);
    return [query, updateUrl];
};
