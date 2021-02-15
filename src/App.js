import  React, {useEffect, useState} from 'react'
import {Header} from './components';
import { Home } from './pages/Home';
import {Basket} from './pages/Basket'
import {Route} from 'react-router-dom'
import axios from 'axios'
import store from './helpers/store'
import {setNameToys} from './actions'
import { useDispatch} from 'react-redux'

 const App = () => {
   const dispatch = useDispatch();
   
  useEffect(() => {
    axios.get('http://localhost:3333/toys').then(({data}) => {
      dispatch(setNameToys(data))
    })
  }, [])

  return(
    <div className="wrapper">
      <Header />
      <div className="content">
          <Route path='/' component={Home} exact/>
          <Route path='/basket' component={Basket} exact/>
        </div>
    </div>

  );
}

export default App;
