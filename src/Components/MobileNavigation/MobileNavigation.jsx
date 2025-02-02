import React from "react";
import "./MobileNavigation.css";
import Korzinka from "../../images/HeaderImages/Korzinka.svg";
import Home from "../../images/HeaderImages/Home.svg";
import { Link } from "react-router-dom";
import "react-modern-drawer/dist/index.css";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="links2">
        <Link to={'/'}>
          <img src={Home} alt="" />
          <p className="links_p2">Главная</p>
        </Link>
     
        <Link to={'/cart'}>
          <img src={Korzinka} alt="" />
          <p className="links_p2">Корзина</p>
        </Link>
      
        
      </div>
      
    </>
  );
};

export default MobileNavigation;
