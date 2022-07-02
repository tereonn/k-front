import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSeasonData } from '../services/data_readers/season';
import { Stage } from '../types/season';
import styles from './main.module.css';

export const MainPage = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stages, setStages] = useState<Stage[]>([]);

  const renderStages = (s: Stage, i: number) => (
    <div
      onClick={() => nav(`/stage/${s.id}`)}
      className={styles.stageWrapper}
      key={s.id}
    >
      <h2> Stage{i} </h2> - {s.date.toString()} - {s.place}{' '}
    </div>
  );

  useEffect(() => {
    const loadSeasonData = async () => {
      const currentYear = new Date().getFullYear();
      const data = await getSeasonData(currentYear);

      setStages(data.stages);
    };

    loadSeasonData().catch(console.error);
  }, []);

  useEffect(() => {
    if (loading && stages.length > 0) {
      setLoading(false);
    }
  }, [stages]);

  return (
    <section>{loading ? <p>Loading...</p> : stages.map(renderStages)}</section>
  );
};
