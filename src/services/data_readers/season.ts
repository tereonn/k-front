import { SEASON } from '../../mock/season';
import { Season } from '../../types/season';

export async function getSeasonData(year: number): Promise<Season> {
  return new Promise((r) => {
    setTimeout(() => {
      r(SEASON);
    }, 500);
  });
}
