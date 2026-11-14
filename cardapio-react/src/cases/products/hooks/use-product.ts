import { use, useEffect, useState } from "react";
import { ProductService } from "../services/product-service";
import type { Product } from "../dtos/product";

export function UseProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ProductService.ListAll()
            .then((setProducts))
            .catch((err) => { setError(err.message); })
            .finally(() => { setLoading(false); });
    }, []);

    return { products, loading, error }
}