import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatingSite from "../../components/loaders/CreatingSite";
import CompleteSite from "../../components/loaders/CompleteSite";


const CreateSiteLoader = () => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 25;
        if (next >= 100) {
          setCompleted(true);
          clearInterval(interval);

          // Added SetTimout so that After Reaching to last complete successfull page it should wait for 0.5sec {logic added just for user preference. No buisness impact}
          setTimeout(()=> {
            navigate('/')
          }, 1000)
          return 100;
        } else {
          setStep((prev / 25 + 1) < 4 ? prev / 25 + 1 : 3);
        }
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="csite-container">
      <div className="csite-content">
        {!completed ? (
          <CreatingSite progress={progress} step={step} setStep={setStep} />
        ) : (
          <CompleteSite />
        )}
      </div>
    </div>
  );
};

export default CreateSiteLoader;
