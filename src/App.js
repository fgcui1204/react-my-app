import logo from './logo.svg';
import './App.css';
import Clock from "./Components/Clock";
import Greeting from "./Components/Greating";
import {NumberList} from "./Components/NumberList";
import InputForm from "./Components/InputForm";
import SelectForm from "./Components/SelectForm";
import EffectHook from "./Components/EffectHook";

const name = "fugang"
const numbers = [1,2,3,4,5]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock name = {name} />

        <Greeting isLoggedIn = {true}></Greeting>
        <NumberList numbers = {numbers}></NumberList>

        <InputForm/>
        <SelectForm />

        <EffectHook />
      </header>
    </div>
  );
}

export default App;
