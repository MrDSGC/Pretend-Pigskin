/**
 * Welcome main page forTSYapp
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import {
  Card,
  CardHeader,
} from '@mui/material';
import Box from '@mui/material/Box';
import loading from '../../assets/loading.gif';

export default function WelcomePage({
  isLoading,
}) {
  return ( isLoading ?
    <Box
      sx={{
        width:'2000px',
        paddingLeft: '50%',
        paddingTop: '50%',
      }}
    >
      <img
        src={loading}
        alt="loading..."
      />
    </Box> :
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: 'transparent',
      alignItems: 'center',

    }}>
      <CardHeader>WELCOME</CardHeader>
      <h1>TS-Yukine</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: '30px',
          paddingBottom: '30px',
          justifyContent: 'space-around'
        }}
      >
        <Box>
          Development in progress...
        </Box>
        <Box>

        </Box>
      </Box>
    </Card>

  );
}
