/**
 * PP's main page.
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import { Routes, Route } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import PsSideBar from './appBar/ppSideBar';
import Welcome from './welcome/ppWelcome';
import TopShotPOC from './dev/topshotPOC';
import Account from './account/ppAccount';

function Pigskin() {

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [user, setUser] = useState();
  const [width, height] = useWindowSize();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      width: width
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
