/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../Component/style/card.css'

const Card = ({ item, handleClick }) => {
    const { title, author, price, img } = item;

    return (
        <div className="card">
            <div className="image_box">
                <img src={img} alt={title} />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;