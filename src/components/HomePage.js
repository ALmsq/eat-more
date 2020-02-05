import React from 'react'
import Places from './Place'
import Profile from './Profile'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'
import Pizza from '../Pizza'


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
        console.log(places)
        console.log(query)

        const text = username ? (
            <h1>{username} is currently logged in</h1>
          ) : (
            <h1>Nobody is logged in</h1>
          );
          

        const generateCards = () => {
            return places.map(c => <Places c={c} key={c.id} />);
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
            <Grid columns={3} divided> 
                <Grid.Row>
                        {generateCards()}
                        {/* <div>{text}</div> */}
                        {/* {generateProfileCards()} */}
                </Grid.Row>
            </Grid>
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