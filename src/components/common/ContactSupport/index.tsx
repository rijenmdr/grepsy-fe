import { Button, Stack, Typography, useTheme } from '@mui/material';

const ContactSupport = () => {
  const theme = useTheme();
  return (
    <Stack
      bgcolor={theme.palette.background.default}
      justifyContent={'center'}
      alignItems={'center'}
      p={'1rem 1.5rem'}
      borderRadius={'6px'}
      gap={'.75rem'}
    >
      <Typography variant="body2" color={theme.palette.secondary.main}>
        Need any help?
      </Typography>

      <Button variant="light" color="primary">
        Contact Support
      </Button>
    </Stack>
  );
};

export default ContactSupport;
