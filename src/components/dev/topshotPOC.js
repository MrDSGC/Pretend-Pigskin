/**
 * Proof of Concept for reading topshot moment data
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
 import {
   CardContent,
   Card,
   Typography, } from '@mui/material';

 export default function TopShotPOC() {

   return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TOPSHOT MOMENT DATA
        </Typography>
        <Typography gutterBottom variant="Body2" component="div">
          data goes here
        </Typography>
      </CardContent>
    </Card>
   );
 }
