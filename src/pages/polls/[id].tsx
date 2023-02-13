import { isDateExpired } from '@/utils/dates';
import Layout from '@/components/Layout';
import Notice from '@/components/Notice';
import Container from '@/components/Container';
import Options from '@/components/Options';
import { prisma } from '@/utils/prisma';
import type IPoll from '@/types/poll';

type PollPageProps = {
  poll: string;
};

function PollPage({ poll }: PollPageProps) {
  const foundPoll = JSON.parse(poll) as IPoll;

  if (!foundPoll || isDateExpired(foundPoll.expiresAt)) {
    return <Notice title='Poll' message='Poll not found / expired' />;
  }

  return (
    <Layout title='Poll'>
      <Container gap={4}>
        <article className='p-4 border mt-6 rounded-md'>
          <h1 className='text-2xl font-medium text-center'>{foundPoll.title}</h1>
        </article>
        {foundPoll && foundPoll.options.length > 0 ? (
          <Options poll={foundPoll} />
        ) : (
          <Notice title='Poll' message='No options were found' />
        )}
        <span className='text-blue-500 underline'>https://pollz-mu.vercel.app/{foundPoll.id}</span>
        <div className='bg-blue-100 p-1 border rounded select-none'>
          This poll will expire in {foundPoll.expiresAt.toLocaleString()}
        </div>
      </Container>
    </Layout>
  );
}

export default PollPage;

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const poll = await prisma.poll.findUnique({
    where: {
      id: params.id,
    },
    include: {
      options: true,
      votes: {
        include: {
          option: true,
          poll: true,
        },
      },
    },
  });

  return {
    props: {
      poll: JSON.stringify(poll),
    },
  };
}
