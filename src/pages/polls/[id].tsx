import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import polls from '@/data/polls';
import Notice from '@/components/Notice';
import Container from '@/components/Container';
import { isDateExpired } from '@/utils/dates';

function PollPage() {
  const router = useRouter();

  const { id } = router.query;

  const foundPoll = polls.find(poll => poll.id === id);

  if (!foundPoll || isDateExpired(foundPoll.expiresAt)) {
    return <Notice title='Poll' message='Poll not found / expired' />;
  }

  return (
    <Layout title='Poll'>
      <Container gap={4}>
        <article className='p-4 border mt-6 rounded-md'>
          <h1 className='text-2xl font-medium text-center'>{foundPoll.title}</h1>
        </article>
        <ul className='flex flex-col gap-2'>
          {foundPoll.options.map(option => (
            <li
              className='flex flex-row justify-between p-2 border rounded-md hover:scale-95 transition-all cursor-pointer'
              key={option.id}
            >
              <h2>{option.name}</h2>
              <h3>14</h3>
            </li>
          ))}
        </ul>
        <span className='text-blue-500 underline'>http://localhost:3000/polls/{foundPoll.id}</span>
        <div className='bg-blue-100 p-1 border rounded select-none'>This poll will expire in 5 minutes</div>
      </Container>
    </Layout>
  );
}

export default PollPage;
