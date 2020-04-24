import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Hero extends Component{
    render(props){
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero_wrapper">
                        <h1>Order & Take-Out</h1>
                        <p>Find restaurants, specials, and coupons for free</p>
                        <div className="hero_cta">
                            <form action="">
                                <input className="form_search" placeholder="I would like to eat.." type="text"/>
                                <input onClick={() => this.props.history.push("/Foods")} className="form_submit" type="submit" value="Search Food"/>
                            </form>
                        </div>
                        <div className="hero_steps">
                            <div className="hero_steps_item">
                                <i className="icon-shop"></i>
                                <p><span style={{color:"#FF3300"}}>1)</span> Escoge un restaurante</p>
                            </div>
                            <div className="hero_steps_item">
                                <i className="icon-fastfood"></i>
                                <p><span style={{color:"#FF3300"}}>2)</span> Elige tu comida favorita</p>
                            </div>
                            <div className="hero_steps_item">
                                <i className="icon-delivery_dining"></i>
                                <p><span style={{color:"#FF3300"}}>3)</span> Recoge tu comida</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default withRouter(Hero)