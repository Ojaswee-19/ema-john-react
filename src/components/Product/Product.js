import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="item">
            <div>
                <img src={img} alt="" />

            </div>

            <div className="space">
                <h4 className="item-name"> {name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock. Order soon!</small></p>
                
                <button 
                className="main-button"
                onClick={() => props.handleAddProduct(props.product)}
                > 
                 
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>

            </div>




        </div>
    );
};

export default Product;