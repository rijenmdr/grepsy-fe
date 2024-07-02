import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import DatasetHeader from '../components/container/datasets/DatasetHeader';
import CustomTable from '../components/common/CustomTable';
import { Column } from '../type/table';
import { fetchProducts } from '../services/product';

const Datasets = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const columns: Column[] = [
    { id: 'name', label: 'Product Name', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100 },
    { id: 'rating', label: 'Rating', minWidth: 170, align: 'left' },
    { id: 'brand', label: 'Brand', minWidth: 170, align: 'left' },
    { id: 'availability', label: 'Availability', minWidth: 170, align: 'left' }
  ];

  const transformedData =
    data?.map((item) => ({
      ...item,
      price: `$${item.price}`,
      availability: item.availability ? 'Yes' : 'No'
    })) || [];

  return (
    <Stack gap={'1rem'}>
      <DatasetHeader />
      <CustomTable columns={columns} data={transformedData} isLoading={isLoading} />
    </Stack>
  );
};

export default Datasets;
