import logo from './logo.svg';
import './App.css';
import Clock from "./Components/Clock";
import Greeting from "./Components/Greating";
import {NumberList} from "./Components/NumberList";

const name = "fugang"
const numbers = [1,2,3,4,5]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock name = {name} />

        <Greeting isLoggedIn = {true}></Greeting>
        <NumberList numbers = {numbers}></NumberList>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
