import { Product } from '../../types/product';

export interface HomeLayoutProps {
	initialData: {
		products: Product[];
		total: number;
	};
}
