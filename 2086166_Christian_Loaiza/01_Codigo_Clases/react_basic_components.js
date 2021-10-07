// PRESENTACIÓN VUEJS


/**
 * One way flow data
 */

 function Button(props) {
  //const handleClick = () => {setCounter(counter+1)}; 
	return (
    <button onClick={props.onClickFUnction}>
      +1
    </button>
  );
}

//Display Component
function Display(props){
  return(
    <div>
      {props.message}
    </div>
  );
} 

function App () {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  return(
    <div>
      <Button onClickFUnction={incrementCounter}/>
      <Display message={counter}/>
    </div>
  )
}
ReactDOM.render(
  <App/>, 
  document.getElementById('mountNode'),
);

// ----------------------------- GENERIC COMPONENT ---------------------

function Button(props) {
  const handleClick = () => {
    props.onClickFUnction(props.increment)
  }; 
	return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

//DIsplay Component
function Display(props){
  return(
    <div>
      {props.message}
    </div>
  );
} 

function App () {
  const [counter, setCounter] = useState(42);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return(
    <div>
      
      <Button onClickFUnction={incrementCounter} increment={1 /*Use curly brace to pass type not only string*/}/> 
      <Button onClickFUnction={incrementCounter} increment={5}/>
      <Button onClickFUnction={incrementCounter} increment={10}/>
      <Button onClickFUnction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  )
}
ReactDOM.render(
  <App/>, 
  document.getElementById('mountNode'),
);

// ----------------------------- TREE RECONCILIATION ---------------------

const render = () => {
  document.getElementById('mountNode').innerHTML = `
	<div>
    Hello HTML
    <input />
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
`;

ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    'Hello React ',
    React.createElement('input', null),
    React.createElement('pre', null, (new Date).toLocaleTimeString())
  ),
  document.getElementById('mountNode2'),
);
}

setInterval(render, 1000);
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

// --------------- Cards APP --------------------

/*const testData = [
  {"name": "Don Abramov","avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4","company": "Facebook"},
  {"name": "Sophie Alpert","avatar_url": "https://avatars.githubusercontent.com/u/6820?v=4","company": "Facebook"},
  {"name": "Sebastian Mora","avatar_url": "https://avatars.githubusercontent.com/u/3?v=4","company": "Facebook"}
];*/

/*
const CardList = (props) => (
  <div>
    <Card {...testData[0]} />
    <Card {...testData[1]} />
  </div>
)
*/

//github usernames: gaearon, sophiebits, sebmarkbage, bvaughn, chrLoaiza
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
)

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img src={profile.avatar_url}/>
        <div className="info" style={{diplay:'inline-block', marginLeft:10}}>
          <div className="name" style={{fontSize:'120%'}}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

class Form extends React.Component {
  //userNameInput = React.createRef() //Create element ref like an ID
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault(); //Avoid page reload due to submit
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName:''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          //Value and onChange maintain everything in React
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          //ref={this.userNameInput} //This read from the DOM
          required
        />
        <button>Add card</button>
      </form>
    )
  }
}

class App extends React.Component {
  //Props and states are manage by the class
  state = { //Class components should have an init object
    profiles: []
  }; 
  
  addNewPropfile = (profileData) => {
    this.setState(prevState =>({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewPropfile}/>
        <CardList profiles={this.state.profiles}/>
     </div>
    )
  }
}


// Could pass classes to function using hooks
ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);