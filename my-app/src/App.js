import React, { useState } from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import {Nav} from './components/Nav';
import Dashboard from './pages/Dashboard';
import FlotChart from './pages/FlotChart';
import Forms from './pages/Forms';
import PanelWeels from './pages/PanelWeels';
import Buttons from './pages/Buttons';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Grid from './pages/Grid';
import Blank from './pages/Blank';
import {Login} from './pages/Login';
import {Post} from "./pages/Post";
import {Write} from "./pages/Write";
import {Karrot} from "./pages/Karrot";
import {GroupBuying} from "./pages/GroupBuying";
import {LifeHack} from "./pages/LifeHack";
import {ProductReview} from "./pages/ProductReview";
import {Government} from "./pages/Government";
import {KakaoLogin} from "./components/login/KakaoLogin";
import {SignUp} from "./pages/SignUp";
import {ContextProvider} from "./store/Context";
import {Chatroom} from "./pages/Chatroom";
import PrivateRoute from "./pages/PrivateRoute";
import MorrisChart from "./pages/MorrisChart";
import {NotFound} from "./pages/NotFound";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './components/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgcolor};
  }
  #page-wrapper {
    background-color: ${(props) => props.theme.bgcolor};
  }
  .navbar {
    background-color: ${(props) => props.theme.bgcolor};
  }
  .sidebar {
    background-color: ${(props) => props.theme.bgcolor};
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  }
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div id="wrapper">
          <ContextProvider>
            <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <main role="main">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />


                <Route path='/login' element={<Login />} />
                <Route path='/karrot' element={<Karrot/>} />
                <Route path='/group-buying' element={<GroupBuying/>} />
                <Route path='/government' element={<Government/>} />
                <Route path='/product-review' element={<ProductReview/>} />
                <Route path='/life-hack' element={<LifeHack/>} />
                <Route path='/post/:id' element={<Post/>} />
                <Route path='/auth/kakao/callback' element={<KakaoLogin />} />


                <Route path='/morris-chart' element={MorrisChart} />
                <Route path='/typography' element={<Typography />} />
                <Route path='/flot-chart' element={<FlotChart />} />
                <Route path='/forms' element={<Forms />} />
                <Route path='/panel-weels' element={<PanelWeels />} />
                <Route path='/buttons' element={<Buttons />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/icons' element={<Icons />} />
                <Route path='/grid' element={<Grid />} />
                <Route path='/blank' element={<Blank />} />

                {/*<Route path='/signup' element={<SignUp />} />*/}

                {/* private route */}
                <Route path='/chatroom' element={<PrivateRoute component={<Chatroom />}/>} />
                <Route path='/:category/write' element={<PrivateRoute component={<Write />}/>} />
                <Route path='/signup' element={<PrivateRoute component={<SignUp />}/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </ContextProvider>
        </div>
      </ThemeProvider>
    );
}

export default App;
