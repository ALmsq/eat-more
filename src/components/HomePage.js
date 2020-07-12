import React, { useState } from 'react'
import Place from './Place'
import Profile from './Profile'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'
import Pizza from '../Pizza'
import '../HomePage.css'
import styled from 'styled-components'
import { SCards } from '../Style.js'


// class HomePage extends Component {
//     render() {
        
//         return (
//             <div>
//                 <h1>Featured Spots</h1>
//                 <Place/>
//             </div>
//         )
//     }
// }
    

const HomePage = () => {
        const username = useSelector(state => state.login.username)
        const places = useSelector(state => state.place)
        const query = useSelector(state => state.query)
        const newQuery = useSelector(state => state.newQuery)
        console.log(places)
        console.log(query)
        console.log(newQuery)

        const text = username ? (
            <h1>{username} is currently logged in</h1>
          ) : (
            <h1>Nobody is logged in</h1>
          );
          console.log(decodeURI(query))

          const decodedQuery = useState(decodeURI(newQuery))
          console.log(decodedQuery)
          
          
          localStorage.setItem('query', JSON.stringify(decodedQuery))
          const placeQuery = query ? (<h1>{decodeURI(query)}</h1>) : (<h1>{query}</h1>)
          

        const generateCards = () => {
            return places.map(c => <Place c={c} key={c.id} />);
          };

        const generateProfileCards = () => {
            return places.map(c => <Profile c={c} key={c.id} />);
          };

        return(
            // <div>
            //     <h1>Featured Spots</h1>
            //     {generateCards()}

            // </div>
            <div>
            <Pizza/>
            <h1 style={{textAlign: 'center'}}>Restaurants near {placeQuery}</h1>
            <div class = 'home-page'>
              <SCards>
            {/* <Grid columns={3} divided> 
                <Grid.Row>
                        {generateCards()}
                        {/* <div>{text}</div> */}
                        {/* {generateProfileCards()} */}
                {/* </Grid.Row>
            </Grid> */} 
              {generateCards()}
              </SCards>
            </div>
            </div>
        )
}

// const mapStateToProps = state => {
//     return {
//         place: state.allPlaces.place
//     }
// }



// export default connect(mapStateToProps)(HomePage)
export default HomePage