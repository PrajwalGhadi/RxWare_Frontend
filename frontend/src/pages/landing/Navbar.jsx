import {NavLink} from 'react-router-dom'
import logoImg from '../../assets/newLogoImage.png'

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
    ]

  return (
    <nav className="navbar">
      <div className="image">
        <img src={logoImg} alt="LogoImg" />
      </div>

      <div className="NavLinks">
        {navlinks.map((item, index) => {
            return (
              <NavLink key={index} to={item.path} className="links">{item.title}</NavLink>
            )
        })}
      </div>
    </nav>
  );
};

export default Navbar;
