import logoImg from "../../assets/whiteFont_logo_img.png";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-container">
        <div className="footer-logo">
          <img src={logoImg} alt="logoImg" />
        </div>
        <div className="footer-service">
          <h1>Services</h1>
          <div className="footer-links">
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
        </div>
        <div className="footer-company">
          <h1>Company</h1>
          <div className="footer-links">
            <p>About us</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="footer-contact">
          <h1>Contact</h1>
          <div className="footer-links">
            <p className="details"><IoIosCall className="callIcon"/>+91 7640 80 80 80</p>
            <p className="details"><IoLocationSharp className="locationIcon"/>57, Swastik Residency, GB Road, Thane west</p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer-bottom-container">
        <p>© 2025 Rigelx. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
