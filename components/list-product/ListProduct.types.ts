import { Product } from '@/types/product';

export interface ListProductProps {
	className?: string;
	initialData: {
		products: Product[];
		total: number;
	};
}
