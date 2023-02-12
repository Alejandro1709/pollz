import Link from 'next/link';
import Layout from './Layout';

type Props = {
  title: string;
  message: string;
};

function Notice({ title, message }: Props) {
  return (
    <Layout title={title}>
      <section className='flex flex-col gap-4 md:mx-16 mx-4'>
        <article className='p-4 border mt-6 rounded-md'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-2xl font-medium text-center'>{message}</h1>
            <div>
              Shall we go back{' '}
              <Link className='text-blue-500 underline hover:text-blue-600' href='/'>
                home
              </Link>
              ?
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Notice;
