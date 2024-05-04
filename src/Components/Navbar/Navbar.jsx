import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-head">
        <img
          src="https://t3.ftcdn.net/jpg/04/75/01/06/360_F_475010683_QcMoX9EuZkjVToNNtXCDbejMo4tIj06i.jpg"
          alt=""
          width="50px"
        />
        <h1>Hootsuite</h1>
        <ul className="nav-list">
          {/* <li id="item0" className="nav-list-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </li> */}
          <li className="nav-list-item" id="item1">
            Platform
          </li>
          <li className="nav-list-item" id="item2">
            Plans
          </li>
          <li className="nav-list-item" id="item3">
            Enterprise
          </li>
          <li className="nav-list-item" id="item4">
            Resource
          </li>
          <li className="nav-list-item" id="item5">
            Education
          </li>
        </ul>
      </div>
      <div className="nav-btn-box">
        <button className="nav-btn" id="contact">Contact Us</button>
        <button className="nav-btn" id="log">Log in</button>
        <button className="nav-btn" id="sign">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
