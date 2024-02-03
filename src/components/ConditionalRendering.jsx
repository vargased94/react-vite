import React from 'react';

// Can show item depend if is packed or not with these funcion examples.

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

function ItemTernary({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? name + ' ✔' : name}
    </li>
  );
}

function ItemLogical({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

function ConditionalRendering() {
  return (
    <section>
      <h1>Conditional Rendering</h1>
      <h2>Eduardo Ride's Packing List</h2>
      <ul>
        <Item 
          isPacked={true} 
          name="Shoes" 
        />
        <ItemTernary 
          isPacked={true} 
          name="Helmet" 
        />
        <ItemLogical 
          isPacked={false} 
          name="Infinity gaunlet" 
        />
        <Item 
          isPacked={false} 
          name="Infinity stones" 
        />
      </ul>
    </section>
  );
}

export default ConditionalRendering;