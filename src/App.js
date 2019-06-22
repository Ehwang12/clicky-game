import React from 'react';
// components
import Card from './components/Card/Card';
import Header from './components/Header/Header';
// array for images
import characters from './JSON/arrayOne';

import Wrapper from './components/Wrapper/Wrapper';

// function arrayShuffler()
  //function that shuffles the JSON object array 
    //returns shuffled array

class App extends React.Component {
  
  state = {
    characters,
    Score: 0,
    Wins: 0,
    clicked: []
  }
  
  // clickHandler function
    //if image is clicked and it is not in initial clicked array
      //increase current score
      //increase wins by 1
      //set state of clicked array to new array that has clicked image
    //else
      //gameReset function is called

  // shuffleArray function
    //create variable that contains arrayShuffler(characters)
    //set state to new shuffled characters array
  
  // handleIncrement function
    //const newScore = this.state.currentScore + 1;
    //set state of score with newScore
  
  // gameReset function
    //function that resets game variables
    //this.setState = {
    //   characters,
    //   Score: 0,
    //   Wins: 0,
    //   clicked: []
    // }
  
  
  render() {
    return (
      <div>
        <Header 
          score={this.state.score}
          wins={this.state.wins}
        /> 
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
