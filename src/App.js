import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { connect } from "react-redux";

const root = document.documentElement;
function App({ currentUser }) {
 
  

  return (
    <div className="app">
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path='/' render={() => currentUser ? (<Redirect to='/profile' />) : (<Login />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({currentUser}) => ({
  currentUser
})



export default connect(mapStateToProps)(App);
