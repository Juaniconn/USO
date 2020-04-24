import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Feature_Restaurants extends Component{
    render(props){

        const options = [
            {
                title: 'Limon y Chia',
                image: 'a',
                description: 'Nuestro objetivo primordial es estar presente en escuelas y universidades porque después de la familia lo que queremos es apoyar la educación a través de una alimentación inteligente.'
            },
            {
                title: 'Cafeteria',
                image: 'b',
                description: 'El Sistema de Cafeterías UAG opera bajo un programa de alimentación saludable que contribuye al cuidado de nuestros comensales a través de una dieta sana y balanceada.'
            },
            {
                title: 'Taquitos',
                image: 'c',
                description: 'Un lugar donde encuentras tu comida favorita al instante, no esperes largas filas!'
            },
            {
                title: 'Flor de Cordoba',
                image: 'd',
                description: 'Somos un lugar de encuentro en el barrio, parte de la rutina diaria… y no hay nada que nos haga más felices. Ven a conocernos y lo comprobarás: somos mucho más que los cafés que elaboramos.'
            }

        ];

        return (
            <section className="feature_restaurants">
                <div className="container">
                    <h2>Restaurantes</h2>
                    <div className="restaurants_wrapper">
                        {options.map(restaurant =>{
                            return (
                                <div className="restaurants_item">
                                    <div className={`restaurant_img ${restaurant.image}`}></div>
                                    <div className="restaurant_content">
                                        <h3> {restaurant.title} </h3>
                                        <p> {restaurant.description} </p>
                                        <button onClick={() => this.props.history.push("/Restaurants/Selected")} >See Restaurant</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}


export default withRouter(Feature_Restaurants)