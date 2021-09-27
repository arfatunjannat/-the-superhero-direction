import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';


const Maincard = (props) => {
    const [carts,setCarts]=useState([])

    // const [cart,setCart]=useState([])
    

    useEffect(()=>{
        fetch('./teacher.JSON')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    } ,[])
    
    
        
    // const handleAddToCart = (carts)=>{
    //    const newCart =[...cart, setCart];
    //    setCarts(newCart);
    // }

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {/* akne card load korbo */}
                    <div className="row">
                    {
                    carts.map(cart=> <Cart
                    key={cart.key}
                    cart={cart}
                    // handleAddToCart = {handleAddToCart}
                     
                    ></Cart> )
                }
            
                    </div>
                </div>
                <div className="col-md-3">
                    {/* akne sum korbo */}
                    {/* <Cartnew newCart={newCart}></Cartnew> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Maincard;

