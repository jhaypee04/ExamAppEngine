const Nav = () => {
  return (
    <nav>
      <div className="logo">Exam App</div>
      <div className="left">
        <div className="timer">
          Time Left
          <span className="timer-counter">01:00</span>
        </div>
        <div className="finish-test blue">Finish Test</div>
      </div>
    </nav>
  );
};
export default Nav;
