import React from 'react'
import { Grid, Image, Card, Rating } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import orderActions from "../redux/actions"

// const onClick = (e) => {
//     console.log()
// }
const API_KEY = process.env.REACT_APP_GOOGLE_KEY

const Places = (c) => {
    const place = useSelector(state=> state.place)
    const userId = useSelector(state => state.login.id)
    // let URL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${c.c.reference}&key=${API_KEY}`
    // let photo = (c.c.photos[0].photo_reference)
    let ifPhoto = (c.c.photos? c.c.photos[0].photo_reference : "CmRaAAAAhITrIBjd8kRzu0ahi_XZAb32Skza-3DgpwLPabXm5iVZa26xPBdHcC2Keip0bpuUimsoG0wP_aECeM4wE8kc55Ebvjisca6bgsjh_OOjRtrjQRdDzVcpyEMPAub8AhcIEhBH40_RFwrYLiHhzyz-xKAGGhQAKLLb3VR7Hd9qSWV2H4O90Suxzg")
    let ifOpen = (c.c.opening_hours? c.c.opening_hours['open_now']? 'Open':'Closed' : '')
    // console.log(c.c.photos[0].photo_reference)
    // console.log(API_KEY)
    const dispatch = useDispatch()

    const restObj = c.c

    const onClick =() =>{
        // console.log(e.target)
        // console.log(c.c)
        dispatch(orderActions.addPlaceToProfile(restObj, userId))
    }
    // console.log(c.onClick())
    // console.log(c)
    return (
        // <div>
        //     <h3>{c.c.name}</h3>
        //     <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photo}&key=${API_KEY}`}/>
        //     {/* <h2>{c.c.photos}</h2> */}
        // </div>

        
        
        <Grid.Column>
            <Card onClick={onClick} >
                <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${ifPhoto}&key=${API_KEY}`}/>
                <Card.Content>
                    <Card.Header>{c.c.name}</Card.Header>
                    <Card.Meta>{ifOpen}</Card.Meta>
                    <Card.Description>
                        {/* {c.c.types} */}
                    {/* {AddShoppingCartIcon} */}
                    </Card.Description>
                </Card.Content>
                    <Card.Content extra>
                    {/* <a>
                        <Icon name='user' />
                        10 Friends
                    </a> */}
                        <Rating icon='star' defaultRating={c.c.rating} maxRating={5} />
            
                    </Card.Content>
            </Card>            
        </Grid.Column>
    )
}




export default Places

/////////////////////////////////////////

