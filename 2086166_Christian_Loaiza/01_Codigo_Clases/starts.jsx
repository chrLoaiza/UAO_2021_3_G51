/* CSS

.game {
  max-width: 500px;
  margin: 0 auto;
}

.body {
  display: flex;
}

.help {
  color: #666;
  margin: 10px;
  text-align: center;
}

.left {
  text-align: center;
  width: 50%;
  border: thin solid #ddd;
}

.right {
  text-align: center;
  padding: 10px;
  width: 50%;
  border: thin solid #ddd;
}

.star {
	display: inline-block;
  margin: 0 15px;
}

.star:after {
  content: "\2605";
  font-size: 45px;
}

.number {
  background-color: #eee;
  border: thin solid #ddd;
  width: 45px;
  height: 45px;
  margin: 10px;
  font-size: 25px;
}

.number:focus, .number:active {
  outline: none;
  border: thin solid #ddd;
}

.timer {
	color: #666;
  margin-top: 3px;
  margin-left: 3px;
}

.game-done .message {
  font-size: 250%;
  font-weight: bold;
  margin: 15px;
}*/

/**
 * 
 * REACT DATA
 */
// STAR MATCH - Starting Template

const StarMatch = () => {
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <div className="right">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

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
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

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

ReactDOM.render(<StarMatch />, mountNode);

/** ---------------------Part two -------------------------------------*/

// We could call it number but will overwirite Javascript Number object
const PlayNumber = props => (
  //No key is need it bacuse is a component
  //Key should be add immediately in the loop
  
  <button class="number" onClick={() => console.log('Num', props.number)}>{props.number}</button>
  // onClick works for each number due to closure, every number act from their componente scope 
)

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map(starId =>
            <div key={starId} className="star"/>
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map( number =>
            // Number loop element should has a key
            <PlayNumber key={number} number={number} />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

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
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

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

ReactDOM.render(<StarMatch />, mountNode);

/** ---------------------------------------Part 3---------------------------------------- */

const PlayNumber = props => (
  //No key is need it bacuse is a component
  //Key should be add immediately in the loop
  
  <button 
    class="number"
    style = {{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
  // onClick works for each number due to closure, every number act from their componente scope 
)

const PlayAgain = props => (
  <div class="game-done">
    <div 
      className="message"
      style = {{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Awesome!'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
)

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star"/>
    )}
  </>
);
const Game = (props) => {
  const [stars, setStars] = useState(utils.random(1,9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  useEffect(()=> {
    if(secondsLeft > 0){
      // This create a new timer on each render, we must to remove timer
      // to avoid errors 
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft -1);
      }, 1000)
      return () => clearTimeout(timerId);
    }
    // Use Effect triggers everytime the component renders
   // console.log('Done Rendering')
    //return () => console.log('Component is going to rerender')
  })
  
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';
  //const gameIsDone = availableNums.length === 0;
  //const gameIsLost = secondsLeft === 0;
  
  const resetGame = () =>{
    setStars(utils.random(1,9));
    setAvailableNums(utils.range(1,9));
    setCandidateNums([]);
  }
  const numberStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used';
    }
    if(candidateNums.includes(number)){
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  }
  

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus == 'used'){
      return;
    }

    //CandidateNums
    const newCandidatesNums = 
          currentStatus === 'available'
            ? candidateNums.concat(number)
            : candidateNums.filter(candidateNum => candidateNum !== number);
  
    if (utils.sum(newCandidatesNums) !== stars) {
      setCandidateNums(newCandidatesNums);
    } else {
      const newAvailablesNums = availableNums.filter(
        number => !newCandidatesNums.includes(number)
      );
      //redraw number of starts
      setStars(utils.randomSumIn(newAvailablesNums, 9));
      setAvailableNums(newAvailablesNums);
      setCandidateNums([0]);
    }
  }
  
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus != 'active'
            ? (<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>)
            : (<StarsDisplay count={stars}/>)
          }
        </div>
        <div className="right">
          {utils.range(1, 9).map( number =>
            // Number loop element should has a key
            <PlayNumber 
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

const StarMatch = ()=> {
  const [gameId, setGameId] = useState(1);
  // Changing the key component, react will unmount the all component
  // reset the unmounted one and create a new component.
  return <Game key={gameId} startNewGame={() => setGameId(gameId +1)}/>;
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
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

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

ReactDOM.render(<StarMatch />, mountNode);

/** --------------------------Part 4-------------------------------- */

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star"/>
    )}
  </>
);

const PlayNumber = props => (
  //No key is need it bacuse is a component
  //Key should be add immediately in the loop
  
  <button 
    class="number"
    style = {{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
  // onClick works for each number due to closure, every number act from their componente scope 
)

const PlayAgain = props => (
  <div class="game-done">
    <div 
      className="message"
      style = {{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Awesome!'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
)

/** Custom Hook
  prexed with "use{name}"  this helps to identify it as hook
  Hooks have an order, the should call in the same order
  Part 4
*/
const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1,9));
  const [availableNums, setAvailableNums] = useState(utils.range(1,9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  useEffect(()=> {
    if(secondsLeft > 0 && availableNums.length > 0){
      // This create a new timer on each render, we must to remove timer
      // to avoid errors 
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft -1);
      }, 1000)
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
          number => !newCandidatesNums.includes(number)
        );
        //redraw number of starts
        setStars(utils.randomSumIn(newAvailablesNums, 9));
        setAvailableNums(newAvailablesNums);
        setCandidateNums([0]);
      }
  }
  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
}

const Game = (props) => {
  // Part 4 deconstructing
  const { 
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();
  
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';
  //const gameIsDone = availableNums.length === 0;
  //const gameIsLost = secondsLeft === 0;
  
  const numberStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used';
    }
    if(candidateNums.includes(number)){
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  }
  
  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus == 'used'){
      return;
    }

    //CandidateNums
    const newCandidatesNums = 
          currentStatus === 'available'
            ? candidateNums.concat(number)
            : candidateNums.filter(candidateNum => candidateNum !== number);
  
    // Part 4 Use deconstructer variable
    setGameState(newCandidatesNums);
  }
  
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus != 'active'
            ? (<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>)
            : (<StarsDisplay count={stars}/>)
          }
        </div>
        <div className="right">
          {utils.range(1, 9).map( number =>
            // Number loop element should has a key
            <PlayNumber 
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

const StarMatch = ()=> {
  const [gameId, setGameId] = useState(1);
  // Changing the key component, react will unmount the all component
  // reset the unmounted one and create a new component.
  return <Game key={gameId} startNewGame={() => setGameId(gameId +1)}/>;
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
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

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

ReactDOM.render(<StarMatch />, mountNode);
