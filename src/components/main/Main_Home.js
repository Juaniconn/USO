import React, {Component} from 'react';
import Header from './Header'
import Hero from './Hero'
import FeatureFood from './Feature_Foods'
import StepsOrder from './Steps_Order'
import FeatureResturants from './Feature_Restaurants'
import Footer from './Footer'

const URL = ``
class Main_Home extends Component{
    constructor(props) {
        super(props)
        this.state = { tiendas: [] }
    }
    
    componentWillMount() {
    fetch(`${URL}`)
        .then((response) => {
        return response.json()
        })
        .then((tiendas) => {
        this.setState({ tiendas: tiendas })
        })
    }
    render(){
        return (
            <div className="App">
                <Header/>
                <Hero/>
                <FeatureFood/>
                <StepsOrder/>
                <FeatureResturants/>
                <Footer/>
            </div>
        )
    }
}


export default Main_Home