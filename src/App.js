
import './App.css';
import {Header} from './components/Header/Header';
import { Home } from './pages/Home';
import {Profile} from './components/Profile/Profile';
import {Spending} from './components/Spending/Spending';
import { Track } from './components/Track/Track';
import { HomeBar } from './components/HomeBar/HomeBar';
import { GlobalProvider } from './components/context/GlobalState';
import { Account } from './pages/Account';
import { ProfilePage } from './pages/ProfilePage';

import { render } from "react-dom";

import {
  Routes, Route,
  useLocation,
  BrowserRouter
} from 'react-router-dom';



function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="1" element={<Account/>}  />
          <Route path="2" element={<ProfilePage/>}  />
        </Routes>
      </BrowserRouter>
      <HomeBar> </HomeBar>
    </div>
    
    
  );
}

export default App;
