import { useCallback, useState } from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import { SIDEBAR_WIDTH } from '../../static/sideNav';

const DashboardLayout = () => {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <Stack direction={'row'}>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component={'main'}
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${SIDEBAR_WIDTH}px)`,
            backgroundColor: theme.palette.neutral.dark,
            marginTop: '73px',
            minHeight: `calc(100dvh - 73px)`
          }
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
};

export default DashboardLayout;
