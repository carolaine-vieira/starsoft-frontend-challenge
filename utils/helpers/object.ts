/**
 * Format object to URL Search Params
 */
export function toQueryParams(query: Record<string, unknown>): string {
	const params = new URLSearchParams(
		Object.entries(query).map(([key, value]) => [key, String(value)]),
	);

	return params.toString();
}
