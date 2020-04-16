import React from 'react';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './components/pages/Details';
import MenuBar from './components/layouts/MenuBar';
import MovieState from './context/movie/MovieState'
import './App.css';


function App() {

  return (
   <MovieState>
   <Router>
    <div className="App">
    <MenuBar/>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/movie/:name' exact component={Details}/>
     </Switch>
    </div>
    </Router>
    </MovieState>
  );
}

export default App;
