import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import { MemoryRouter as Router } from 'react-router';


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  
});
const useStyles2 = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);
export default function Types() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '0vh' }} />
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        Welcome to ClassFeed.
      </Typography>
      <Typography variant="h5" gutterBottom>
        A live class feed for students and professors.
      </Typography>
      <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#FFFDFD', height: '5vh' }} />
      </Container>
      <div>
      <Link to="/student" className=""> {/*fix link later to pop up login*/}
      <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Login to get started
      </BootstrapButton>
      </Link>
     
      </div>
    </div>
    </Container>
    </React.Fragment>
  );
}