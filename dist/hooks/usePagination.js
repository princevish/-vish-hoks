import { useMemo } from 'react';
const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
const DEFAULT_START = 1;
const MAX_PAGINATION_ITEMS = 5;
const NEIGHBORHOOD = 2;
const MAX_SIBLINGS = 3;
const PREVIEW_ITEM_LAST_PAGE = 4;
/**
 * Custom hook for handling pagination logic.
 *
 * @param {PaginationProps} totalCount - Total number of items
 * @param {PaginationProps} pageSize - Number of items per page
 * @param {PaginationProps} currentPage - Current page number
 * @return {readonly [number[], string]} An array containing pagination range and dots
 */
export const usePagination = ({ totalCount, pageSize, currentPage }) => {
    const DOTS = useMemo(() => '...', []);
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        if (totalPageCount <= MAX_PAGINATION_ITEMS) {
            return range(DEFAULT_START, totalPageCount);
        }
        if (currentPage <= NEIGHBORHOOD) {
            return [...range(DEFAULT_START, MAX_SIBLINGS), DOTS, totalPageCount];
        }
        if (currentPage >= totalPageCount - DEFAULT_START || totalPageCount - DEFAULT_START - currentPage <= NEIGHBORHOOD) {
            return [...range(totalPageCount - PREVIEW_ITEM_LAST_PAGE, totalPageCount)];
        }
        return [...range(currentPage - DEFAULT_START, currentPage + DEFAULT_START), DOTS, totalPageCount];
    }, [totalCount, pageSize, currentPage, DOTS]);
    return [paginationRange, DOTS];
};
