/**
 * PP's main page.
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import PsSideBar from './appBar/ppSideBar';
import Welcome from './welcome/ppWelcome';
import TopShotPOC from './dev/topshotPOC';
import Account from './account/ppAccount';

function Pigskin() {
  const [user, setUser] = useState();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      height: 'max-content'
      }}
    >
      <PsSideBar
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/dev" element={<TopShotPOC/>} />
        <Route path="/account" element={<Account user={user}/>} />
      </Routes>
    </Box>
  )
}

export default Pigskin;
