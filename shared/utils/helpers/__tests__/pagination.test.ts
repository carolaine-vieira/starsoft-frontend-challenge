// Internal dependencies
import { calculateNextPage } from '@/utils/helpers/pagination';

describe('Helpers: Pagination', () => {
	it('calculateNextPage returns next page when current < total/8', () => {
		const next = calculateNextPage(1, 16);
		expect(next).toBe(2);
	});

	it('calculateNextPage returns undefined when current >= total/8', () => {
		const next = calculateNextPage(2, 16);
		expect(next).toBeUndefined();
	});

	it('calculateNextPage returns undefined when current > total/8', () => {
		const next = calculateNextPage(10, 16);
		expect(next).toBeUndefined();
	});
});
