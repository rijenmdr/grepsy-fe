import { useCallback, useState } from 'react';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <Stack direction={'row'}>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
