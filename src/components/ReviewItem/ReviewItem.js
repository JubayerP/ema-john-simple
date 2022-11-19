import React from 'react';
import './ReviewItem.css';
import { AiFillDelete } from 'react-icons/ai';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name,img, price, quantity, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${ price}</small></p>
                    <p><small>Shipping: ${ shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveItem(id)} className='btn-delete'><AiFillDelete className='delete-icon' size={25}/></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;