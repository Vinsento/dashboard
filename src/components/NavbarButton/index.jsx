import { NavLink } from 'react-router-dom';

export const NavbarButton = ({className, children, to}) => {
  return ( 
    <NavLink 
      className={className}
      to={to}
    >
      {children}
    </NavLink>
   );
}