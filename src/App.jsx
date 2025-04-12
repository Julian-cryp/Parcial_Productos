import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Detalles from './Pages/Detalles';
import Carrito from './componentes/Carrito';
import Header from "./componentes/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detalles />} />
        <Route path="/cart" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;