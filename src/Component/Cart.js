import React, { useState, useEffect } from 'react'
import './style/cart.css'


const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);

    // Calculate total price whenever the cart changes
    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        setPrice(total);
    }, [cart]);

    // Function to handle item removal
    const handleRemove = (id) => {
        const filteredCart = cart.filter((item) => item.id !== id);
        setCart(filteredCart);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                cart.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="cart_details">
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty!</p>
            )}
            <div className="cart_total">
                <h3>Total Price: ${price.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;


