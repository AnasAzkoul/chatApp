import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='p-1 bg-blue-100'>
      <div className='flex flex-col items-center justify-center w-3/4 py-10 mx-auto my-20 bg-gray-50'>
        {children}
      </div>
    </main>
  );
};

export default Layout;
