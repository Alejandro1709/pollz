import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return;

    const value = e.target.value;

    inputRef.current.value = value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current?.value) {
      setError('Please enter a poll id');
      return;
    }

    router.push(`/polls/${inputRef.current?.value}`);
  };

  return (
    <Layout title='Polls'>
      <section className='flex flex-col md:mx-16 mx-4'>
        <form
          className='flex flex-col gap-4 bg-white p-2 md:w-2/4 md:mx-auto border mt-6 rounded-md'
          onSubmit={handleSubmit}
        >
          <h1 className='text-2xl font-medium text-center'>Join a Poll</h1>
          <input
            className='text-center outline-none w-full'
            type='text'
            placeholder='Enter Poll Id here...'
            ref={inputRef}
            onChange={handleChange}
          />
          <button className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md w-full mt-2'>Join</button>
          {error ? <p className='mt-2'>There is an error</p> : null}
        </form>
      </section>
    </Layout>
  );
}

export default Home;
