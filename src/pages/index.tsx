import Image from 'next/image';

import Layout from '@/components/layout';
const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Image
        priority
        fetchPriority='high'
        alt='fireplace'
        src='/photos/fireplace.png'
        width={300}
        height={300}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }}
      />
    </Layout>
  );
};

export default Home;
