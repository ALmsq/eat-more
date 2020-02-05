// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import userActions from '../redux/actions';
// import { useHistory } from "react-router-dom"

// const Login = props => {
//   // initializing dispatch
//   const dispatch = useDispatch();
//   // Setting up local state using the useState hook
//   const [loginForm, setLoginForm] = useState({
//     username: '',
//     password: ''
//   });

//   let history = useHistory();
//   // controlled form functions
//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(userActions.loginUserToDB(loginForm));
//     history.push("/home");
//   };

//   const handleChange = e =>
//     setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

//   // Destructuring keys from our local state to use in the form
//   const { username, password } = loginForm;

//   console.log(props)

//   // Component code
//   return (
//       console.log(loginForm),
//     <form onSubmit={handleSubmit}>
//       <h1>Login Page</h1>
//       <input
//         type="text"
//         name="username"
//         value={username}
//         onChange={handleChange}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={handleChange}
//         placeholder="Password"
//       />
//       <input type="submit" />
//     </form>
//   );
// };

// export default Login;

/////////////////////

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom'


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?restaurants,food)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = props => {
  const classes = useStyles();

  //  initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  let history = useHistory();
  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    history.push("/");
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm;



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="username"
              autoComplete="login"

              
              value={username}
              onChange={handleChange}

              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

              
              value={password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to='/signup' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default Login
