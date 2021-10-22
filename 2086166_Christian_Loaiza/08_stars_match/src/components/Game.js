import React, { useState, useEffect } from 'react';
import utils from '../math_utils';
import PlayAgain from './PlayAgain';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';

/**
 * @function useStateGame
 * Custom Hook
 * prexed with "use{name}"  this helps to identify it as hook
 * Hooks have an order, the should call in the same order
 */
const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondLeft, setSecondLeft] = useState(10);

  useEffect(() => {
    // This create a new timer on each render, we must to remove timer
    // to avoid errors
    if (secondLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondLeft(secondLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
      // Use Effect triggers everytime the component renders
      // console.log('Done Rendering')
      //return () => console.log('Component is going to rerender')
    }
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
  return { stars, availableNums, candidateNums, secondLeft, setGameState };
};

const Game = (props) => {
  const { stars, availableNums, candidateNums, secondLeft, setGameState } =
    useGameState();
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? 'won' : secondLeft === 0 ? 'lost' : 'active';

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus == 'used') {
      return;
    }
    const newCandidatesNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((candidateNum) => candidateNum !== number);

    // Use decontructer function
    setGameState(newCandidatesNums);
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
          {gameStatus != 'active' ? (
            <PlayAgain gameStatus={gameStatus} onClick={props.startNewGame} />
          ) : (
            <StarsDisplay count={stars} />
          )}
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
      <div className="timer">Time Remaining: {secondLeft}</div>
    </div>
  );
};

export default Game;
