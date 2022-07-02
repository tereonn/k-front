import { Outlet, useParams } from 'react-router-dom';

export const StagePage = () => {
  return (
    <div>
      <p>StagePage</p>
      <Outlet />
    </div>
  );
};

export const StageInfo = () => {
  const params = useParams();
  return <p>Stage info page for id {params.stageId}</p>;
};
