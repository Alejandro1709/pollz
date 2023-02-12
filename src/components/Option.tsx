import { type IPollOption } from '@/types/poll';

type OptionProps = {
  option: IPollOption;
};

function Option({ option }: OptionProps) {
  return (
    <li className='flex flex-row justify-between p-2 border rounded-md hover:scale-95 transition-all cursor-pointer'>
      <h2>{option.name}</h2>
      <h3>0</h3>
    </li>
  );
}

export default Option;
