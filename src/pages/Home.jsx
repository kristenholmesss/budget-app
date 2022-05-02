import React from 'react'
import {Profile} from '../components/Profile/Profile';
import {Spending} from '../components/Spending/Spending';
import { Track } from '../components/Track/Track';
import { HomeBar } from '../components/HomeBar/HomeBar';
import { MiniBudg } from '../components/MiniBudg/MiniBudg';

import { GlobalProvider } from '../components/context/GlobalState';


export const Home = () => {
  return (
    <GlobalProvider>
      <div id='stuff'> 
        <Profile></Profile>
        <Spending></Spending>
        <MiniBudg></MiniBudg>
    
        


      </div>
      
      
    </GlobalProvider>
  )
}
