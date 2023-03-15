import Countdown from "react-countdown";

const Nav = () => {
  const Completionist = () => <span>You are good to go!</span>;
  return (
    <nav>
      <div className="logo">Exam App</div>
      <div className="left">
        <div className="timer">
          Time Left
          <span className="timer-counter">
            <Countdown date={Date.now() + 60000}>
              <Completionist />
            </Countdown>
          </span>
        </div>
        <div className="finish-test blue">Finish Test</div>
      </div>
    </nav>
  );
};
export default Nav;
