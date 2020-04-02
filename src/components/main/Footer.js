import React , {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Footer extends Component{
    render(props){

        const options = [
            {
                title: 'How it works',
                link: '/Foods',
                subItem: ["Enter your location","Choose restaurant","Pay via credit card", "Wait & take out"]
            },
            {
                title: 'Pages',
                link: '/Restaurants',
                subItem: ["Foods","Restaurants"]
            }

        ];

        return (
            <section className="footer">
                <div className="container">
                    <div className="footer_wrapper">
                        <div className="footer_logo">
                            <h2><span style={{color: '#FF3300'}} >U</span>SO</h2>
                            <p>Order & Take-Out</p>
                        </div>
                        <div className="footer_links">
                            {options.map(menu => {
                                    return(
                                        <React.Fragment>
                                        <ul>
                                            <li className="footer_links_title">{menu.title}</li>
                                            {menu.subItem.map(links => {
                                                return(
                                                    <li>{links}</li>
                                                )
                                            })}
                                        </ul>
                                        </React.Fragment>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="footer_payment">
                        <p>Payment Options</p>
                        <div className="footer_payment_card">
                            <i className="icon-cc-visa"></i>     
                            <i className="icon-cc-mastercard"></i>
                        </div>     
                    </div>
                    <div className="copyright">
                        <p>© Copyright USO 2019</p>
                    </div>
                </div>
            </section>

        )
    }
}

export default withRouter(Footer)