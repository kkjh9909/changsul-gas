import React, { Component } from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import {Nav} from './components/Nav';
import Dashboard from './pages/Dashboard';
import FlotChart from './pages/FlotChart';
// import MorrisChart from './pages/MorrisChart';
import Tables from './components/table/Tables';
import Forms from './pages/Forms';
import PanelWeels from './pages/PanelWeels';
import Buttons from './pages/Buttons';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Grid from './pages/Grid';
import Blank from './pages/Blank';
import {Login} from './pages/Login';
import {Post} from "./components/post/Post";
import {Write} from "./pages/Write";
import {Karrot} from "./pages/Karrot";
import {GroupBuying} from "./pages/GroupBuying";
import {LifeHack} from "./pages/LifeHack";
import {ProductReview} from "./pages/ProductReview";
import {Government} from "./pages/Government";
import {KakaoLogin} from "./components/login/KakaoLogin";
import {SignUp} from "./pages/SignUp";
import {ContextProvider} from "./store/Context";

// const AuthRoute = ({component: Component, ...rest}) => {
//   <Route {...rest} render={props => {
//     true ? (<Component {...props} />) : 
//     (<Redirect to={{pathName: '/login'}} />)
//   }}/>
// }

// let isLoggedIn = true;
//
// export function onLogout() {
//   isLoggedIn = false;
// }
// export function onLogin() {
//   isLoggedIn = true;
// }

class App extends Component {

  render() {
    return (
        <div id="wrapper">
          <ContextProvider>
            <Nav />
            <main role="main">
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/flot-chart' element={<FlotChart />} />
                {/* <Route path='/morris-chart' component={MorrisChart} /> */}
                <Route path='/forms' element={<Forms />} />
                <Route path='/panel-weels' element={<PanelWeels />} />
                <Route path='/buttons' element={<Buttons />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/typography' element={<Typography />} />
                <Route path='/icons' element={<Icons />} />
                <Route path='/grid' element={<Grid />} />
                <Route path='/blank' element={<Blank />} />
                <Route path='/login' element={<Login />} />
                <Route path='/karrot' element={<Karrot/>} />
                <Route path='/group-buying' element={<GroupBuying/>} />
                <Route path='/government' element={<Government/>} />
                <Route path='/product-review' element={<ProductReview/>} />
                <Route path='/life-hack' element={<LifeHack/>} />
                <Route path='/post/:id' element={<Post/>} />
                <Route path='/auth/kakao/callback' element={<KakaoLogin />} />
                <Route path='/signup' element={<SignUp />} />
                {/* default route */}
                <Route path='/:category/write' element={<Write/>} />
                <Route path='/' element={<Dashboard />} />
              </Routes>
            </main>
          </ContextProvider>

        </div>
    );
  }
}

export default App;
