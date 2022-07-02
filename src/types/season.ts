export type Season = {
  id: number;
  year: number;
  stages: Stage[];
};

export type Stage = {
  id: number;
  place: string;
  date: Date;
};
