import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Restaurant_Selected extends Component{
    render(props){
        return (
            <section className="restaurant_selected">
                <div className="container">
                    <div className="restaurant_sel_wrapper">
                        <div className="restaurant_sel_img"></div>
                        <div className="restaurant_sel_content">
                            <h2>Title</h2>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default withRouter(Restaurant_Selected)