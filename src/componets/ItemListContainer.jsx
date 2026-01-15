import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://69071d72b1879c890ed8d89d.mockapi.io/productos")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.categoria} - {product.nombre} - ${product.precio} 
        </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
