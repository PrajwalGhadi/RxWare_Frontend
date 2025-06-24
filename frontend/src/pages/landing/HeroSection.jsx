import image1 from '../../assets/ourServicesImg/Tracking.png'
import image2 from '../../assets/ourServicesImg/Smart_Storage.png'
import image3 from '../../assets/ourServicesImg/Advance_Dashboard.png'
import image4 from '../../assets/ourServicesImg/Role_Based_Access.png'
import image5 from '../../assets/ourServicesImg/Order_Dispatch.png'
import image6 from '../../assets/ourServicesImg/Security_Lock.png'

const HeroSection = () => {

      let landingPageCards = [
    {
      imgSrc: image1,
      cardTitle: "Real Time Inventory Tracking",
      cardDescription:
        "Get real-time stock updates for every item received, picked, packed, or shipped—never lose track.",
    },

    {
      imgSrc: image2,
      cardTitle: "Smart Storage & Space Optimization",
      cardDescription:
        "Maximize warehouse space with smart pallet, shelf management, and optimal storage suggestions.",
    },

    {
      imgSrc: image3,
      cardTitle: "Advanced Dashboards & Reports",
      cardDescription:
        "Easily visualize data with custom reports, performance metrics, and analytics for smarter decisions.",
    },

    {
      imgSrc: image4,
      cardTitle: "Role-based Access Control",
      cardDescription:
        "Ensure security and efficiency by assigning roles to managers, workers, and auditors.",
    },

    {
      imgSrc: image5,
      cardTitle: "Order and Dispatch Automation",
      cardDescription:
        "Automate tasks from order to dispatch to reduce errors, speed up fulfillment, and boost customer satisfaction.",
    },

    {
      imgSrc: image6,
      cardTitle: "Secure Cloud-Based System",
      cardDescription:
        "Securely access warehouse data anytime, anywhere with reliable cloud storage and backup.",
    },
  ];

  return (
    <section className="heroSection" id='service'>
      <div className="content">
        <h1>Our Services</h1>
        
        <div className="multipleCards">
          {landingPageCards.map((item, index) => {
            return (
              <div key={index} className="cards">
                <div className="cardImage">
                  <img src={`${item?.imgSrc}`} alt="cardImages" />
                  <h1>{item?.cardTitle}</h1>
                </div>

                <div className="cardContent">
                  <p>{item?.cardDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
