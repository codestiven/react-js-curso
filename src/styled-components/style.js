import styled , { css , createGlobalStyle} from "styled-components";
















const descktopstart = "768px";

const descktop = `@media (min-width: ${descktopstart})`;
const movile = `@media (max-width: ${descktopstart})`;

export const GlobalStyle = createGlobalStyle` 

  body {
    background: #999;
    margin: 0px;
  }
  
  `;


const Texto = css`
  color: red;
  font-size: 500px;
  background: red;
  
  ${movile} {
    color: blue;
    background: blue;
    width: 100%;
  }
`;

export const Cuadrado = styled.div`
width: 100px;
height: 100px;
background: pink;

&:hover {

    ${Texto};
}
`;

export const Condiciones = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ active }) => (active ? "red" : "blue")};


`;


export const Input = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
  maxLenght: props.maaxLenght,
}))`
  width: 100%;
`;




export const Coco = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
  maxLenght: props.maaxLenght,
}))`
  width: 100%;

`;



