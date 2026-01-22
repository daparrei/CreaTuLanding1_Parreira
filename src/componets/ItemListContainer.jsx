import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://69071d72b1879c890ed8d89d.mockapi.io/productos")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
