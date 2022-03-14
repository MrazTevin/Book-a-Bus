import React, {useState} from 'React';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { HomePage } from './components/Dashboard/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const[token, setToken] = useState();
  return (
    <div className="App">
         {/* <Navigation/>  */}
        <BrowserRouter>
        <HomePage>
            <Routes>
                <Route index element ={<HomePage/>}></Route>
            </Routes>
        </HomePage>
        </BrowserRouter>
    </div>
  );
}

export default App;
