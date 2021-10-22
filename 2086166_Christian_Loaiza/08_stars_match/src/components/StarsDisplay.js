// Each component should import react and neccesaries
// Dependencies
import React from 'react';
import utils from '../math_utils';

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((starId) => {
        return <div key={starId} className="star"></div>;
      })}
    </>
  );
};

export default StarsDisplay;
