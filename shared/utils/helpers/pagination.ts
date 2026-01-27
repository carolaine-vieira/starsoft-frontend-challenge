/**
 * Calculates the next page number for pagination.
 */
export const calculateNextPage = (currentPage: number, total: number) => {
	if (currentPage < Math.ceil(total / 8)) {
		return currentPage + 1;
	}
	return undefined;
};
