import React from 'react';
import Header from '../main/Header'
import StepsOrder from '../main/Steps_Order'
import FeatureResturants from '../main/Feature_Restaurants'
import Footer from '../main/Footer'

function Main_Home(){
    return (
        <div className="App">
            <Header/>
            <StepsOrder/>
            <FeatureResturants/>
            <Footer/>
        </div>
    )
}


export default Main_Home