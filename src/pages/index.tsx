import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import ContractUpload from '../components/ContractUpload';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contract Analysis Platform</h1>
      <ContractUpload />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parse(ctx.req.headers.cookie || '');

  if (!cookies.authToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Will be passed to the page component as props
  };
};

export default Home;
