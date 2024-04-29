// components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='container mx-auto px-4 grow'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
