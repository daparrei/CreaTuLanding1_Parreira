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
     <Routes> 
       <Route path='/' element={
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a ZAPATILLAS QUILMES"} />
    </div>} />
      <Route path='/about' element={
    <div>
      <NavBar />
      <About />
    </div>} />
      <Route path='/product/:id' element={
    <div>
      <NavBar />
      <ProductDetail />
    </div>} />
     </Routes>
 </BrowserRouter>

    
  )
}

export default App

