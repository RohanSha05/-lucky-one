import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { handleAddToCart } = props;
    return (
        < div >
            <div className="">
                <div className="col">
                    <div className="card">
                        <img src={props.product.img} className='w-50 m-auto' alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{props.product.name}</h5>
                            <p className="card-text">Price: $ {props.product.price}</p>
                            <button onClick={() => handleAddToCart(props.product)}>Selected Laptops</button>
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Product;