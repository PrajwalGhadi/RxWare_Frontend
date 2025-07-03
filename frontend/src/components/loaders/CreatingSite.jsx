import slide1 from "../../assets/siteLoading/slide1.png";
import slide2 from "../../assets/siteLoading/slide2.png";
import slide3 from "../../assets/siteLoading/slide3.png";
import slide4 from "../../assets/siteLoading/slide4.png";

const slides = [
  {
    img: slide1,
    text: "Smart Storage",
    subtext: "We help organize warehouse inventory effectively.",
  },
  {
    img: slide2,
    text: "Live Tracking",
    subtext: "Real-time updates across your WMS system.",
  },
  {
    img: slide3,
    text: "Smart Dashboard",
    subtext: "Dashboards tailored for business decisions.",
  },
  {
    img: slide4,
    text: "Secure System",
    subtext: "Protected with enterprise-grade security layers.",
  },
];

const CreatingSite = ({ progress, step, setStep }) => {
  return (
    <>
      <h2 style={{ fontWeight: 400 }}>Creating your Site</h2>
      <p className="subtitle">
        Setting up your workspace, this will just take a moment!
      </p>

      <div className="progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="progress-status-wrapper">
          <p className="progress-status">{progress}%</p>
        </div>
      </div>

      <p className="small-note">
        Almost done setting up your RxWare space. Please don’t refresh.
      </p>

      <div className="slide-wrapper">
        <div className="slide-content">
          <div className="image-slider">
            <button
              className="arrow left"
              onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            >
              &#10094;
            </button>

            <img className="slide-img" src={slides[step].img} alt="Step" />

            <button
              className="arrow right"
              onClick={() =>
                setStep((prev) => Math.min(prev + 1, slides.length - 1))
              }
            >
              &#10095;
            </button>
          </div>
          <div className="slide-caption">
            <p className="slide-text">{slides[step].text}</p>
            <p className="slide-subtext">{slides[step].subtext}</p>
          </div>
        </div>
      </div>

      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${step === idx ? "active" : ""}`}
            onClick={() => setStep(idx)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default CreatingSite;
