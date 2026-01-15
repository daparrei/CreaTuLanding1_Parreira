import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Marca */}
        <a className="navbar-brand" href="#">
          ZAPATILLAS QUILMES
        </a>

        {/* Botón mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Hombre</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Mujer</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Niños</a>
            </li>
          </ul>

          {/* Carrito de compras */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
