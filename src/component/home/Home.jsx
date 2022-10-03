import React from 'react'
import LangingPage from '../landingPage/LangingPage';
import CreateEvent from '../event/CreateEvent';
import EventDetails from '../event/EventDetails';

import {
  Routes,
  Route,
} from "react-router-dom";

function Home({EventData}) {
  return (
    <div>
 <Routes>
      <Route path="/" element={<LangingPage/>}/>
      <Route path="/create" element={<CreateEvent/>}/>
      <Route path="/event" element={<EventDetails EventData={EventData}/>}/>
    </Routes>       


    </div>
  )
}

export default Home