import './ItemCard.css';

const ItemCard = ({ product }) => {

  const handleComprar = () => {
    localStorage.setItem("productoSeleccionado", product.id);
  };

  return (
    <div className="galeria-categoria-zapitilla">
      <a href="/producto-detalle">
        <img src={product.imagen} alt={product.alt} />
      </a>

      <p className="galeria-categoria-zapitilla-nombre">
        Zapatilla {product.nombre}
      </p>

      <p className="galeria-categoria-zapitilla-precio">
        $ {product.precio.toLocaleString("es-AR")}
      </p>

      <p className="galeria-categoria-zapitilla-descripcion">
        {product.descripcion}
      </p>

      <button
        className="galeria-categoria-zapitilla-boton"
        onClick={handleComprar}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default ItemCard;
