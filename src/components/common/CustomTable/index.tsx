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
  CircularProgress
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.MuiTableCell-head`]: {
    backgroundColor: theme.palette.neutral?.light,
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: '0.875rem'
  },
  [`&.MuiTableCell-body`]: {
    fontSize: '0.875rem',
    fontWeight: 500
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.neutral?.dark
  }
}));

const CustomTable = ({ columns, data, isLoading }: CustomTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.id} align={column.align}>
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
        <TableBody>
          {isLoading ? (
            <TableRow data-testid="loading-indicator">
              <TableCell colSpan={columns.length}>
                <Box display="flex" justifyContent="center" alignItems="center" height="10rem">
                  <CircularProgress size={30} />
                </Box>
              </TableCell>
            </TableRow>
          ) : data.length > 0 ? (
            data.map((row, index) => (
              <StyledTableRow key={index}>
                {columns.map((column) => (
                  <StyledTableCell key={column.id} align={column.align}>
                    {row[column.id]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Typography align="center">No Result.</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
