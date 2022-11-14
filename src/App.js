import { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [objectList, setObjectList] = useState([]);

  const nameValue = useRef('');
  const valueValue = useRef('');

  const handleClick = () => {
    setObjectList((list) => [
      ...list,
      { name: nameValue.current, value: valueValue.current },
    ]);
  };

  return (
    <div className='App'>
      <div
        style={{
          fontSize: '18px',
          color: 'azure',
        }}
      >
        <div style={{ display: 'flex', margin: 20 }}>
          <p>Name: </p>
          <input
            onChange={(event) => {
              nameValue.current = event.target.value;
            }}
          />
        </div>
        <div style={{ display: 'flex', margin: 20 }}>
          <p>Value: </p>
          <input
            onChange={(event) => {
              valueValue.current = event.target.value;
            }}
          />
        </div>
        <button type='button' onClick={handleClick}>
          Submit!
        </button>
      </div>
      <div style={{ color: 'white' }}>
        <p>List:</p>
        <p>[{objectList.map((item) => `${item.name}, `)}]</p>
      </div>
      <div style={{ color: 'white' }}>
        <p>Sum:</p>
        <p>
          {objectList.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.value),
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default App;
