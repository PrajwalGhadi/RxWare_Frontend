import { useEffect, useState } from "react";
import slide1 from '../../assets/siteLoading/slide1.png'
import slide2 from '../../assets/siteLoading/slide2.png'
import slide3 from '../../assets/siteLoading/slide3.png'
import slide4 from '../../assets/siteLoading/slide4.png'
import tickk from '../../assets/siteLoading/tickk.png'
import completedImg from '../../assets/siteLoading/completed.png'
import { useNavigate } from "react-router-dom";

const slides = [
  {
    img: slide1,
    text: "You'll be signing with your credentials",
    subtext: "Sign in with your RXware credentials to continue",
  },
  {
    img: slide2,
    text: "Start by setting up your first warehouse",
    subtext: "Configure your first warehouse in RXware to start tracking stock",
  },
  {
    img: slide3,
    text: "Add your team and assign roles",
    subtext: "Invite your colleagues and set role access to manage operations",
  },
  {
    img: slide4,
    text: "Begin inventory import",
    subtext:
      "Optimize space and accelerate order fulfillment with smart inventory systems",
  },
];

const CreateSiteLoader = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 25;
        if (next >= 100) {
          setCompleted(true);
          clearInterval(interval);
          navigate('/')
          return 100;
        } else {
          const nextStep = prev / 25 + 1;
          setStep(nextStep < slides.length ? nextStep : slides.length - 1);
        }
        return next;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="csite-container">
      <div className="csite-content">
        {!completed ? (
          <>
            <h2 style={{ fontWeight: 400 }}>Creating your Site</h2>
            <p className="subtitle">
              Setting up your workspace, this will just take a moment!
            </p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="progress-status-wrapper">
              <p className="progress-status">{progress}%</p>
            </div>

            <p className="small-note">
              Almost done setting up your RxWare space. Please don’t refresh.
            </p>

            <div className="slide-wrapper">
              <button
                className="arrow left"
                onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
              >
                &#10094;
              </button>

              <div className="slide-content">
                <img className="slide-img" src={slides[step].img} alt="Step" />
                <div className="slide-caption">
                  <p className="slide-text">{slides[step].text}</p>
                  <p className="slide-subtext">{slides[step].subtext}</p>
                </div>
              </div>

              <button
                className="arrow right"
                onClick={() =>
                  setStep((prev) => Math.min(prev + 1, slides.length - 1))
                }
              >
                &#10095;
              </button>
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
        ) : (
          <>
            <h2 style={{ fontWeight: 400 }}>Site created successfully!!</h2>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `100%` }}></div>
            </div>

            <div className="progress-status-wrapper">
              <p className="progress-status">100%</p>
            </div>

            <div className="completed-status-line">
              <span>Completed</span>
              <img src={tickk} alt="tick" className="tick-icon" />
            </div>

            <img
              className="slide-img completed-img"
              src={completedImg}
              alt="Completed"
            />

            <div className="completed-caption">
              <p className="completed-heading">Check Your Email</p>
              <p className="completed-subtext">
                Your workspace credentials have been sent to your registered
                email. Please check your inbox. You'll be redirected to your
                workspace shortly.
              </p>
              <p className="redirecting">Redirecting...</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateSiteLoader;
