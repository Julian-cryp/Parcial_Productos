import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detalles.scss";

const Detalles = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.data || Object.keys(res.data).length === 0) {
          setError(true);
        } else {
          setProducto(res.data);
        }
      })
      .catch(err => {
        console.error(err);
        setError(true);
      });
  }, [id]);

  if (error) return <p className="error">No se pudo cargar el producto. Intenta más tarde.</p>;
  if (!producto) return (
    <div className="loading">
      <p>Cargando...</p>
      <div className="spinner"></div>
    </div>
  );

  
  const addToCart = (producto) => {
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    const productExists = cart.find(item => item.id === producto.id);

    if (productExists) {
      
      productExists.quantity += 1;
    } else {
     
      producto.quantity = 1;
      cart.push(producto);
    }

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    alert("Producto añadido al carrito");
  };

  return (
    <div className="detalles">
      <button onClick={() => window.history.back()} className="button">Volver</button>
      <h1>Detalles del Producto</h1>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <button onClick={() => addToCart(producto)} className="button">Añadir al carrito</button>
    </div>
  );
};

export default Detalles;
