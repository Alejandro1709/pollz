import type IPoll from '@/types/poll';

const polls: Array<IPoll> = [
  {
    id: 'alfanumericbeach45',
    title: 'What is your favorite color?',
    options: [
      { id: 1, name: 'Red', votes: 0 },
      { id: 2, name: 'Green', votes: 0 },
      { id: 3, name: 'Blue', votes: 0 },
      { id: 4, name: 'Yellow', votes: 0 },
    ],
    votes: [
      { id: 1, optionId: 1 },
      { id: 2, optionId: 1 },
      { id: 3, optionId: 2 },
      { id: 4, optionId: 3 },
    ],
  },
];

export default polls;
