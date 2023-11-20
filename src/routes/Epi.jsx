import { NavLink, Outlet } from 'react-router-dom';


const Epi = () => {
    return (
      <>
        <nav className="navbar">
          <NavLink to="ullastret">Plomo de Ullastret</NavLink>
          <NavLink to="letreros"> Vaso de los letreros</NavLink>
        </nav>
        <Outlet />
      </>
    );
  };
export default Epi;
  