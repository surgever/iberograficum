import { Outlet } from 'react-router-dom';
import EpiList from '@/components/EpiList';

const Epi = props => {
    return (
      <>
        <EpiList  epiDB={props.epiDB} />
        <Outlet />
      </>
    );
  };
export default Epi;
  