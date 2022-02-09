/**
 * Account settings page forTSYapp
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import {
  Box,
  CardHeader,
  Card,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function SettingsPage({
   user
  }) {


  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: 'transparent',
    }}>
      <CardHeader>Account Page</CardHeader>
      <h1>Account Address: {user && user.addr ? user.addr : ""}</h1>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
      </Box>
    </Card>
  );
}
