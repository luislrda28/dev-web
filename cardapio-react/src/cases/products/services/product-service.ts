import { products } from "../dtos/product"

export const ProductService = {
    ListAll() {
        return products;
    }
}