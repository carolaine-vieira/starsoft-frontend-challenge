export interface Product {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	createdAt: string;
}

export interface ProductQueryArgs {
	page?: number;
	rows?: number;
	sortBy?: 'name' | 'brand' | 'id' | 'price';
	orderBy?: 'ASC' | 'DESC';
}

export interface GetProductsResponse {
	products: Product[];
	total: number;
	currentPage: number;
}
