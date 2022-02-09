/**
 * Home page forTSYapp
 *
 * only accessible for logged in users
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
 import {
  Card,
  CardHeader,
  Box,
} from '@mui/material';
import { useEffect } from 'react';
import construction from '../../assets/under-construction.png';
import { useNavigate } from 'react-router-dom';

export default function Home({
  user,
}) {


  const navigate = useNavigate();

  useEffect(() => {
    if (!user){
        return navigate("/");
    }
  },[user, navigate]);


  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'transparent',
    }}>
      <CardHeader></CardHeader>
      <h1>HOMEPAGE</h1>
      <h1>Account Address: {user && user.addr ? user.addr : ""}</h1>
      <h2>Welcome, name_here</h2>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        Coming soon...
      </Box>
      <Box
        sx={{
          width: '500px'
        }}
      >
      <img
            src={construction}
            alt="under_construction"
          />

      </Box>
    </Card>

  );
}
