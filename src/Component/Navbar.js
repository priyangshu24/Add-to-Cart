import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Component/style/navbar.css'

const Navbar = ({size,setShow}) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="logo">
                    PxA Shop
                </span>
                <div className='cart' onClick={() => setShow(false)}>
                    <span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <span className="cart-count">{size}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
