
import './App.css';
import UsingRefComponent from './components/UsingRefComponent';
import UseState from './components/UseState';
import { Mycomponent, Hijo } from "./components/mycomponents";



function App() {
  return (
    <div className="App">
      <UsingRefComponent />
      <UseState />
      <Mycomponent name="components cola  " />
      <Hijo> coca colaeeeeeeea </Hijo>
    </div>
  );
}

export default App;
