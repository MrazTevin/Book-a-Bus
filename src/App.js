import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Dashboard/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <BrowserRouter>
            <Routes>
                <Route path = "/HomePage">
                    <HomePage/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
