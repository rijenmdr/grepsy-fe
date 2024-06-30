import { Stack, Typography, useTheme } from '@mui/material';
import { icons } from '../../../assets';

// Define the type for the component props
type Props = {
  totalCreditUsage: number;
};

const CreditUsage = ({ totalCreditUsage }: Props) => {
  // Use the useTheme hook to access the theme object
  const theme = useTheme();

  return (
    <Stack
      bgcolor={theme.palette.primary.light}
      padding={'.25rem .625rem'}
      borderRadius={'22px'}
      flexDirection={'row'}
      gap={'5px'}
      alignItems={'center'}
    >
      <img src={icons.credit} alt="credit" className="w-16 h-16" loading="lazy" />

      {/* Render the text displaying credit usage */}
      <Typography variant="caption">Credit usage: {totalCreditUsage} /</Typography>

      <img src={icons.infinite} alt="infinite" className="w-16 h-16" loading="lazy" />
    </Stack>
  );
};

export default CreditUsage;
