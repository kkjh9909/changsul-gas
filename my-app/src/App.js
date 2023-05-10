import React, { Component } from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import FlotChart from './pages/FlotChart';
// import MorrisChart from './pages/MorrisChart';
import Tables from './pages/Tables';
import Forms from './pages/Forms';
import PanelWeels from './pages/PanelWeels';
import Buttons from './pages/Buttons';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Grid from './pages/Grid';
import Blank from './pages/Blank';
import Login from './pages/Login';
import {Post} from "./pages/Post";
import {Write} from "./pages/Write";
import {Karrot} from "./pages/karrot";
import {GroupBuying} from "./pages/GroupBuying";
import {LifeHack} from "./pages/LifeHack";
import {ProductReview} from "./pages/ProductReview";
import {Government} from "./pages/Government";

// const AuthRoute = ({component: Component, ...rest}) => {
//   <Route {...rest} render={props => {
//     true ? (<Component {...props} />) : 
//     (<Redirect to={{pathName: '/login'}} />)
//   }}/>
// }

let isLoggedIn = true;

export function onLogout() {
  isLoggedIn = false;
}
export function onLogin() {
  isLoggedIn = true;
}

class App extends Component {

  render() {
    return (
      isLoggedIn ? (
        <div id="wrapper">
          <Nav />
          <main role="main">
            <Routes>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/flot-chart' component={FlotChart} />
              {/* <Route path='/morris-chart' component={MorrisChart} /> */}
              <Route exact path='/forms' component={Forms} />
              <Route exact path='/panel-weels' component={PanelWeels} />
              <Route exact path='/buttons' component={Buttons} />
              <Route exact path='/notifications' component={Notifications} />
              <Route exact path='/typography' component={Typography} />
              <Route exact path='/icons' component={Icons} />
              <Route exact path='/grid' component={Grid} />
              <Route exact path='/blank' component={Blank} />
              <Route exact path='/login' component={Login} />
              <Route path='/karrot' element={<Karrot/>} />
              <Route path='/group-buying' element={<GroupBuying/>} />
              <Route path='/government' element={<Government/>} />
              <Route path='/product-review' element={<ProductReview/>} />
              <Route path='/life-hack' element={<LifeHack/>} />
              <Route path='/post/:id' element={<Post/>} />
              <Route path='/write' element={<Write/>} />
              {/* default route */}
              <Route exact path='/' component={Dashboard} />
            </Routes>
          </main>
        </div>
      ) : <Login />
    );
  }
}

export default App;
