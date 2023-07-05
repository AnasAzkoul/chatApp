import { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import SelectItem from './SelectItem';
import useRooms from '../../hooks/useRooms';
import ChatHeader from '../Chat/ChatHeader';
import { BiChevronDownCircle } from 'react-icons/bi';
import Button from '../Button';

const SelectRoom = () => {
  const { rooms, isLoading, isError } = useRooms();
  const [room, setRoom] = useState({ name: '' });

  if (isError || rooms instanceof Error) {
    return <h1>Something wrong occurred</h1>;
  }

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  const handleOnSelect = (value: string) => {
    setRoom((prev) => {
      return {
        ...prev,
        name: value,
      };
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(room);
  };

  return (
    <div className='bg-indigo-300'>
      <ChatHeader />
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className='px-10 pb-3'>
          <p className='mt-4 mb-1 text-gray-50'>Choose your preferred room: </p>
          <Select.Root
            onValueChange={handleOnSelect}
            required
          >
            <Select.Trigger
              aria-label='rooms'
              className='flex items-center justify-between w-full gap-4 px-4 py-1 rounded-md bg-gray-50 data-[placeholder]:text-indigo-400 mt-1 mb-4'
            >
              <Select.Value placeholder='Choose a room' />
              <Select.Icon>
                <BiChevronDownCircle />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content
                className='overflow-hidden capitalize bg-indigo-400 text-gray-50'
                position='item-aligned'
                align='center'
                avoidCollisions
                hideWhenDetached
              >
                <Select.Viewport className='p-1'>
                  <Select.Group>
                    {rooms?.map((rooms) => (
                      <SelectItem
                        key={rooms._id}
                        value={rooms.name}
                        className='px-4 py-1 select-none  data-[highlighted]:text-gray-500 flex items-center gap-4'
                      >
                        {rooms.name}
                      </SelectItem>
                    ))}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default SelectRoom;
