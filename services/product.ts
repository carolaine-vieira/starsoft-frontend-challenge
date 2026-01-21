import { Product } from "@/types/product";

const ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/products`;

/**
 * Get all products from the API
 */
export async function getProducts(): Promise<Product[]> {
  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return formatProducts(data);
}

/**
 * Format raw product data into Product type
 */
function formatProducts(data: any[]): Product[] {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
  }));
}
