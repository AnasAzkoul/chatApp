import React from 'react'

interface Props {
  children: React.ReactNode;
}

const SectionTitle = ({children}: Props) => {
  return (
    <h2 className='mb-10 text-xl font-semibold text-left w-full text-gray-400 uppercase'>
      {children}
    </h2>
  );
}

export default SectionTitle
