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

export default function PPAccount({
   user
  }) {

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      {!user && <Navigate to="/" replace={true}/>}
      <CardHeader>Account Page</CardHeader>
      <h1>Account Address: {user && user.addr ? user.addr : ""}</h1>
      <Box>
        ACCOUNT STUFF TBD
      </Box>
    </Card>
  );
}
