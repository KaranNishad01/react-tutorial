/* import React from 'react'; */

function ListComponent() {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ];

  return (
    <>
    <ul>
      <h1>
        This is list page
      </h1>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    </>
  );
}

export default ListComponent;
