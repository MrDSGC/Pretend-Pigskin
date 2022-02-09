/**
 * Navigation bar for TSY app
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Link as MaterialLink} from '@mui/material'
import {
  ProSidebar,
   Menu,
   MenuItem,
   SidebarFooter,
   SidebarHeader,
   SidebarContent
} from 'react-pro-sidebar';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {
  FaDev,
  FaUser,
  FaBasketballBall,
  FaDoorClosed,
  FaGithub,
  FaTwitter,
 } from "react-icons/fa";
import * as fcl from '@onflow/fcl';

fcl.config()
.put("accessNode.api", "https://access-testnet.onflow.org")
.put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

export default function SideBar({
  user,
  setUser,
  setLoading,
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
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
      navigate("/home",)
    }, 1000)
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

        <SidebarHeader>
          <Menu iconShape="square">
            <MenuItem icon={<FaBasketballBall />}>
              <Link to="/">TS-Y</Link>
            </MenuItem>
            <MenuItem icon={<FaUser />}>
              {user && user.addr ?
              <Link to="/home">
                {"Account Address: " + user.addr}
              </Link> :
              <Button color="inherit" onClick={login}>Login</Button>}
            </MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FaDev />}>
              <Link to="/mint">Mint</Link>
            </MenuItem>
            <MenuItem icon={<FaDev />}>
              <Link to="/rank">Rank</Link>
            </MenuItem>
            <MenuItem icon={<FaDev />}>
              <Link to="/players">Players</Link>
            </MenuItem>
            <MenuItem icon={<FaDev />}>
              <Link to="/settings">Settings</Link>
            </MenuItem>
            {user &&
            <MenuItem icon={<FaDoorClosed />} onClick={logout}>
              Logout
            </MenuItem>}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FaGithub />}>
              <MaterialLink target="_blank" href="https://github.com/mrdsgc">Github</MaterialLink>
            </MenuItem>

            <MenuItem icon={<FaTwitter />} >
              <MaterialLink target="_blank" href="https://twitter.com/mrdsgc">Linkedin</MaterialLink>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </Box>
  );
}
