import React from 'react';
import Header from '../main/Header'
import Hero from '../main/Hero'
import FeatureFood from '../main/Feature_Foods'
import StepsOrder from '../main/Steps_Order'
import FeatureResturants from '../main/Feature_Restaurants'
import Footer from '../main/Footer'

function Main_Home(){
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


export default Main_Home