import React from "react";

function Jumbotron() {
  const style = {
    textAlign: "center",
    
    backgroundImage: "url(https://i.ytimg.com/vi/meK0G3o9mPw/maxresdefault.jpg)",
    backgroundPositionY: "40%"
  }
    return (
        <div className="jumbotron jumbotron-fluid" style={style}>
          <div className="container">
            <h2 className="display-4">Lord of the Rings</h2>
            <p className="lead">Try not to click the same image twice!</p>
          </div>
        </div>
    );
}

export default Jumbotron; 