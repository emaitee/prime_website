'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

    _this.state = {
      email: '',
      password: '',
      isLoading: false
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'form',
        { action: '#', className: 'login-form text-left' },
        React.createElement(
          'div',
          { className: 'form-group mb-4' },
          React.createElement(
            'label',
            null,
            'Email address'
          ),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            placeholder: 'name@company.com',
            className: 'form-control',
            value: this.state.username,
            onChange: function onChange(_ref) {
              var target = _ref.target;
              return _this2.setState({ email: target.value });
            }
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group mb-4' },
          React.createElement(
            'label',
            null,
            'Password'
          ),
          React.createElement('input', {
            type: 'password',
            name: 'password',
            placeholder: 'Min 8 characters',
            className: 'form-control',
            value: this.state.password,
            onChange: function onChange(_ref2) {
              var target = _ref2.target;
              return _this2.setState({ password: target.value });
            }
          })
        ),
        React.createElement(
          'div',
          null,
          this.state.email + ' ' + this.state.password
        ),
        React.createElement(
          'div',
          { className: 'form-group offset-xs-5 offset-sm-5 offset-md-5 offset-lg-5' },
          React.createElement('input', { type: 'submit', value: 'Login', className: 'btn btn-primary' }),
          React.createElement(
            'button',
            {
              type: 'button',
              'data-dismiss': 'modal',
              id: 'close',
              className: 'btn btn-danger' },
            'close'
          )
        )
      );
    }
  }]);

  return Form;
}(React.Component);

var domContainer = document.querySelector('#react-form');
ReactDOM.render(React.createElement(Form, null), domContainer);