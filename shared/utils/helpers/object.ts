/**
 * Format object to URL Search Params
 */
export function toQueryParams(query: Record<string, unknown>, url: string): string {
	const params = new URLSearchParams(
		Object.entries(query).map(([key, value]) => [key, String(value)]),
	);
	const newUrl = `${url}?${params.toString()}`;

	return newUrl;
}
