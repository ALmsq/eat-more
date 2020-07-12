







////////////////////////LOGIN///////////////////////////////////

// API CONSTANTS

const BASE_URL = 'https://morning-island-37962.herokuapp.com';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions


const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

// Fetch

const newUserToDB = userObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.setItem('token', data.token);
      
    });
};

const deleteUserFromDB = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_USER_URL(userId), config).then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};

const loginUserToDB = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      if(data.error){
        console.log('errooor')
        alert('incorrect login')
      }
      dispatch(setUserAction(data.user));
      dispatch(getOrder(data.user.restaurants))
      localStorage.setItem('token', data.token);
    })
      .catch(err => console.log('error'))
};

const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(userInstance => {
      dispatch(setUserAction(userInstance));
    });
};

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};
////////////////////////////////////////////////////////////////


const API_KEY=process.env.REACT_APP_GOOGLE_PLACES_KEY
const QUERY = 'bronx'
const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+Brooklyn%20NY%20USA&rankby=prominence&
&key=${API_KEY}`

const getPlaceAction = place => ({
  type: 'GET_PLACE',
  payload: place
});

const addPlace = (newPlace) => {
  return {
    type: "ADD_PLACE",
    payload: newPlace
  }
}
const getQuery = (query) => ({
  type: 'GET_QUERY',
  payload: query
})



const getPlace = (args) => dispatch => {
  fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+${args}&rankby=prominence&
  &key=${API_KEY}`)
    .then(r => r.json())
    .then((placeArr) => { dispatch(getPlaceAction(placeArr.results))
    })
}



const fetchQuery = (query) => ({
  type: 'FETCH_QUERY',
  payload: query
})

  // function fetchPlace(query){
  //   return dispatch => {
  //     fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+${query}&
  //   &key=${API_KEY}`)
  //     .then(r => r.json())
  //     .then((placeArr) => { dispatch(getPlaceAction(placeArr.results))
  //     })
  //   }
  // }

  /////////////////////////order/////////////////////
  
  const RESTAURANT_URL = BASE_URL + '/restaurants';

  const SPECIFIC_RESTAURANT_URL = id => RESTAURANT_URL + '/' + id;

  const addOrder = (order) => ({
    type: 'ADD_ORDER',
    payload: order
  })
  const getOrder = (order) => ({
    type: 'GET_ORDER',
    payload: order
  })

  const getRestaurants = (placeID) => dispatch => {
    fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&key=${API_KEY}`)
    .then(r => r.json())
    .then((data) => { dispatch(addOrder(data.results[0]))
    })
  }

  
  



  const addPlaceToProfile = (restaurantObj, userID) => dispatch => {
    fetch(RESTAURANT_URL, {
      method:'POST',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: userID,
      name: restaurantObj.name,
      place_id: restaurantObj.place_id
      })
    })
      .then(r => r.json())
      .then(savedRest => {
        console.log(savedRest)
        dispatch(addOrder(savedRest))
      })
  }






export default {
  //FETCH//
  addPlaceToProfile,
  getRestaurants,
  getPlace,
  addPlace,
  getQuery,
  // fetchPlace,
  fetchQuery,
  //LOGIN///
  newUserToDB,
  deleteUserFromDB,
  loginUserToDB,
  persistUser,
  logoutUser
}
