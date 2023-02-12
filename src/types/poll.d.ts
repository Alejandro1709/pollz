export default interface IPoll {
  id: string;
  title: string;
  options: IPollOption[];
  votes?: IPollVote[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPollOption {
  id: number;
  name: string;
  votes: number;
}

export interface IPollVote {
  id: number;
  optionId: number;
}
