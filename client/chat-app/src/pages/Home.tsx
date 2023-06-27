import useSocket from '../hooks/useSocket';
import Chat from '../components/Chat';

const Home = () => {
  const { isConnected } = useSocket();

  return <Chat />;
};

export default Home;
