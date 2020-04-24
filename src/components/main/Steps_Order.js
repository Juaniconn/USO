import React from 'react';

function Steps_Order(){
    return (
        <section className="steps_order">
            <div className="container">
                <h2>Easy 3 Step Order</h2>
                <div className="steps_wrapper">
                    <div className="steps_item">
                        <i className="icon-shop"></i>
                        <h3>Escoge un restaurante</h3>
                        <p>Hay restaurantes para varios tipos de apetitos, elige sabiamente!</p>
                    </div>
                    <div className="steps_item">
                        <i className="icon-fastfood"></i>
                        <h3>Escoge tu comida favorita</h3>
                        <p>Cada tipo de comida significa algo muy importante en tu dia, elige en una gran variead para llenar tu apetito</p>
                    </div>
                    <div className="steps_item">
                        <i className="icon-delivery_dining"></i>
                        <h3>Recoge tu comida</h3>
                        <p>A disfrutar. Provecho!</p>
                    </div>
                </div>
                <p>El pago puede ser por tarjeta o en efectivo</p>
            </div>
        </section>
    )
}


export default Steps_Order