import React from 'react'
import '../index.css'
import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Input } from 'semantic-ui-react'
import Pizza from '../Pizza'
/* global google */


import { connect, useSelector } from 'react-redux'
import actions from '../redux/actions'

/////////////////////////////////////////////////

const API_KEY = process.env.REACT_APP_GOOGLE_KEY
class StartPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          place: '',
          encodedPlace: ''
        };

      }
        // state={
        //     places: ''
        // }
    
      handleChange = (place) => {
        this.setState({ 
          place
        });
        // this.setState({
        //     [place.target.name]: place.target.value
        // })
        console.log(place)
      };
      
    
      handleSelect = (place, encodedPlace) => {
        // geocodeByplace(place)
            // console.log(place)
            this.setState({
                place: place,
                encodedPlace: place
            })
            // console.log(this.state)
            // this.setState({
            //     redirect: true,
            //     place: place
            // })
            // console.log(this.state)
            
        //   .then(results => getLatLng(results[0]))
        //   .then(latLng => console.log('Success', latLng))
        //   .catch(error => console.error('Error', error));
      };

      handleSubmit = (evt) => {
          evt.preventDefault()
          // console.log(this.state.place)
          let uri = this.state.place
          const uri2 = this.state.encodedPlace
          const encoded = encodeURI(uri).replace(/,/g, '')
          const encoded2 = encodeURI(uri2).replace(/,/g, '')
          // console.log(encoded2)
          
          this.setState({
            redirect: true,
            encodedPlace: encoded2
          }
          
          // }, () => {
          //   this.props.addPlace(this.state)
          // }
          
          )
          // console.log(this.props.addPlace(this.state))
          // console.log(this.props.getQuery(this.state.encodedPlace))
          // this.props.getQuery(this.state['encodedPlace'])
          // console.log(this.state['encodedPlace'])
          


          // this.props.addPlace(this.state.place)
          

          // console.log(this.props)
          // console.log(this.props.addPlace(this.state))
        //   this.props.addPlace(this.state)
        
      }

    
      render() {
        // console.log(this.props.fetchQuery(this.state.encodedPlace))
        // console.log(this.props.getQuery(this.state.encodedPlace))
        // console.log(this.props.fetchPlace(this.state.encodedPlace))
        // this.props.fetchPlace(this.state.encodedPlace)
        this.props.getQuery(this.state.encodedPlace)
        this.props.fetchQuery(this.state.encodedPlace)
        // console.log(this.props)
        // console.log(this.state.encodedPlace)
        // console.log(this.state)
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
          }
        return (
            <div>
              <Pizza/>
            <form className='image' onSubmit={this.handleSubmit}>
          <PlacesAutocomplete
            value={this.state.place}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
              
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className='image'>
                <Input action='search' 
                  {...getInputProps({
                    placeholder: 'Search Location ...',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          {/* <input type='submit' value='submit'/> */}
          </form>
          </div>
        );
      }
      
}
// let connectFunc = connect(null, { addPlace })(StartPage)
let googleApi = GoogleApiWrapper({apiKey: API_KEY})(StartPage)
let addPlace = actions.addPlace
let getQuery = actions.getQuery
let fetchQuery = actions.fetchQuery
let fetchPlace = actions.fetchPlace
// export default StartPage
export default connect(null, {addPlace, getQuery, fetchQuery, fetchPlace})(googleApi) ;


/////////////////////////////////////


// const addPlace = actions.addPlace

// // class StartPage extends React.Component {
//   const StartPage = () => {
    
//     const [place, setPlace] = React.useState({
//       place: ''
//     })

//     // constructor(props) {
//     //     super(props);
//     //     this.state = { place: '' };

//     //   }
//         // state={
//         //     places: ''
//         // }
    
//      const handleChange = place => {
            
//         setPlace({ 
//           ...place,
          
//         });
//         // this.setState({
//         //     [place.target.name]: place.target.value
//         // })
//       };
    
//       const handleSelect = place => {
//         // geocodeByplace(place)
//             // console.log(place)
//             setPlace({
//                 ...place,
//                 place: place
//             })
//             // this.setState({
//             //     redirect: true,
//             //     place: place
//             // })
//             // console.log(this.state)
            
//         //   .then(results => getLatLng(results[0]))
//         //   .then(latLng => console.log('Success', latLng))
//         //   .catch(error => console.error('Error', error));
//       };

//      const handleSubmit = (evt) => {
//           evt.preventDefault()
//           console.log(place)
//           console.log()
//           // setPlace({
//           //   redirect: true
//           // })
//           // this.props.addPlace(this.state.place)
          
//           let uri = place
//           let encoded = encodeURI(uri)
//           console.log(encoded.replace(/,/g, ''))
//           // console.log(this.props)
//           // console.log(this.props.addPlace(this.state))
//         //   this.props.addPlace(this.state)
        
//       }

    
      
//         if (place.redirect) {
//             return <Redirect push to="/home" />;
//           }
//         return (
//             <form className='image' onSubmit={handleSubmit}>
//           <PlacesAutocomplete
//             value={place}
//             onChange={handleChange}
//             onSelect={handleSelect}
//           >
              
//             {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//               <div className='image'>
//                 <input
//                   {...getInputProps({
//                     placeholder: 'Search Location ....',
//                     className: 'location-search-input',
//                   })}
//                 />
//                 <div className="autocomplete-dropdown-container">
//                   {loading && <div>Loading...</div>}
//                   {suggestions.map(suggestion => {
//                     const className = suggestion.active
//                       ? 'suggestion-item--active'
//                       : 'suggestion-item';
//                     // inline style for demonstration purpose
//                     const style = suggestion.active
//                       ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                       : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                     return (
                        
//                       <div
//                         {...getSuggestionItemProps(suggestion, {
//                           className,
//                           style,
//                         })}
//                       >
//                         <span>{suggestion.description}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </PlacesAutocomplete>
//           <input type='submit' value='submit'/>
//           </form>
//         );
      
      
// }

// // let connectFunc = connect(null, { addPlace })(StartPage)
// let googleApi = GoogleApiWrapper({apiKey: })(StartPage)

// // export default connect(null, {addPlace})(googleApi) ;
// export default googleApi


