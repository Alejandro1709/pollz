import type IPoll from '@/types/poll';
import { type IPollOption } from '@/types/poll';

type OptionProps = {
  option: IPollOption;
  poll: IPoll;
};

function Option({ option, poll }: OptionProps) {
  if (!poll.votes) {
    return null;
  }

  const votes = poll.votes.filter(vote => vote.option.title === option.title);

  return (
    <li className='flex flex-row justify-between p-2 border rounded-md hover:scale-95 transition-all cursor-pointer'>
      <h2>{option.title}</h2>
      <h3>{votes.length}</h3>
    </li>
  );
}

export default Option;
