import { ProductService } from "../services/product-service";

export function UseProducts() {
    return ProductService.ListAll();
}