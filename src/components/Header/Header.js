import React from "react";
import './style.css';

class Header extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <nav className="navbar navbar-dark indigo">
        <span className="navbar-text white-text">The Clicky Game</span>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        <span className="navbar-text white-text">Wins: 0 | Score: {this.state.count}</span>
      </nav>
    );
  }
}

export default Header;
