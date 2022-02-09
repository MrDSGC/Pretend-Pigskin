/**
 * Minter Page component for TSY
 *
 * Users will mint new TopshotPlayer NFTs using NBA Topshots here
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
 import {
  Box, Button,
} from '@mui/material';
import { useState } from 'react'
import { fetchAllPlays } from '../../cadence/scripts/tsMomentScript'
import * as fcl from '@onflow/fcl'

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')

export default function MinterPage() {

  const [play, setPlay] = useState();

  const fetchPlays = async () => {
    const result = await fcl
      .send([fcl.script(fetchAllPlays)])
      .then(fcl.decode);
      console.log(result);

    setPlay(result);

  }

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <Button
        onClick={() => fetchPlays()}
      >
        PUSH ME FOR DATA
      </Button>
      MINTER GOES HERE TBD
    </Box>
  );
}
