import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomTable from '.';
import { Column } from '../../../type/table';
import '@testing-library/jest-dom';

// Mock data for testing
const columnsMock: Column[] = [
  { id: 'id', label: 'ID', align: 'left', minWidth: 100 },
  { id: 'name', label: 'Name', align: 'left', minWidth: 150 }
];

const dataMock = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' }
];

describe('CustomTable component', () => {
  it('renders table headers and rows correctly', () => {
    render(<CustomTable columns={columnsMock} data={dataMock} isLoading={false} />);

    // Assert table headers are rendered
    const idHeader = screen.getByText(/ID/i);
    const nameHeader = screen.getByText(/Name/i);
    expect(idHeader).toBeInTheDocument();
    expect(nameHeader).toBeInTheDocument();

    // Assert table rows are rendered
    const johnDoeRow = screen.getByText(/John Doe/i);
    const janeSmithRow = screen.getByText(/Jane Smith/i);
    expect(johnDoeRow).toBeInTheDocument();
    expect(janeSmithRow).toBeInTheDocument();
  });

  it('renders loading indicator when isLoading is true', () => {
    render(<CustomTable columns={columnsMock} data={[]} isLoading={true} />);

    // Assert that loading indicator is rendered
    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('renders "No Result." when data is empty', () => {
    render(<CustomTable columns={columnsMock} data={[]} isLoading={false} />);

    // Assert "No Result." text is rendered
    const noResultText = screen.getByText(/No Result./i);
    expect(noResultText).toBeInTheDocument();
  });
});
