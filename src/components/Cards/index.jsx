import React from 'react'
import "./styles.scss";

function ProductBlitz({ product }) {
    return (
      <div className="home-card"> 
        <img src={product.image} alt={product.name} />
        <div className="desc-product">
          <h2>{product.name}</h2>
          <span>{product.price}</span>
          <div className='card'></div>
          <button>Entra ai zé!</button>
        </div>
      </div>
    );
  }

  export default ProductBlitz
