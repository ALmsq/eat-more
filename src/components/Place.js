import React from 'react'
import { Grid, Image, Card, Rating } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import orderActions from "../redux/actions"
import styled from 'styled-components'
import { Title, FoodImg, StyledCards, SCards, RatingBG, StyleDiv, SSkeletonLine } from '../Style.js'


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

    const types = c.c.types
    console.log(c.c === undefined)

    function strToSymbol(num){
        return '$'.repeat(num)
      }

      function filterUnderscore(arr){
        let newArr = []
        let newWord = ''
      arr.forEach((word)=>{
        if(word.includes('_')){
         let newWord = word.replace('_', ' ')
        //  console.log(newWord)
         newArr.push(newWord)
        }
          if(!word.includes('_')){
            newArr.push(word)
          }
        // return arr
        
      })
    return newArr
      }

      function restaurantTypes(types){
        let arrToFilter = ["food", "point_of_interest", "establishment"]
        // console.log(types.join(' '))
        // let joinedTypes = types.join(' ')
        let newTypes = types.filter(words => !arrToFilter.includes(words))
            // console.log(newTypes)
            // console.log(filterUnderscore(newTypes).join(' • '))
            return filterUnderscore(newTypes).join(' • ')
        // return newTypes.join(' • ')
      }


    // console.log(c.onClick())
    // console.log(c)
    return (
        // <div>
        //     <h3>{c.c.name}</h3>
        //     <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photo}&key=${API_KEY}`}/>
        //     {/* <h2>{c.c.photos}</h2> */}
        // </div>

        
        
        // <Grid.Column>
        //     <Card onClick={onClick} >
        //         <Image src={`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${ifPhoto}&key=${API_KEY}`}/>
        //         <Card.Content>
        //             <Card.Header>{c.c.name}</Card.Header>
        //             <Card.Meta>{ifOpen}</Card.Meta>
        //             <Card.Description>
        //                 {/* {c.c.types} */}
        //             {/* {AddShoppingCartIcon} */}
        //             </Card.Description>
        //         </Card.Content>
        //             <Card.Content extra>
        //             {/* <a>
        //                 <Icon name='user' />
        //                 10 Friends
        //             </a> */}
        //                 <Rating icon='star' defaultRating={c.c.rating} maxRating={5} />
            
        //             </Card.Content>
        //     </Card>            
        // </Grid.Column>
            
                <SCards>
            <StyledCards>
                <div>
                    <FoodImg src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${ifPhoto}&key=${API_KEY}`} alt='food'/>
                </div>
                <div>
                    <Title>
                        {c.c.name}
                    </Title>
                </div>
            {/* <div>
                {strToSymbol(c.c.price_level)}
            </div> */}
            <StyleDiv>
                {/* {c.c.types} */}
                {(strToSymbol(c.c.price_level)? strToSymbol(c.c.price_level) + ' • ' : '')+ restaurantTypes(c.c.types)}
            </StyleDiv>
            <StyleDiv>
                <RatingBG>
                {c.c.rating} ⭐({c.c.user_ratings_total < 500 ? c.c.user_ratings_total: '500+'})
                </RatingBG>
            </StyleDiv>

            </StyledCards>
            </SCards>
            
        
    )
}




export default Places

/////////////////////////////////////////

