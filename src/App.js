import React from 'react';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Card from './components/Card/Card';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div>
      <Counter /> 
      <Header />
      <Jumbotron />
      <Card />
    </div>
    );
}

export default App;
