import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props.product);
    const { img, name, seller, price, stock,key } = props.product;

    return (
        <div className="item">
            <div>
                <img src={img} alt="" />

            </div>

            <div className="space">
                <h4 className="item-name"><Link to={"/product/" + key}>{name}</Link> </h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock. Order soon!</small></p>
                
               {props.showButton && <button 
                className="main-button"
                onClick={() => props.handleAddProduct(props.product)}
                > 
                 
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>}

            </div>




        </div>
    );
};

export default Product;