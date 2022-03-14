import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Dashboard/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <BrowserRouter>
            <Switch>
                <Route path = "/HomePage">
                    <Dashboard/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
