import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componets/NavBar.jsx'
import ItemListContainer from './componets/ItemListContainer.jsx'
import ProductDetail from './componets/ProductDetail.jsx'
import About from './componets/About.jsx'



function App() {


  return (
 <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />} />
        <Route path='/about' element={ <About />} />
        <Route path='/product/:id' element={<ProductDetail />} />
     </Routes>
 </BrowserRouter>
  )
}

export default App

