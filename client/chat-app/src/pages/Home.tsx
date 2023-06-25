import useSocket from '../hooks/useSocket';
import useLogoutUser from '../hooks/useLogoutUser';
import Button from '../components/Button';

interface UserInfo {
  [key: string]: string
}

const Home = () => {
  const { mutation, queryClient } = useLogoutUser();
  const { isConnected } = useSocket();

  const handleLogoutUser = async () => {
    await mutation.mutate();
  };

  const data = queryClient.getQueryData(['user']) as unknown as UserInfo | undefined;

  return (
    <div>
      <h1 className='text-xl text-blue-700'>Home page</h1>
      <div>
        <Button onClick={handleLogoutUser}>Logout</Button>
        {data?.userName && <span>Welcome {data.userName}</span>}
      </div>
    </div>
  );
};

export default Home;
