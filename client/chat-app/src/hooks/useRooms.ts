import { useQuery } from '@tanstack/react-query';
import { getAllRooms } from '../utils/api';
import { QueryKeys } from '../utils/queryKeys';

const useRooms = () => {
  const {
    data: rooms,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getAllRooms,
    queryKey: [QueryKeys.ROOMS],
  });

  return {
    rooms,
    isLoading,
    isError,
  };
};

export default useRooms;
