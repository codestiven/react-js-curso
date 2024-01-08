import React from 'react'

export const RenderizadoCondicional = () => {
    const [coco, setCoco] = React.useState(true);
  return (
    <div>
      {coco ? <h1>Coco</h1> : <h1>Manzana</h1>}
    </div>
  );
}
