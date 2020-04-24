import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Feature_Food extends Component{
    render(props){

        const options = [
            {
                title: 'Title (Name of the food)',
                description: 'Description A',
                image: 'a',
                price: "$99.99"
            },
            {
                title: 'Title (Name of the food)',
                description: 'Description B',
                image: 'b',
                price: "$99.99"
            },
            {
                title: 'Title (Name of the food)',
                description: 'Description C',
                image: 'c',
                price: "$99.99"
            }

        ];

        return (
            <section className="feature_food">
                <div className="container">
                    <h2>¡Lo mas popular en tu institución!</h2>
                    <p>La mejor manera de obtener tu comida favorita</p>
                    <div className="food_restaurants_wrapper">
                        {options.map(food_menu =>{
                            return (
                                <div className="food_restaurants_item">
                                    <div className={`food_restaurant_img ${food_menu.image}`}></div>
                                    <div className="food_restaurant_content">
                                        <h3> {food_menu.title} </h3>
                                        <p> {food_menu.description} </p>
                                        <span> {food_menu.price} </span>
                                        <button>Order Now</button>
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


export default withRouter(Feature_Food)