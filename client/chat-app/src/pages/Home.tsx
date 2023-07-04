import Chat from '../components/Chat';
import useRooms from '../hooks/useRooms';

const Home = () => {
  const { rooms } = useRooms();

  return <Chat />;
};

export default Home;
