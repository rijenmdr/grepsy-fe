import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles'; // Import useTheme hook
import { useLocation, Link } from 'react-router-dom'; // Import useLocation and Link from react-router-dom
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';

import ContactSupport from '../ContactSupport';
import { sidenavItems } from '../../../static/sideNav';

const DrawerContainer = () => {
  const theme = useTheme(); // Get the theme using the useTheme hook
  const { pathname } = useLocation(); // Get the current route location

  const getIcon = (label: string) => {
    let icon: ReactNode = null;
    switch (label?.toLowerCase()) {
      case 'datasets':
        icon = <TextSnippetOutlinedIcon />;
        break;
      case 'workflows':
        icon = <SpaceDashboardOutlinedIcon />;
        break;
      case 'credit usage':
        icon = <WalletOutlinedIcon />;
        break;
    }
    return icon;
  };

  return (
    <>
      <Box
        padding={'1rem 2rem'}
        height={'77px'}
        borderBottom={`1px solid ${theme.palette.border.main}`}
        alignContent={'center'}
      >
        <Typography color={theme.palette.secondary.main} variant="h6">
          Grepsr
        </Typography>
      </Box>

      <Stack padding={'1.5rem 1rem'} justifyContent={'space-between'} height={'100%'}>
        <List>
          {sidenavItems.map((item) => (
            <ListItem sx={{ marginBottom: '8px' }} key={item?.id} disablePadding>
              <ListItemButton
                component={Link}
                to={item?.link}
                selected={pathname === item?.link} // Mark as selected if the current path matches
                sx={{
                  '&:hover': {
                    '& .MuiListItemIcon-root': {
                      color: theme.palette.primary.main
                    }
                  }
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: 'auto', color: pathname === item?.link ? theme.palette.primary.main : 'inherit' }}
                >
                  {getIcon(item?.label)}
                </ListItemIcon>
                <ListItemText primary={item?.label} sx={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <ContactSupport />
      </Stack>
    </>
  );
};

export default DrawerContainer;
