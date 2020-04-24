import React, { Component, useState} from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    render(){
        const pushHistory = (url) => {
            this.props.history.push(`/${url}`)
            this.setState({open: false})
        }
        return(
            <header className="header">
                <div className="container">
                    <h1 className="header_title" onClick={() => this.props.history.push("/USO")}><span style={{color: '#FF3300'}}>U</span>SO</h1>
                    <ul className={`header_nav ${!this.state.open ? `hide` : `show`}`}>
                        <li onClick={() => pushHistory('USO')}>Home</li>
                        <li onClick={() => pushHistory('Foods')}>Food</li>
                        <li onClick={() => pushHistory('Restaurants')}>Restaurant</li>
                        <span onClick={() => this.setState({open: false})}>X</span>
                    </ul>
                    <i className="icon-menu" onClick={() => this.setState({open: true})}></i>
                </div>
            </header>
        )
    }
}

export default withRouter(Header)