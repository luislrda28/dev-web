import { api } from "../../../lib/axios"
import type { Product } from "../dtos/product";

const ENDPOINT = "/products?key=e66fc020"

export const ProductService = {
    async ListAll(): Promise<Product[]> {
        const result = await api.get<Product[]>(ENDPOINT);
        return result.data;
    }
}