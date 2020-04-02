import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component{
    render(props){
        return(
            <header className="header">
                <div className="container">
                    <h1 className="header_title" onClick={() => this.props.history.push("/USO")}><span style={{color: '#FF3300'}}>U</span>SO</h1>
                    <ul className="header_nav">
                        <li onClick={() => this.props.history.push("/USO")}>Home</li>
                        <li onClick={() => this.props.history.push("/Foods")}>Food</li>
                        <li onClick={() => this.props.history.push("/Restaurants")}>Restaurant</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default withRouter(Header)