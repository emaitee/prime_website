'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "site-navigation d-flex justify-content-end align-items-center" },
        React.createElement(
          "ul",
          { className: "d-flex flex-column flex-lg-row justify-content-lg-end align-items-center" },
          React.createElement(
            "li",
            { className: "current-menu-item" },
            React.createElement(
              "a",
              { href: "index.html" },
              "Home"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "about.html" },
              "About PSC"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "services.html" },
              "Services"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "news.html" },
              "News"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "contact.html" },
              "Contact"
            )
          ),
          React.createElement(
            "li",
            { className: "" },
            React.createElement(
              "a",
              { "data-toggle": "modal", "data-target": "#login", href: "#" },
              "Login"
            )
          ),
          React.createElement(
            "li",
            { className: "call-btn button gradient-bg mt-3 mt-md-0" },
            React.createElement(
              "a",
              {
                className: "d-flex justify-content-center align-items-center",
                href: "#" },
              React.createElement("img", { src: "images/emergency-call.png" }),
              "(+234) 08099430555"
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

var domContainer = document.querySelector('#react-navbar');
ReactDOM.render(React.createElement(NavBar, null), domContainer);