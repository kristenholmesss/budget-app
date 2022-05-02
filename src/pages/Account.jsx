import React from 'react'
import {Profile} from '../components/Profile/Profile';
import {Spending} from '../components/Spending/Spending';
import { Track } from '../components/Track/Track';
import { HomeBar } from '../components/HomeBar/HomeBar';
import { TrackList } from '../components/TrackList/TrackList';
import { SmallComp } from '../components/SmallComp/SmallComp';
import { Plan } from '../components/Plan/Plan';

import { GlobalProvider } from '../components/context/GlobalState';


export const Account = () => {
  return (
    <GlobalProvider>
      <div id='stuff'> 
      <SmallComp></SmallComp>

        <TrackList></TrackList>
        <Track></Track>
        

        
        


      </div>
      
      
    </GlobalProvider>
  )
}
