import { useQuery } from '@tanstack/react-query';
import {getAuthUser} from '../utils/api';

export function useGetAuthUser() {
  const { isLoading, isError, data, error } = useQuery({
    queryFn: getAuthUser,
    queryKey: ['auth_user'],
  });

  return {
    isLoading,
    isError,
    data,
    error
  }
}
