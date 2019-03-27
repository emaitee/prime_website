'use strict';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    //   <nav className="site-navigation d-flex justify-content-end align-items-center">
        <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
          <li className="current-menu-item">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About PSC</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="news.html">News</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>

          <li className="">
            <a data-toggle="modal" data-target="#login" href="#">
              Login
            </a>
          </li>

          <li className="call-btn button gradient-bg mt-3 mt-md-0">
            <a
              className="d-flex justify-content-center align-items-center"
              href="#">
              <img src="images/emergency-call.png" />
              (+234) 08099430555
            </a>
          </li>
        </ul>
    //   </nav>
    );
  }
}

let domContainer = document.querySelector('#react-navbar');
ReactDOM.render(<NavBar />, domContainer);
