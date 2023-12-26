import Webcam from "react-webcam";
import './App.css';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Login Page</h1>
      <div className="Underline"></div>
      <div className="Login">
        <div className="inputs">
        <input type="text" placeholder="username"/>
        </div>
        <div className="inputs">
        <input type="password" placeholder="password"></input> 
        </div>
        <div className="contents">
          <button className="enter">Log in</button><br></br>
          <button className="new">Sign up</button>
          <Navlink to ="/signup">Sign up</Navlink>
          </div>
        </div> 
       </div>
  );
}

export default App;
