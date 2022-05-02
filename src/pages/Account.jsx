import React from 'react'
import { Track } from '../components/Track/Track';
import { TrackList } from '../components/TrackList/TrackList';
import { SmallComp } from '../components/SmallComp/SmallComp';

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
