import ItemCard from "./ItemCard";
import './ItemList.css';

const ItemList = ({ products }) => {

  const categorias = [...new Set(products.map(p => p.categoria))];

  return (
    <div className="galeria">
      {categorias.map(categoria => (
        <section key={categoria} className="galeria-categoria">
          <h2>{categoria}</h2>

          <div className="galeria-grid">
            {products
              .filter(p => p.categoria === categoria)
              .map(product => (
                <ItemCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ItemList;
