import { describe, expect, it, vitest, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom';

import Navbar from '.';

// Mock images
vitest.mock('../assets', () => ({
  images: {
    profileImg: '/user/profileImg.png'
  }
}));

const theme = createTheme();

describe('Navbar component', () => {
  const handleDrawerToggleMock = vitest.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar handleDrawerToggle={handleDrawerToggleMock} />
      </ThemeProvider>
    );
  });

  it('calls handleDrawerToggle when menu button is clicked', () => {
    const menuButton = screen.getByLabelText(/open drawer/i);
    fireEvent.click(menuButton);
    expect(handleDrawerToggleMock).toHaveBeenCalledTimes(1);
  });

  it('displays the correct title', () => {
    expect(screen.getByText(/amazon product price/i)).toBeInTheDocument();
  });

  it('renders the info icon', () => {
    expect(screen.getByLabelText(/info/i)).toBeInTheDocument();
  });

  it('renders the notifications icon', () => {
    expect(screen.getByLabelText(/notifications/i)).toBeInTheDocument();
  });

  it('renders the avatar', () => {
    const avatar = screen.getByAltText(/remy sharp/i);
    expect(avatar).toBeInTheDocument();
  });

  it('renders CreditUsage component', () => {
    expect(screen.getByText(/credit usage/i)).toBeInTheDocument();
  });
});
