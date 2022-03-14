import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Dashboard/HomePage';
import { BrowserRouter, Rout, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navigation/>
    </div>
  );
}

export default App;
