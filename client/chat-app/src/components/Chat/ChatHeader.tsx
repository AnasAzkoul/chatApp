import useLogoutUser from '../../hooks/useLogoutUser';
import Button from '../Button';
import { useGetAuthUser } from '../../hooks/useGetAuthUser';

const ChatHeader = () => {
  const { mutation } = useLogoutUser();
  const { data } = useGetAuthUser();

  const handleLogoutUser = async () => {
    await mutation.mutate();
  };

  return (
    <header>
      <div className='grid items-center grid-cols-3 px-4 py-2 text-white bg-indigo-500'>
        <div>The Chat</div>
        {data?.userName && (
          <span className='basis-1/3'>Welcome back {data.userName}</span>
        )}
        <Button
          onClick={handleLogoutUser}
          className='flex-1 text-white bg-indigo-300'
        >
          Log Out
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;
