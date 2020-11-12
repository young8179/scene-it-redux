// import { NavLink, Route} from 'react-router-dom'
import './App.css';
import { Button, Container, Grid, IconButton, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import Card from './components/MovieCard';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import { loaded, loading, setData } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
  
  
  const movies = useSelector((state)=> state.results)

  

  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/favorites" component={Favorites}/>

      </Switch>
    </Container>
  );
}

export default App;
