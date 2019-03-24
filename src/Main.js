'use strict';

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You Click This";
    }

    return (
      <span onClick={() => this.setState({ liked: true }) }>
        Read More
      </span>
    );
  }
}

let domContainer = document.querySelector('#readMore');
ReactDOM.render(<Me />, domContainer);