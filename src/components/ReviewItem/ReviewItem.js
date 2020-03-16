import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name, quantity,key,price} = props.product;
    const reviewItemStyle= {
            borderBottom:'1px solid lightgray',
            marginBottom:'5px',
            paddingBottom:'5px'
        };
    return (
        <div style={reviewItemStyle} >
            <h4 className="item-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button className="main-button"
            onClick= {() => props.removeProduct(key)} 
            >Remove</button>
            

        </div>
    );
};

export default ReviewItem;