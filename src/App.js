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
    testArray: ArrayOne
  }
  
  
  
  
  render() {
    return (
      <div>
        <Header /> 
        {/* <Jumbotron /> */}
      
        <Wrapper>
        <div className="row">
          {this.state.testArray.map(row => (
            <Card 
              key={row.id}
              id={row.id}
              name={row.name}
              imgUrl={row.image}
            />
          ))}
        </div>

        </Wrapper>
      </div>
      );
  }
  
}

export default App;
