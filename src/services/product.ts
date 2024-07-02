import { Axios } from '../main';
import { Product } from '../type/product';

/**
 * Fetches a list of products from the API.
 * @returns {Promise<Product[]>} A promise that resolves to an array of Product objects.
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await Axios('api/products');
  const products = response?.data;
  return products;
};
