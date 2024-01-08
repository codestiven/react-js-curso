
import './App.css';
import UsingRefComponent from './components/UsingRefComponent';
import UseState from './components/UseState';
import { Mycomponent, Hijo } from "./components/mycomponents";
import { RenderizadoCondicional } from './components/mycomponents/Renderizado condicional';
import Imgg from './components/img';



function App() {
  return (
    <div className="App">
      <UsingRefComponent />
      <UseState />
      <Mycomponent name="components cola  " />
      <Hijo> coca colaeeeeeeea </Hijo>
      <RenderizadoCondicional />
      <Imgg />
    </div>
  );
}

export default App;
