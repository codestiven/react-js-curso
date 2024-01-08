import logo from './logo.svg';
import './App.css';
import UsingRefComponent from './components/UsingRefComponent';
import UseState from './components/UseState';
import Mycomponent from './components/mycomponents';

function App() {
  return (
    <div className="App">
      <UsingRefComponent />
      <UseState />
      <Mycomponent />
    </div>
  );
}

export default App;
