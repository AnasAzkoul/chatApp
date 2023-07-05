import React, { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import {AiFillCheckCircle} from 'react-icons/ai'

interface SelectItemProps extends React.HTMLAttributes<HTMLElement>{
  value: string
}

const SelectItem = (
  { className, children, value,...props }: SelectItemProps,
) => {
  return (
    <Select.Item
      className={`${className} `}
      value={value}
      {...props}
    >
      <Select.ItemText className='text-gray-50'>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <AiFillCheckCircle />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export default SelectItem;
