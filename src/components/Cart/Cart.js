import React from 'react';

const Cart = (props) => {
    console.log(props.item.id)
    return (

        <div>
            <div>
                <li>
                    {
                        props.item.name
                    }
                </li>

            </div>
        </div>
    );
};

export default Cart;