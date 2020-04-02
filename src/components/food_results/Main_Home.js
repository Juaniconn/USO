import React from 'react';
import Header from '../main/Header'
import FoodResults from '../food_results/Food_Results'
import StepsOrder from '../main/Steps_Order'
import Footer from '../main/Footer'

function Main_Home(){
    return (
        <div className="App">
            <Header/>
            <StepsOrder/>
            <FoodResults/>
            <Footer/>
        </div>
    )
}


export default Main_Home