import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetAuthUser } from '../hooks/useGetAuthUser';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { data: user, isLoading, isError } = useGetAuthUser();

  if(isLoading) {
    return <h1>Loading</h1>
  }

  if(isError) {
    return <h1>Something went wrong</h1>
  }

  if (!user?._id) {
    return (
      <Navigate
        to='/signin'
        replace
      />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
