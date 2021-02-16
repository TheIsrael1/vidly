import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/common/protectedRoute';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm'
import Logout from './components/logout';
import auth from './services/authService'
import RegisterForm from './components/registerForm';
import './App.css';



class App extends Component {
  state = {

  }

  componentDidMount(){
  const user = auth.getCurrentUser();
  this.setState({user});
  }

  render() {

    const {user} = this.state;
    return (
      <main className="container">
        <React.Fragment>
          <ToastContainer />
          <NavBar user={user}/>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute 
            path="/movies/:id" component={MovieForm}/>
            <Route path="/movies" render ={props => <Movies {...props} user={this.state.user}/>}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from='/' exact to='/movies' />
            <Redirect to='not-found' />
          </Switch>
        </React.Fragment>
        </ main>


    );
  }
}

export default App;
