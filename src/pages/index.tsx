import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Form from '@/components/Form';
import Container from '@/components/Container';

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
      <Container>
        <Form inputRef={inputRef} handleChange={handleChange} handleSubmit={handleSubmit} error={error} />
      </Container>
    </Layout>
  );
}

export default Home;
