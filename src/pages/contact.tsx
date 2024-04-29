import Layout from '@/components/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <div>
        <p>
          <strong>Company Name:</strong> Your Company Name
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@company.com
        </p>
      </div>
    </Layout>
  );
};

export default About;
