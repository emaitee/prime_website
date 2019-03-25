'use strict';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  render() {
    return (
      <form action="#" className="login-form text-left">
        <div className="form-group mb-4">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            className="form-control"
            value={this.state.username}
            onChange={({ target }) => this.setState({ email: target.value })}
          />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Min 8 characters"
            className="form-control"
            value={this.state.password}
            onChange={({ target }) => this.setState({ password: target.value })}
          />
        </div>
        <div>{`${this.state.email} ${this.state.password}`}</div>
        <div className="form-group offset-xs-5 offset-sm-5 offset-md-5 offset-lg-5">
          <input type="submit" value="Login" className="btn btn-primary" />
          <button
            type="button"
            data-dismiss="modal"
            id="close"
            className="btn btn-danger">
            close
          </button>
        </div>
      </form>
    );
  }
}

let domContainer = document.querySelector('#react-form');
ReactDOM.render(<Form />, domContainer);
