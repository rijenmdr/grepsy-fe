import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

// Custom styled switch component
const CustomSwitch = styled((props: SwitchProps) => <Switch disableRipple {...props} />)(({ theme }) => ({
  width: '3.375rem',
  height: '1.5rem',
  padding: '0px',
  '& .MuiSwitch-switchBase': {
    color: '#818181',
    padding: '1px',
    '&.Mui-checked': {
      paddingLeft: '0.625rem',
      '& + .MuiSwitch-track': {
        backgroundColor: `${theme.palette.primary.main}`
      }
    }
  },
  '& .MuiSwitch-thumb': {
    color: 'white',
    width: '1.25rem',
    height: '1.25rem',
    margin: '1px'
  },
  '& .MuiSwitch-track': {
    borderRadius: '1.6rem',
    backgroundColor: '#818181',
    opacity: '1 !important',
    '&:after, &:before': {
      color: 'white',
      fontSize: '11px',
      position: 'absolute',
      top: '4px'
    },
    '&:after': {
      content: "'ON'",
      left: '5px'
    },
    '&:before': {
      content: "'OFF'",
      right: '5px'
    }
  },
  checked: {
    color: `${theme.palette.primary.main}!important`,
    transform: 'translateX(26px) !important'
  }
}));

interface Props extends SwitchProps {}

// Functional component with state management for the switch
const SwitchWithText = ({ ...props }: Props) => {
  return <CustomSwitch {...props} />;
};

export default SwitchWithText;
