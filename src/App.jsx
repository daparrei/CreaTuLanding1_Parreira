import './App.css'
import NavBar from './componets/NavBar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />
    </div>
  )
}

export default App

