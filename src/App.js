import React from 'react';
// components
// import Jumbotron from './components/Jumbotron/Jumbotron';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
// img arrays
import ArrayOne from './JSON/arrayOne';
// import ArrayTwo from './JSON/arrayTwo';
// import ArrayThree from './JSON/arrayThree';

import Wrapper from './components/Wrapper/Wrapper';

class App extends React.Component {
  
  state = {
    characters: ArrayOne,
    Score: 0,
    Wins: 0,
    clicked: []

  }
  
  
  
  
  render() {
    return (
      <div>
        <Header /> 
        {/* <Jumbotron /> */}
      
        <Wrapper>
        <div className="row">
          {this.state.characters.map(image => (
            <Card 
              key={image.id}
              id={image.id}
              name={image.name}
              imgUrl={image.image}
            />
          ))}
        </div>

        </Wrapper>
      </div>
      );
  }
  
}

export default App;
