import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className='bg-blue-50'>
      <div className='flex items-center justify-center h-screen p-4 flex-col sm:w-1/2 m-auto md:w-1/3'>
        {children}
      </div>
    </main>
  );
};

export default Layout;
