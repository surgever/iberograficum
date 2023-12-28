import { Outlet } from 'react-router-dom';
import EpiList from '@/components/EpiList';

const Epi = () => {
    return (
      <>
        <EpiList />
        <Outlet />
      </>
    );
  };
export default Epi;
  