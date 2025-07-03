import completedImg from "../../assets/siteLoading/completed.png";
import tickk from "../../assets/siteLoading/tickk.png";

const CompleteSite = () => {
  return (
    <>
      <h2 style={{ fontWeight: 400 }}>Site created successfully!!</h2>

      <div className="progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `100%` }}></div>
        </div>

        <div className="progress-status-wrapper">
          <p className="progress-status">100%</p>
        </div>
      </div>

      <div className="completed-status-line">
        <span>Completed</span>
        <img src={tickk} alt="tick" className="tick-icon" />
      </div>

      <div className="completed-caption">
        <div className="image">
          <img className="completed-img" src={completedImg} alt="Completed" />
        </div>

        <p className="completed-heading">Check Your Email</p>
        <p className="completed-subtext">
          Your workspace credentials have been sent to your registered email.
          Please check your inbox. You'll be redirected to your workspace
          shortly.
        </p>
        <p className="redirecting">Redirecting...</p>
      </div>
    </>
  );
};

export default CompleteSite;
