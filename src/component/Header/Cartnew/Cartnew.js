import React from 'react';
import './Cartnew.css'

const Cartnew = (props) => {
    
    // const {cartnew}=props;
    // let total=0;
    // for(const newCart of cartnew){
    //     total +=newCart.price;
    // }
    //     // const TotalReducer = (previous, teachercart)=>previous+teachercart.sellary;
        // const total = teachercart.reduce(TotalReducer,0);


    //  let total = 0;
    // for (const teacher of teachercart){
    //    total = total + teacher.price;

    
    return (
        <div>
            <h4>Teacher added</h4>
            <h5>total:{props.length}</h5> 
            <h5>total cost:</h5>
        </div>

    );
};

export default Cartnew;