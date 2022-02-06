/**
 * Navigation bar for PP app
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ProSidebar,
   Menu,
   MenuItem,
} from 'react-pro-sidebar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {
  FaDev,
  FaUser,
  FaBasketballBall,
  FaDoorClosed } from "react-icons/fa";
import * as fcl from '@onflow/fcl';

fcl.config()
.put("accessNode.api", "https://access-testnet.onflow.org")
.put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

export default function PPSideBar({
  user,
  setUser
}) {
  const [isHovering, setHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const login = () => {
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);
  }

  const logout = () => {
    fcl.unauthenticate();
    navigate("/");
  }

  return (
    <Box
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ProSidebar
        collapsed={!isHovering}
      >
        <Menu iconShape="square">
          <MenuItem icon={<FaBasketballBall />}>
            <Link to="/">PP</Link>
          </MenuItem>
          <MenuItem icon={<FaUser />}>
            {user && user.addr ?
            <Link to="/account">
              {"Account Address: " + user.addr}
            </Link> :
            <Button color="inherit" onClick={login}>Login</Button>}
          </MenuItem>
          <MenuItem icon={<FaDev />}>
            <Link to="/dev">dev</Link>
          </MenuItem>
          {user &&
          <MenuItem icon={<FaDoorClosed />} onClick={logout}>
            Logout
          </MenuItem>}
        </Menu>
      </ProSidebar>
    </Box>
  );
}
