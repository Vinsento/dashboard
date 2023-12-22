import Dashboard from "./icons/Dashboard";
import Product from "./icons/Product";
import User from "./icons/User";
import Wallet from "./icons/Wallet";
import Discount from "./icons/Discount";
import Help from "./icons/Help";
import RightArrow from "./icons/RightArrow";
import {ROUTES} from "../../config/Routes"
import { NavbarButton } from "../NavbarButton";
import "./Menu.scss"

export const Menu = () => {
  const menu = [
    {icon: <Dashboard/>, title: "Dashboard", to:ROUTES.dashboard},
    {icon: <Product />, title: "Product", to:ROUTES.product},
    {icon: <User />, title: "Customers", to:ROUTES.customers},
    {icon: <Wallet />, title: "Income", to:ROUTES.wallet},
    {icon: <Discount />, title: "Promote", to:ROUTES.promote},
    {icon: <Help />, title: "Help", to:ROUTES.help}
  ]

  return ( 
    <div className="menu">
      {menu.map(({icon, title, to}) => {
        return (
          <NavbarButton className="menu__item" key={title} to={to}>
            <div className="menu__icon">
              {icon}
            </div>
            <p className="menu__label">{title}</p>
            {title !== "Dashboard" && <RightArrow />}
          </NavbarButton>
        )
      })}
    </div>
   );
}