import React from 'react';

function Steps_Order(){
    return (
        <section className="steps_order">
            <div className="container">
                <h2>Easy 3 Step Order</h2>
                <div className="steps_wrapper">
                    <div className="steps_item">
                        <i className="icon-shop"></i>
                        <h3>Choose a restaurant</h3>
                        <p>We've got your covered with menus from over 345 delivery restaurants online.</p>
                    </div>
                    <div className="steps_item">
                        <i className="icon-fastfood"></i>
                        <h3>Choose a tasty dish</h3>
                        <p>We've got your covered with menus from over 345 delivery restaurants online.</p>
                    </div>
                    <div className="steps_item">
                        <i className="icon-delivery_dining"></i>
                        <h3>Take out</h3>
                        <p>We've got your covered with menus from over 345 delivery restaurants online.</p>
                    </div>
                </div>
                <p>Pay by Cash, Card or Paypal</p>
            </div>
        </section>
    )
}


export default Steps_Order