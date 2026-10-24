import { Footer } from "./components/layouts/footer"
import { Header as Cabecario } from "./components/layouts/header"
import { NavigationBar } from "./components/layouts/navigation"
import { categories } from "./data/categories"

function App() {

  function handleSelectCategory(alias: string) {
    alert('Categoria: ' + alias);
  }

  return (
    <>
      <Cabecario />

      <NavigationBar categories={categories} 
                     activeCategory="todos" 
                     onSelectCategory={handleSelectCategory} 
      />
      <main>
        <section>
          <header>
            <h2>Produtos</h2>
            <p>Categoria <span id="selected-category">Todos</span>: 10 itens</p>
          </header>

          <article>
            <figure>
              <img src="./assets/img/burger.png" alt="Burguer"/>
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Burguer</h3>
            <p>Pão brioche, hambúrguer 160g, queijo prato e molho da casa.</p>
            <p>R$ 22,00</p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burger-bacon.png"/>
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Bacon Burger</h3>
            <p>Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.</p>
            <p><strong>R$ 25,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/burger-double.png"/>
              <figcaption>Lanches</figcaption>
            </figure>
            <h3>Duplo Burguer</h3>
            <p>Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.</p>
            <p><strong>R$ 29,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/batata-rustica.png"/>
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Rústica</h3>
            <p>Porção de batata com alecrim, parmesao e maionese verde.</p>
            <p><strong>R$ 18,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/batata-tradicional.png"/>
              <figcaption>Porções</figcaption>
            </figure>
            <h3>Batata Tradicional</h3>
            <p>Porção de batata e maionese verde.</p>
            <p><strong>R$ 15,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/agua.png"/>
              <figcaption>Bebida</figcaption>
            </figure>
            <h3>Água Sem Gás</h3>
            <p>Garrafa descartável de água sem gás com 500 ml.</p>
            <p><strong>R$ 8,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/refri.png"/>
              <figcaption>Bebida</figcaption>
            </figure>
            <h3>Refrigerante 300 ml</h3>
            <p>Copo de refrigerante de 300 ml.</p>
            <p><strong>R$ 10,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/chopp.png"/>
              <figcaption>Bebida</figcaption>
            </figure>
            <h3>Chopp 300 ml</h3>
            <p>Caneca de 300 ml do nosso chopp pilsen geladíssimo.</p>
            <p><strong>R$ 15,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/petit-gateau.png"/>
              <figcaption>Sobremesa</figcaption>
            </figure>
            <h3>Petit Gateau</h3>
            <p>Petit Gateau com uma bola de sorvete de creme.</p>
            <p><strong>R$ 25,00</strong></p>
            <button type="button">Adicionar</button>
          </article>

          <article>
            <figure>
              <img src="./assets/img/mousse-maracuja.png"/>
              <figcaption>Sobremesa</figcaption>
            </figure>
            <h3>Mousse de Maracujá</h3>
            <p>Mousse de maracujá feito com a fruta de verdade.</p>
            <p><strong>R$ 18,00</strong></p>
            <button type="button">Adicionar</button>
          </article>
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
