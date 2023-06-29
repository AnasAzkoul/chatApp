import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { handleLogoutUser } from '../utils/api';

export default function useLogoutUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => handleLogoutUser(),
    onSuccess: (response) => handleOnSuccess(response),
    onError: error => console.log(error)
  });

  const navigate = useNavigate();

  const handleOnSuccess = (response: any) => {
    console.log(response);
    queryClient.setQueryData(['user'], undefined);
    navigate('/signin');
  }

  return {
    queryClient,
    mutation
  }
}
