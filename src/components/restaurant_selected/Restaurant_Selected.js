import React , {Component} from 'react';
import { withRouter, Switch } from 'react-router-dom'

const Restaurant_Selected = (props) => {
    const options = [
        {
            title: 'Limon y Chia',
            description: 'Nuestro objetivo primordial es estar presente en escuelas y universidades porque después de la familia lo que queremos es apoyar la educación a través de una alimentación inteligente.'
        },
        {
            title: 'Cafeteria',
            description: 'El Sistema de Cafeterías UAG opera bajo un programa de alimentación saludable que contribuye al cuidado de nuestros comensales a través de una dieta sana y balanceada.'
        },
        {
            title: 'Taquitos',
            description: 'Un lugar donde encuentras tu comida favorita al instante, no esperes largas filas!'
        },
        {
            title: 'Flor de Cordoba',
            description: 'Somos un lugar de encuentro en el barrio, parte de la rutina diaria… y no hay nada que nos haga más felices. Ven a conocernos y lo comprobarás: somos mucho más que los cafés que elaboramos.'
        }

    ];

    const stateRestaurants = (index) => {
        switch (index) {
            case 'a':
                return(
                    <div className="restaurant_sel_content">
                        <h2>{options[3].title}</h2>
                        <p>{options[3].description}</p>
                    </div>
                )
                break;
            case 'b':
                return(
                    <div className="restaurant_sel_content">
                        <h2>{options[2].title}</h2>
                        <p>{options[2].description}</p>
                    </div>
                )
                break;
            case 'c':
                return(
                    <div className="restaurant_sel_content">
                        <h2>{options[2].title}</h2>
                        <p>{options[2].description}</p>
                    </div>
                )
                break;
            case 'd':
                return(
                    <div className="restaurant_sel_content">
                        <h2>{options[0].title}</h2>
                        <p>{options[0].description}</p>
                    </div>
                )
                break;
            default:
                break;
        }
    }

    return (
        <section className="restaurant_selected">
            <div className="container">
                <div className="restaurant_sel_wrapper">
                    <div className={`restaurant_sel_img ${props.state}`}></div>
                    {stateRestaurants(props.state)}
                </div>
            </div>
        </section>
    )
}


export default withRouter(Restaurant_Selected)