const Card = ({ producto }) => {
    return (
      <div style={{ width: '200px', border: '5px solid #ccc', padding: '20x' }}>
        <img src={producto.image} alt={producto.title} width="200px" height="200px" style={{ objectFit: 'contain' }} />
        <h3>{producto.title}</h3>
        <p>${producto.price}</p>
      </div>     
      
    );
  };
  
  export default Card;