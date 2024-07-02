import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
  tableCellClasses
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Column, Data } from '../../../type/table';
import { icons } from '../../../assets';

type CustomTableProps = {
  columns: Column[];
  data: Data[];
  isLoading: boolean;
};

// Styled TableCell component
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // Styles for table header cells
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.neutral.light,
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: '0.875rem'
  },
  // Styles for table body cells
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.875rem',
    fontWeight: 500
  }
}));

// Styled TableRow component
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // Styles for odd-numbered rows
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.neutral.dark
  },
  // Remove border for the last row
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const CustomTable = ({ columns, data, isLoading }: CustomTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table stickyHeader aria-label="custom table" sx={{ overflow: 'auto' }}>
        <TableHead>
          <TableRow
            sx={{
              //Style for the table head row to show border
              '& th:first-of-type': {
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
              },
              '& th:last-of-type': {
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px'
              }
            }}
          >
            {columns.map((column) => (
              <StyledTableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Box display="flex" alignItems="center">
                    <img src={icons.ascending} alt="ascending" width={24} height={24} />
                    {column.label}
                  </Box>
                  <FilterListIcon fontSize="small" sx={{ ml: 1 }} />
                </Box>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* Show the loading progress bar */}
        {isLoading ? (
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="10rem"
          >
            <Box position="absolute" left="50%" right="50%">
              <CircularProgress size={30} />
            </Box>
          </Box>
        ) : (
          <TableBody>
            {data && data.length ? (
              data.map((row, index) => (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))
            ) : (
              <Typography component="tr">No Result.</Typography>
            )}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
