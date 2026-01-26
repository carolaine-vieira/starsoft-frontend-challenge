import { GetProductsResponse, Product, ProductQueryArgs } from '../shared/types/product';
import { toQueryParams } from '../shared/utils/helpers/object';

const ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const DEFAULT_QUERY: ProductQueryArgs = {
	page: 1,
	rows: 8,
	orderBy: 'ASC',
	sortBy: 'name',
};

/**
 * Get products from the API.
 */
export async function getProducts(query?: ProductQueryArgs): Promise<GetProductsResponse> {
	const paramsObj = { ...DEFAULT_QUERY, ...query };
	const fetchUrl = toQueryParams(paramsObj, ENDPOINT);
	const res = await fetch(fetchUrl, { cache: 'force-cache' });

	if (!res.ok) {
		throw new Error('Failed to fetch products.');
	}

	const data = await res.json();

	return {
		products: formatProducts(data.products),
		total: data.count,
		currentPage: paramsObj.page || 1,
	};
}

/**
 * Format raw product data into Product type
 */
function formatProducts(data: any[]): Product[] {
	return data.map((item) => ({
		id: item.id,
		name: item.name,
		description: item.description,
		image: item.image,
		createdAt: item.createdAt,
		price: parseFloat(item.price),
	}));
}
