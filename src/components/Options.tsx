import Option from './Option';
import type IPoll from '@/types/poll';

type OptionsProps = {
  poll: IPoll;
};

function Options({ poll }: OptionsProps) {
  return (
    <ul className='flex flex-col gap-2'>
      {poll.options.map(option => (
        <Option key={option.id} option={option} poll={poll} />
      ))}
    </ul>
  );
}

export default Options;
