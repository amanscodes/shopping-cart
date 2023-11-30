import React, { useState } from 'react';
function Product({product,cart,setCart}){
        const [isCartEmpty, setIsCartEmpty] = useState(true);
        const handleButtonClick = () => { 
          setIsCartEmpty(!isCartEmpty);
         isCartEmpty?setCart(cart+1):setCart(cart-1)
        };
    return<>
    <div className="product-container">
<img className="product-poster" src={product.poster}/>
<h3 className="name">{product.name}</h3>
<div className="both">
<p>{product.rating}</p>
<h4>{product.price}</h4>
</div>

<button className="btn" onClick={handleButtonClick}>{isCartEmpty ? 'Add to Cart' : 'Remove from Cart'}</button>
</div>
</>
}
export default Product;
