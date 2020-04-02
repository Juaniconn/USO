import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Feature_Restaurants extends Component{
    render(props){

        const options = [
            {
                title: 'Title (Name of the food)',
                image: 'a',
                description: 'Description A'
            },
            {
                title: 'Title (Name of the food)',
                image: 'b',
                description: 'Description B'
            },
            {
                title: 'Title (Name of the food)',
                image: 'c',
                description: 'Description C'
            },
            {
                title: 'Title (Name of the food)',
                image: 'd',
                description: 'Description d'
            }

        ];

        return (
            <section className="feature_restaurants">
                <div className="container">
                    <h2>Restaunrants</h2>
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