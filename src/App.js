
import './App.css';
import UsingRefComponent from './components/UsingRefComponent';
import UseState from './components/UseState';
import { Mycomponent, Hijo } from "./components/mycomponents";
import { RenderizadoCondicional } from './components/mycomponents/Renderizado condicional';
import Imgg from './components/img';
import Estilo from './components/style';
import { Coco, Condiciones, Cuadrado, Input } from './styled-components/style';
import { Routes } from 'react-router';
import Routess from './applicacion/routes';




// function App() {
//   return (
//     <div className="App">
//       <UsingRefComponent />
//       <UseState />
//       <Mycomponent name="components cola  " />
//       <Estilo />
//       <Hijo> coca colaeeeeeeea </Hijo>
//       <RenderizadoCondicional />
//       <Cuadrado ></Cuadrado>
//       <Condiciones active={false} />
//       <Input placeholder="hola" maaxLenght="10" />
// <Coco/>
//       <Imgg />
//     </div>
//   );
// }

function App() {
  return (
    <Routess />
  )
}

export default App;
