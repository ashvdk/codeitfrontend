import React, { useEffect } from 'react';
import './App.css';
import Login from './Components/Login/Login'
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import history from './history'
import Signup from './Components/Signup/Signup';
import Navigationbar from './Components/Layout/Navigationbar/Navigationbar'
import Dashboard from './Components/Layout/Dashboard/Dashboard'
import Postwebsite from './Components/Layout/Postwebsite.js/Postwebsite';
import Profile from './Components/Layout/Profile/Profile';
import Testsidebar from './Components/Layout/Postwebsite.js/TestSidebar/Testsidebar'
import Create from './Components/Layout/Postwebsite.js/Create/Create';
import Search from './Components/Layout/Search/Search'

function App() {
  return (
    <div style={{height: '100vh',width:'100vw'}}>
      <Router history={history}>
        <Switch>

          <Route exact path="/" render={(props)=> localStorage.getItem("token") ? <Redirect to="/dashboard"/> : <Login />}/>
          
          <Route exact path="/signup" component={Signup}/>
          <div className="displayProperty">
            <Navigationbar />

            <Route path="/dashboard" render={(props)=> localStorage.getItem("token") ? <Dashboard {...props}/> : <Redirect to="/"/>}/>
            
            
            <Route exact path="/newpost" render={(props)=> localStorage.getItem("token") ? <Postwebsite {...props}/> : <Redirect to="/"/>}/>
            <Route exact path="/newpost/create" render={(props)=> localStorage.getItem("token") ? <Create initialValues={{"answer":"option1"}} {...props}/> : <Redirect to="/"/>}/>
          
            <Route exact path="/profile" render={(props)=> localStorage.getItem("token") ? <Profile {...props}/> : <Redirect to="/"/>}/>
            <Route exact path="/search" render={(props)=> localStorage.getItem("token") ? <Search {...props}/> : <Redirect to="/"/>}/>
          </div>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
