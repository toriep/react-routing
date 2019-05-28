import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

const chooseRandomAnimal = () => {
  const animals = ['weddell seal', 'red panda', 'snow lynx', 'platypus', 'polar bear']
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const Home = () => (
  <>
    <h1>This is the home page</h1>
  </>
);

const Food = () => (
  <>
    <h1>Seafood and soups are my favorites</h1>
  </>
);

const Animal = () => (
  <>
    <h1>My favorite animal is the {chooseRandomAnimal()}</h1>
  </>
);

const NoMatchPage = () => (
  <>
    <h1>404 Not Found. Page does not exist.</h1>
  </>
);

const App = () => {
  return (
    <>
      <ul id='navBar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/food'>Food</Link></li>
        <li><Link to='/animal/:animal'>Animal</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/food' component={Food} />
        <Route path='/animal/:animal' component={Animal} />
        <Route component={NoMatchPage}/>
      </Switch>
    </>
  );
};

export default App; 
