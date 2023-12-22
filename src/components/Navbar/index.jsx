import Logotype from "../Logotype";
import avatar from "../../assets/user_avatar.jpg"
import { Menu } from "../Menu";
import "./Navbar.scss"

export const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="navbar__logotype">
        <div className="navbar__logo-box">
          <Logotype className="navbar__logo"/>
          <p className="navbar__title">Dashboard</p>
        </div>
        <p className="navbar__version">v.01</p>
      </div>
      <div className="navbar__navigation">
        <Menu />
      </div>
      <div className="navbar__user">
        <div className="navbar__avatar">
          <img src={avatar} alt="user photo" />
        </div>
        <div className="navbar__user-info">
          <p className="navbar__userName">Evano</p>
          <p className="navbar__userPosition">Project Manager</p>
        </div>
      </div>
    </div> 
  );
}