import { getProducts,getProductsById } from "../data/api-productos.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";  

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getProducts()
       .then((response) => {
        setProducts(response);
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false)
       
      });
       
  }, []);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      { loading == true ? <p>Cargando productos...</p> : <ItemList products={products} />}
      </div>
  );
};

export default ItemListContainer;
