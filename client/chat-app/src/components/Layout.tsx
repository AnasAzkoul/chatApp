import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='bg-blue-50'>
      <div className='flex flex-col items-center justify-center p-4 m-auto sm:w-1/2 md:w-1/3'>
        {children}
      </div>
    </main>
  );
};

export default Layout;
