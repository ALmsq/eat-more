// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import { fastfood } from 'react-icons/md'
import { IoIosBeer } from 'react-icons/io'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
// import '../index.css'
// import {Sticky} from 'semantic-ui-react'

// const Nav = styled.div`
//   background-color: #fff;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  
// `;
// const NavHeader = styled.div`
//   max-width: 1010px;
//   padding: 26px 20px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
  
// `;
// const NavLeft = styled.div`
//   width: 33.333%;
//   text-align: left;
// `;
// const NavCenter = styled.div`
//   width: 33.333%;
//   text-align: center;
// `;
// const Input = styled.input`
//   font-size: 16px;
//   border: solid 1px #dbdbdb;
//   border-radius: 3px;
//   color: #262626;
//   padding: 7px 33px;
//   border-radius: 3px;
//   color: #999;
//   cursor: text;
//   font-size: 14px;
//   font-weight: 300;
//   text-align: center;
//   background: #fafafa;
//   &:active,
//   &:focus {
//     text-align: left;
//   }
// `;
// const NavRight = styled.div`
//   width: 33.333%;
//   text-align: right;
//   svg {
//     margin-right: 20px;
//   }
// `;
// const Button = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;

// const RedButton = styled(Button) `
// color: red
// border-color: red
// `
// const StyledLink = styled(Link)`
// text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }

// `

// class NavBar extends Component {
    
//     render() {
//         return (
//           // <div>yo</div>
//           <Sticky>
//             <Nav>
//                 <NavHeader>
//                     <NavLeft>
//                     <div class="dropdown">
//                         <button class="dropbtn"> <IoIosBeer/> </button>
//                         <div class="dropdown-content">
                            
//                             <Link to='/home'>Home</Link>
//                             <a href="#">Profile</a>
//                             <a href="#">Past Orders</a>
//                         </div>
//                     </div>
//                     </NavLeft>
//                     <NavCenter>
//                         {/* <input type='text' placeholder='search'/> */}
//                         <StyledLink to='/startpage'> <h1>Food App</h1> </StyledLink>
//                     </NavCenter>
//                     <NavRight>
                        
//                         <RedButton> <Link to='/login'>Login</Link> </RedButton>
//                     </NavRight>
//                 </NavHeader>
//             </Nav>
//           </Sticky>
//         )
//     }
// }
// export default NavBar

///////////////////////////////////////////////////////
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
// import { useSelector } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../redux/actions.js';
import {Sticky} from 'semantic-ui-react'

import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

  

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const username = useSelector(state => state.login.username)
  const login = useSelector(state => state.login)
  console.log(login.username)
  const text = username ? (
    <h2>{username}</h2>
  ) : (
    null
  );

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  console.log(localStorage)

  const loggedIn = username? (
    <div>
      {/* <Link to={`profile/${login.username}`}> */}
      <Link to='/profile'>
        <IconButton>
          <AccountCircleIcon/>
        </IconButton>
        </Link>
        <Link to='/'>
          <Button variant="outlined" size="small" onClick={handleLogout}>
            Logout
          </Button>
        </Link>
        </div>
  ):(<div>
            
        <Link to='/login' >
          <Button variant="outlined" size="small" >
            Login
          </Button>
        </Link>
      </div>)
    



  console.log(username)

  return (
    
    // <Sticky>
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small"><IoIosBeer/></Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <div className='title'>
          
         <Link style={{ textDecoration: 'none', color: 'black' }} to='/startpage'> <LocalPizzaIcon/> FoodApp</Link>
         </div>
        </Typography>{text? text: ''}
        {/* {username ? 'yo': 'no'} */}
        {/* <IconButton>
          <AccountCircleIcon/>
        </IconButton>
        <Link to='/login'>
          <Button variant="outlined" size="small">
            Login
          </Button>
        </Link> */}
        {loggedIn}
      </Toolbar>
      
    </React.Fragment>
    // </Sticky>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
