import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProductos(res.data))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

 
  const filtrarProductos = (productos, busqueda) => {
    return productos.filter(producto =>
      producto.title.toLowerCase().includes(busqueda.toLowerCase()) 
    );
  };

  
  if (error) return <p className="error">Error cargando productos</p>;

  const productosFiltrados = filtrarProductos(productos, busqueda);
  return (
    <div className="home">
      <input
        type="text"
        placeholder="Buscar..."
        className="search"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} 
      />
       {productosFiltrados.length === 0 && busqueda && (
        <p className="no-found">No se encontraron productos</p>
      )}
      <div className="grid">
        {}
        {filtrarProductos(productos, busqueda).map(producto => (
          <Link key={producto.id} to={`/product/${producto.id}`} className="card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>${producto.price}</p>
            <button className="details-button" onClick={() => console.log(`Producto seleccionado: ${producto.title}`)}>
                 <p>Más detalles</p>
                  </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;