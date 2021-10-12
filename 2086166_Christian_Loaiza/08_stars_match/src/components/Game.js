import React, { useState, useEffect } from 'react';
import utils from '../math_utils';

//Import components
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';

/** Custom Hook
  prexed with "use{name}"  this helps to identify it as hook
  Hooks have an order, the should call in the same order
  Part 4
*/
const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      // This create a new timer on each render, we must to remove timer
      // to avoid errors
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
    // Use Effect triggers everytime the component renders
    // console.log('Done Rendering')
    //return () => console.log('Component is going to rerender')
  });

  const setGameState = (newCandidatesNums) => {
    if (utils.sum(newCandidatesNums) !== stars) {
      setCandidateNums(newCandidatesNums);
    } else {
      const newAvailablesNums = availableNums.filter(
        (number) => !newCandidatesNums.includes(number),
      );
      //redraw number of starts
      setStars(utils.randomSumIn(newAvailablesNums, 9));
      setAvailableNums(newAvailablesNums);
      setCandidateNums([0]);
    }
  };
  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};

const Game = (props) => {
  // Part 4 deconstructing
  const { stars, availableNums, candidateNums, secondsLeft, setGameState } =
    useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';
  //const gameIsDone = availableNums.length === 0;
  //const gameIsLost = secondsLeft === 0;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus == 'used') {
      return;
    }

    //CandidateNums
    const newCandidatesNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((candidateNum) => candidateNum !== number);

    // Part 4 Use deconstructer variable
    setGameState(newCandidatesNums);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus != 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            // Number loop element should has a key
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
