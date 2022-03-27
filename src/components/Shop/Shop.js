import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 row row-cols-1 row-cols-lg-3 row-cols-md-3 g-4'>
                    {
                        products.map(product => <Product product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='col-4'>
                    <h4>Carts: {cart.length}</h4>
                    {
                        cart.map((item) => <li>{item.name}</li>)
                    }
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;