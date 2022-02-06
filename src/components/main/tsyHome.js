/**
 * Home page for PP app
 *
 * only accessible for logged in users
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
 import {
  Card,
  CardHeader,
} from '@mui/material';

export default function PPHome() {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%'
    }}>
      <CardHeader></CardHeader>
      <h1>HOMEPAGE</h1>
      Dont have stuff here yet
    </Card>

  );
}
