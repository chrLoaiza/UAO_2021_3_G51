import React, { useState } from 'react';

// //Import components
// import Game from './Game';

// const StarMatch = () => {
//   const [gameId, setGameId] = useState(1);
//   // Changing the key component, react will unmount the all component
//   // reset the unmounted one and create a new component.
//   return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
// };

// export function App() {
//   return <StarMatch />;
// }

// //;

const PlayNumber = (props) => {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

const StarMatch = () => {
  const [starts, setStarts] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > starts;

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == 'used') {
      return;
    }
    const newCandidatesNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((candidateNum) => candidateNum !== number);

    if (utils.sum(newCandidatesNums) !== starts) {
      setCandidateNums(newCandidatesNums);
    } else {
      const newAvailablesNums = availableNums.filter(
        (number) => !newCandidatesNums.includes(number),
      );
      //Repintar las estrelas
      setStarts(utils.randomSumIn(newAvailablesNums, 9));
      setAvailableNums(newAvailablesNums);
      setCandidateNums([0]);
    }
  };

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {/* <div className="left">{createStarts()}</div> */}
          {utils.range(1, starts).map((starId) => {
            return <div key={starId} className="star" />;
          })}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => {
            return (
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
                onClick={onNumberClick}
              ></PlayNumber>
            );
          })}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

function createStarts() {
  const numbers = utils.range(1, 9);
  const starsHtml = [];
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    starsHtml.push(<div key={element} className="star" />);
  }
  return starsHtml;
}

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

export function App() {
  return <StarMatch />;
}
