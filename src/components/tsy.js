/**
 * PP's main page.
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TSYSideBar from './appBar/sideBar';
import WelcomePage from './main/welcomePage';
import SettingsPage from './settings/settingsPage';
import RankingsPage from './rank/rankingPage';
import HomePage from './main/homePage';
import MintyPage from './minty/mintyPage'
import PlayersPage from './players/playersPage'


function TSY() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        }}
      >
        <TSYSideBar
          user={user}
          setUser={setUser}
          setLoading={setLoading}
        />
        <Routes>
          <Route
            path="/"
            element={<WelcomePage isLoading={isLoading}/>}
          />
          <Route
            path="/home"
            element={<HomePage user={user} />}

          />
          <Route
            path="/mint"
            element={<MintyPage/>}
          />
          <Route
            path="/rank"
            element={<RankingsPage/>}
          />
          <Route
            path="/players"
            element={<PlayersPage/>}
          />
          <Route
            path="/settings" element={<SettingsPage user={user} />}

          />
        </Routes>
      </Box>
    </Box>
  )
}

export default TSY;
