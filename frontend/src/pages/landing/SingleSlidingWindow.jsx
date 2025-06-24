import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const SingleSlidingWindow = ({item}) => {

  const navigate = useNavigate();

  function navigateMe (str) {
    if (str === 'signUp') {
      navigate('/signup/email')
    }
    else {
      navigate('/signin')
    }
  }

  return (
    <>

      <div className="image">
        <img src={item.slidingImg} alt="" />
      </div>
      <div className="overlay">
        <h1>{item.slidingTitle}</h1>
        <p>{item.slidingDetails}</p>

        <div className="buttons">
          <button onClick={()=> {navigateMe('signUp')}} className={`${item.isSignUpBtn ? "signUp" : ""}`}>{item.isSignUpBtn ? (<><span>Sign Up</span> <GoArrowRight className="rightArrow"/></>) : ''}</button>
          <button onClick={()=> {navigateMe('signIn')}} className={`${item.isLoginBtn ? "signIn" : ""}`}>{item.isLoginBtn ? (<><span>Sign In</span></>) : ''}</button>
        </div>
      </div>
    </>
  );
};

export default SingleSlidingWindow;
