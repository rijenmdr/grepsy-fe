import { Box, Drawer } from '@mui/material';

import { SIDEBAR_WIDTH } from '../../../static/sideNav';
import DrawerContainer from './DrawerContainer';

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const Sidebar = ({ mobileOpen, handleDrawerToggle }: Props) => {
  return (
    <Box component="nav" sx={{ width: { md: SIDEBAR_WIDTH }, flexShrink: { md: 0 } }} aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Keeps the drawer mounted in the DOM even when closed for performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' }, // Shows the drawer on extra-small screens and hides it on medium and larger screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDEBAR_WIDTH } // Applies styles to the drawer paper component
        }}
      >
        <DrawerContainer />
      </Drawer>
      <Drawer
        variant="permanent" // Makes the drawer permanently visible on medium and larger screens
        sx={{
          display: { xs: 'none', md: 'block' }, // Shows the drawer on medium and larger screens and hides it on extra-small screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDEBAR_WIDTH }
        }}
        open // Forces the drawer to be open permanently
      >
        <DrawerContainer />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
