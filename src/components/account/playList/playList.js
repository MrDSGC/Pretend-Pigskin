/**
 * play list component for User
 *
 * List of topshot plays read from Account collection
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
 import {
  Box,
} from '@mui/material';
import { useState } from 'react'

export default function PlayList() {
  const [playList, setPlayList] = useState([]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <ul>
        {playList.forEach( play => {
          return <li>{play.id}</li>
        })}
      </ul>
    </Box>
  );
}
