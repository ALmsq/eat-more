import React, { useEffect, useState } from 'react'
import Pizza from './Pizza'


//routing
import{ Route, Switch } from 'react-router'
import NavBar from './components/NavBar'
//
import Login from './components/Login'
import Signup from './components/Signup'

import HomePage from './components/HomePage'
import StartPage from './components/StartPage'
import Profile from './components/Profile'
import actions from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'

import {connect} from 'react-redux'


// let allPlaces = actions.allPlaces
// let getPlace = actions.getPlace
// class App extends Component {
  const App = () => {
    
    // const dispatch = useDispatch()
    
    // useEffect(() => {
    //   dispatch(allPlaces())
    // },
    // [dispatch]
    // ) 

    

    const state = useSelector(state => {
      return{
        place: state.place,
        query: state.query,
        placeID: state.login.restaurants
        
        // encodedPlace: state.encodedPlace
      }
    })
    
    const dispatch = useDispatch()
    
    console.log(state.login)
    useEffect(() => {
      if (localStorage.token) {
        dispatch(actions.persistUser());
        
      }
      
      dispatch(actions.getPlace(state.query))
      
      // dispatch(actions.getQuery())
      console.log(state.query)
    }, [state.query])
    
    // console.log(localStorage)
    return (
      <div>
        
        
        
        <Switch>
          <Route path='/login' render={() => <Login/>}/>
          <Route path='/signup' render={() => <Signup/>}/>
          <Route path='/home' render={() => <HomePage/>}/>
          <Route path='/profile' render={() => <Profile/>}/>
          <Route path='/' render={() => <StartPage />}/>
        </Switch>

        {/* <h1> hello from App! </h1> */}
        
        
      </div>
    )
  }

export default App
