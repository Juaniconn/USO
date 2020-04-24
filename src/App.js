import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main_Home from './components/main/Main_Home'
import Regitser_Home from './components/register/Main_Home'
import Restaurant_Home from './components/restaurants_results/Main_Home'
import Restaurant_Selected from './components/restaurant_selected/Main_Home'
import Food_Home from './components/food_results/Main_Home'
import Checkout_Home from './components/checkout/Main_Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/USO" component={Main_Home} />
        <Route path="/Foods" component={Food_Home} />
        <Route exact path="/Restaurants" component={Restaurant_Home} />
        <Route path="/Restaurants/FlorDeCordoba" component={() => <Restaurant_Selected state={`a`}/>} />
        <Route path="/Restaurants/Taquitos" component={() => <Restaurant_Selected state={`b`}/>} />
        <Route path="/Restaurants/Cafeteria" component={() => <Restaurant_Selected state={`c`}/>} />
        <Route path="/Restaurants/Limon&Chia" component={() => <Restaurant_Selected state={`d`}/>} />
        <Route path="/Register" component={Regitser_Home} />
        <Route path="/Checkout" component={Checkout_Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
