import styled from 'styled-components'
// box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08); (from StyledCards)

export const Title = styled.h2`
  color: #000000;
  font-weight: 300;
`
export const FoodImg = styled.img`
object-fit: cover;
width: 100%;
height: 200px;
margin: auto;
`
export const StyledCards = styled.li`
overflow: hidden;
padding: 0 0 32px;
margin-bottom: 2rem;
width: 25rem;
font-family: Quicksand, arial, sans-serif;

border-radius: 5px;
`
export const SCards = styled.ul`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 2rem;
    margin-right: 2rem;
`
export const RatingBG = styled.mark`
background-color: #F6F6F6;
padding: 4px 8px 0px 8px
display: inline-block
margin-top: 8px
font-size: 14px
`
export const StyleDiv = styled.div`
margin-top: 8px
`

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`
const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`
