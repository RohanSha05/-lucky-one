import React from 'react';

const Cart = (props) => {
    // console.log(props.cart.length)
    /*  let length = props.cart.length;
     console.log(length)
     let number = Math.floor(Math.random() * 10) + 1;
     let index = length.indexOf(number);
     console.log(index) */
    const handleRandomItem = (props) => {
        // console.log(props.cart.length)
        /* let index = number.indexOf(props.cart.length);
        console.log(index) */
    }
    return (
        <div>
            <button onClick={handleRandomItem}>Choose One For Me</button>
            <button>Delete</button>
        </div>
    );
};


export default Cart;