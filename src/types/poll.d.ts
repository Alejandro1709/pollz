export default interface IPoll {
  id: string;
  title: string;
  options: IPollOption[];
  votes?: IPollVote[];
  createdAt?: Date;
  updatedAt?: Date;
  expiresAt: Date;
}

export interface IPollOption {
  id: number;
  title: string;
  votes: number;
}

export interface IPollVote {
  id: number;
  optionId: number;
  option: IPollOption;
}
