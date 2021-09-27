import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"

const Cart = (props) => {
  console.log("clicked")

    const { name, age, subject, gender,  picture, sellary  }= props.cart;

    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (

       <div className="col-md-4">
<div className="card mb-3" style={{"maxWidth":"540px"}}>
  <div className="row g-0">
     <div>
      <img src={picture} className="img-fluid rounded-start w-100" alt="..."/>
    </div>
     <div> 
      <div className="card-body bg-light">
        <h4 className="card-title text-danger">{name}</h4>
        <h6 className="card-text">Gender:{gender}</h6>
        <h6 className="card-text">Age:{age}</h6>
        <p className="card-text"><small >Subject:{subject}</small></p>
        <p className="card-text">Sellary:{sellary}</p>
        
        <button
        // onClick = {() => props.handleAddToCart(props.cart)}
        type="button" className="btn btn-primary"> {element}add to cart</button> <br /> <br />
        <div className="row">
          <div className="col-6">
          <i className="fa fa-twitter"></i>
          </div>
          <div className="col-6 ">
          <i className="fa fa-facebook"></i>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

       </div>

        
    );
};

export default Cart;

