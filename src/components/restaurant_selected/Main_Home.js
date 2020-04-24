import React from 'react';
import Header from '../main/Header'
import Restaurant_Selected from './Restaurant_Selected'
import Food_Results from '../food_results/Food_Results'
import Footer from '../main/Footer'

function Main_Home(props){
    return (
        <div className="App">
            <Header/>
            <Restaurant_Selected state={props.state}/>
            <Food_Results/>
            <Footer/>
        </div>
    )
}


export default Main_Home