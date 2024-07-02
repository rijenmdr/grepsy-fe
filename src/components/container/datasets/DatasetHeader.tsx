import { ChangeEvent, useState } from 'react';
import { Button, FormControlLabel, Stack } from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SwitchWithText from '../../common/Form/Switch';

const DatasetHeader = () => {
  // State for toggling metadata visibility
  const [showMetaData, setShowMetaData] = useState(false);
  // State for switch checked status
  const [checked, setChecked] = useState(false);

  // Handler function for switch state change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // Handler function for toggling metadata visibility
  const handleToggleMetaData = () => {
    setShowMetaData((prev) => !prev);
  };

  return (
    <Stack
      flexDirection={{ md: 'row' }}
      justifyContent={'space-between'}
      alignItems={{ md: 'center' }}
      width={'100%'}
      gap={'2rem'}
    >
      {/* Left-aligned buttons stack */}
      <Stack flexDirection={'row'} gap={'0.75rem'}>
        <Button variant="contained">Operations</Button>
        <Button variant="contained" color="neutral" startIcon={<FilterListIcon />}>
          Add Filters
        </Button>
      </Stack>

      {/* Right-aligned controls stack */}
      <Stack flexDirection={'row'} alignItems={'center'} gap={'0.75rem'} flexWrap={'wrap'}>
        <FormControlLabel
          value="edit"
          control={<SwitchWithText checked={checked} onChange={handleChange} />}
          label="Edit mode"
          labelPlacement="start"
          sx={{ fontWeight: 500, gap: '1rem', marginRight: '.75rem' }}
        />
        <Button
          onClick={handleToggleMetaData}
          variant="contained"
          color="neutral"
          startIcon={showMetaData ? <VisibilityIcon /> : <VisibilityOffIcon />}
        >
          {showMetaData ? 'Hide' : 'Show'} metadata
        </Button>

        <Button variant="icon" color="neutral">
          <SystemUpdateAltIcon fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default DatasetHeader;
