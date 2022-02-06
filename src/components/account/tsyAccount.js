/**
 * Account page for PP app
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import {
  Box,
  CardHeader,
  Card,
} from '@mui/material';
import { Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import * as fcl from '@onflow/fcl';
import { fetchIDsByAccount, getOwnedNFTs } from '../../cadence/scripts/tsMomentScript';
import { breakpoints } from '@mui/system';
import PlayList from './playList/playList';

export default function PPAccount({
   user
  }) {
    const [playList, setPlayList] = useState([]);

    const fetchPlaysByAddress = async () => {
      const result = await fcl
        .send([fcl.script(getOwnedNFTs)])
        .then(fcl.decode);
      breakpoints()
      setPlayList(result)
    }

    useEffect(() => {
      fetchPlaysByAddress();
    });

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      {!user && <Navigate to="/" replace={true}/>}
      <CardHeader>Account Page</CardHeader>
      <h1>Account Address: {user && user.addr ? user.addr : ""}</h1>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <PlayList/>
      </Box>
    </Card>
  );
}
