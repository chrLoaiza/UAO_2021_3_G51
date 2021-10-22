import React from 'react';

const PlayNumber = (props) => (
  //No key is need it bacuse is a component
  //Key should be add immediately in the loop
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    // onClick works for each number due to closure, every number act from their componente scope
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default PlayNumber;
