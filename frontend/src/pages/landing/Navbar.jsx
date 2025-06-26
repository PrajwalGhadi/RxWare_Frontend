import { NavLink } from "react-router-dom";
import logoImg from "../../assets/newLogoImage.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const navlinks = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "Services",
      path: "#services",
    },

    {
      title: "About",
      path: "/about",
    },

    {
      title: "Contact Us",
      path: "contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState();

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="image">
        <img src={logoImg} alt="LogoImg" />
      </div>

      <div className="NavLinks">
        {navlinks.map((item, index) => {
          return (
            <NavLink key={index} to={item.path} className="links">
              {item.title}
            </NavLink>
          );
        })}
      </div>

      {/* <div className='mobile-tablet-Navlink'>
        <FiMenu onClick={openMenu}/>

        {isMenuOpen ? (
        <div className={`mobile-tablet-menu-page ${isMenuOpen ? "active" : ""}`}>
          <h1>Home</h1>
          <div className='Services'>
            <h1>Services</h1>
             {[
              "Real time Inventory Tracking",
              "Smart Storage & Space Optimization",
              "Advanced Dashboards & Reports",
              "Role based Access Control",
              "Order and Dispatch Automation",
              "Secure Cloud Based System",
            ].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
        ) : ""}        
      </div> */}

      <div className="mobile-tablet-Navlink">
        {isMenuOpen ? (
          <AiOutlineClose
            onClick={openMenu}
            className={`menu-icon ${isMenuOpen ? "open" : "close"}`}
          />
        ) : (
          <FiMenu
            onClick={openMenu}
            className={`menu-icon ${!isMenuOpen ? "open" : "close"}`}
          />
        )}

        {/* Menu is always present; visibility controlled by `active` class */}
        <div
          className={`mobile-tablet-menu-page ${isMenuOpen ? "active" : ""}`}
        >
          <h1>Home</h1>
          <div className="Services">
            <h1>Services</h1>
            {[
              "Real time Inventory Tracking",
              "Smart Storage & Space Optimization",
              "Advanced Dashboards & Reports",
              "Role based Access Control",
              "Order and Dispatch Automation",
              "Secure Cloud Based System",
            ].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
