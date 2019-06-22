import React from "react";
import '../Header/style.css';

class Header extends React.Component {
  
  render() {
    return (
      <nav className="navbar navbar-dark indigo">
        
          {/* title */}
          <img className="clicky-font" src="https://fontmeme.com/permalink/190622/9abb645554248ae6a5b12de539fa6da3.png" alt="the-lord-of-the-rings-font" border="0" /> 
          

          {/* Wins */}
          <img className="clicky-score float-right" src="https://fontmeme.com/permalink/190622/83572698e4378165114334818cf914fb.png" alt="the-lord-of-the-rings-font" border="0"/>
            <span className="score-num">0</span>

          {/* Score */}
          <img className="clicky-score float-right" src="https://fontmeme.com/permalink/190622/588eeea596e512563e99cf4c7509eb63.png" alt="the-lord-of-the-rings-font" border="0"/>
            <span className="score-num">0</span>
          
        
      </nav>
    );
  }
}

export default Header;
