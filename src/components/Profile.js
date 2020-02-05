import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../redux/actions'
import Places from "./Place"
import Pizza from '../Pizza'

import { Grid, Image, Card, Rating } from 'semantic-ui-react'

const Profile = () => {

    const dispatch = useDispatch()
    
    const places = useSelector(state => state.place)
    const orders = useSelector(state => state.order)
    const [cards, setCards] = useState([])

    
    

    const username = useSelector(state => state.login.username)
    const restaurants = useSelector(state => state.login.restaurants)
    // console.log(restaurants)
    // console.log(username)
    const ifUser = username?username:'no one'
    const API_KEY=process.env.REACT_APP_GOOGLE_PLACES_KEY
    

    



    useEffect(() => {
        generateCards()
        }, [restaurants])


    const generateCards = () => {
        // console.log("hello", restaurants)
        let newInfoRest =[]
        restaurants.forEach(r => {
            fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${r.place_id}&key=${API_KEY}`)
            .then(r => r.json())
            .then((data) => { 
                // console.log(data.result)
                // setCards([...cards, data.result])
                newInfoRest = [...newInfoRest, data.result]
                setCards(newInfoRest)
            })
        });
    }
    

    const showCards = () => {
        
       return cards.map(card => {
        let ifPhoto = (card.photos? card.photos[0].photo_reference : "CmRaAAAAhITrIBjd8kRzu0ahi_XZAb32Skza-3DgpwLPabXm5iVZa26xPBdHcC2Keip0bpuUimsoG0wP_aECeM4wE8kc55Ebvjisca6bgsjh_OOjRtrjQRdDzVcpyEMPAub8AhcIEhBH40_RFwrYLiHhzyz-xKAGGhQAKLLb3VR7Hd9qSWV2H4O90Suxzg")
        let ifOpen = (card.opening_hours? card.opening_hours['open_now']? 'Open':'Closed' : '')
            // return <Places c={card} key={card.id} />
            console.log(card)
            // return<li>{card.name}</li>
            /////////////////////////////////////////////
            
            return(
            <Grid.Column>
                <Card>
                    <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${ifPhoto}&key=${API_KEY}`}/>
                    <Card.Content>
                        <Card.Header>{card.name}</Card.Header>
                        {/* <Card.Meta>{ifOpen}</Card.Meta> */}
                        <Card.Description>
                            like
                            {/* {card.types} */}
                        {/* {AddShoppingCartIcon} */}
                        </Card.Description>
                    </Card.Content>
                        <Card.Content extra>
                        {/* <a>
                            <Icon name='user' />
                            10 Friends
                        </a> */}
                            <Rating icon='star' defaultRating={card.rating} maxRating={5} />
                
                        </Card.Content>
                </Card>            
        </Grid.Column>
            )
        })
    }
    
    
    

    return (
        <div>
            <Pizza/>
            <Grid columns={3} divided>
                <Grid.Row>
                    <h1>{ifUser}</h1>
                    <ol>
                        {showCards()}
                    </ol>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Profile

