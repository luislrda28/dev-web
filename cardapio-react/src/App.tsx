import { useState } from "react"
import { Footer } from "./components/layouts/footer"
import { Header as Cabecario } from "./components/layouts/header"
import { NavigationBar } from "./components/layouts/navigation"
import { categories } from "./data/categories"
import { ProductCard } from "./cases/products/components/product-card"
import { UseProducts } from "./cases/products/hooks/use-product"

function App() {

  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const { products, loading, error } = UseProducts();
  const visibleProducts = activeCategory === "todos" ? products : products.filter(product => product.category === activeCategory);

  function handleSelectCategory(alias: string) {
    setActiveCategory(alias);
  }

  return (
    <>
      <Cabecario />

      <NavigationBar categories={categories} 
                     activeCategory={activeCategory} 
                     onSelectCategory={handleSelectCategory} 
      />
      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">{activeCategory}</span>: {visibleProducts.length} itens</p>
          </header>

          {loading && (
              <p className="panel-loading">Carregando...</p>
          )}

          {error && (
              <p className="panel-error">{error}</p>
          )}

          {visibleProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </section>
        <aside>
          <h2>Seu pedido</h2>
          <div className="cart-empty">
            <img src="./assets/img/cart.svg" />
            <p>Seu carrinho está vazio</p>
            <p>Escolha um item do cardápio para começar</p>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  )
}

export default App
