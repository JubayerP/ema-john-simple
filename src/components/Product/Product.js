import React from 'react';
import './Product.css';
import {BsCartPlusFill} from 'react-icons/bs'

const Product = ({ product,handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'><small>Seller: {seller}</small></p>
                <p className='product-ratings'><small>Ratings: { ratings} Starts</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'><p className='btn-text'>Add to Cart</p> <BsCartPlusFill size={18}/> </button>
        </div>
    );
};

export default Product;