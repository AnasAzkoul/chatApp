import { useQuery } from '@tanstack/react-query';
import {getAuthUser} from '../utils/api';
import { QueryKeys } from '../utils/queryKeys';

export function useGetAuthUser() {
  const { isLoading, isError, data, error } = useQuery({
    queryFn: getAuthUser,
    queryKey: [QueryKeys.Auth_User],
  });

  return {
    isLoading,
    isError,
    data,
    error
  }
}
