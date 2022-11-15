import React from 'react';
import './Product.css';

const Product = ({ product }) => {
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
            <button className='btn-cart'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;