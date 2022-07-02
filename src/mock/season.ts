export const SEASON = {
  id: 0,
  year: 2022,
  stages: Array.from({ length: 30 }, (_, i) => ({
    id: i,
    place: `place${i}`,
    date: new Date(),
  })),
};
