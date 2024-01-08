import React from 'react';

// aqui aprendi a exportar mas de un componente que este en el mismo archivo


const Mycomponent = (props) => {
    return (
        <div>
            <h1>My {props.name}</h1>
        </div>
    )
}


const Hijo = (props) => {
  return (
    <div>
      <h1>My {props.children}</h1>
    </div>
  );
};

export { Mycomponent, Hijo };

