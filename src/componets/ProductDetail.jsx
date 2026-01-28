import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../data/api-productos.js";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
  
    getProductsById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        console.log ("No se pudo cargar el producto");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No existe el producto</p>;

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>{product.nombre}</h2>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <p>{product.descripcion}</p>

      {product.imagen && (
        <img
          src={`/${product.imagen}`}
          alt={product.nombre}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
};

export default ProductDetail;
