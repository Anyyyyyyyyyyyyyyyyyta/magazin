import  React, {useEffect, useState} from 'react'
import {Header} from './components';
import { Home } from './pages/Home';
import {Basket} from './pages/Basket'
import {EmptyBusket} from './pages/Empty-Basket'
import {Route} from 'react-router-dom'

 const App = () => {

  return(
    <div className="wrapper">
      <Header />
      <div className="content">
          <Route path='/' component={Home} exact/>
          <Route path='/basket' component={Basket} exact/>
          <Route path='/empty-basket' component={EmptyBusket} exact/>
        </div>
    </div>

  );
}

export default App;
