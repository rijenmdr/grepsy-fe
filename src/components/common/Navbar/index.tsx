import { AppBar, Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Menu } from '@mui/icons-material';

import { images } from '../../../assets';
import CreditUsage from '../CreditUsage';
import { SIDEBAR_WIDTH } from '../../../static/sideNav';

type Props = {
  handleDrawerToggle: () => void;
};

const Navbar = ({ handleDrawerToggle }: Props) => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.border.main}`,
        padding: '1rem 2rem',
        width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` }, // Sets the width to 100% minus the sidebar width on medium and larger screens
        ml: { md: `${SIDEBAR_WIDTH}px` } // Adds left margin equal to the sidebar width on medium and larger screens
      }}
    >
      <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
        <Stack gap={'0.75rem'} alignItems={'center'} flexDirection={'row'}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <Menu />
          </IconButton>

          <IconButton color="inherit" edge="start">
            <KeyboardBackspaceIcon
              sx={{ color: theme.palette.icon.main }}
              className="cursor-pointer"
              fontSize="medium"
            />
          </IconButton>

          <Typography color={theme.palette.secondary.main} variant="h6">
            Amazon product price
          </Typography>

          <IconButton color="inherit" edge="start">
            <InfoOutlinedIcon sx={{ color: theme.palette.icon.main }} className="cursor-pointer" fontSize="medium" />
          </IconButton>
        </Stack>

        <Stack gap={'1rem'} alignItems={'center'} flexDirection={'row'}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <CreditUsage totalCreditUsage={200} />
          </Box>
          <IconButton color="inherit" edge="start">
            <NotificationsOutlinedIcon
              sx={{ color: theme.palette.icon.main }}
              className="cursor-pointer"
              fontSize="medium"
            />
          </IconButton>
          <Avatar alt="Remy Sharp" src={images.profileImg} className="cursor-pointer" />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
