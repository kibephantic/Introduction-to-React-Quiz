import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const Users = users.map((user) => {
  return <h1 key = {user.id}> {user.name} </h1>

})

// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>
    <h1>This is children content</h1>
    </div>;
}
//child component

  //Challenge: Uncomment this code to complete quiz

function child() {
  function changeitUp() {
    function handleChange (Event){
      console.log (`${Event.target.value} ${Event.target.setValue}`);
    }
  }
  
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
      
      <select value = "filter" onChange >
        <option value = "all"> Select a filter</option>
        </select>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  function Parent () {
    function handleSubmit(event){
      event.preventDefault();
      console.log("Submit");
    }
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>

  
     <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
//Uncomment this to tackle quiz

// Comment out after completion
function parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion
//parent component

function App() {
  const [] = React.useState(true);
  return (
    
    <>
    
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" className="App-logo" alt="logo" />
      <h3>JSX is cool!</h3>
      <ul></ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
