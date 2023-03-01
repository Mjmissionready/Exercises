// import useState and useEffect from react

function App() {
  // create a useState which stores the value of whatever we input into the text box
  // Q:what type of variable is this going to be?
  // create another useState which will be used to track wether or not something or nothing is inside our first state
  // Q: what kind of variable is this going to be?
  // PROTIP: when creating variable names, try to make it as descriptive as possible

  useEffect(() => {
    // This useEffect will be triggered every time the input values change
    // write an if/else statement which checks if there is something in our input values state
    // if something is there then our second state (whatever you called it) should be SET to true, and if not, it should be SET to false
  }, []); // our dependency array will need to be whatever we have called the useState which stores our text input value

  // write a function with is triggered by changes to the text box input. This will need to go into the onChange attribute of your text input.
  // the function takes in a parameter called "event" or "e" for short and inside the function SETS our input useState to event.target.value (OR e.target.value)
  // you can use arrow or traditional function format - I personally prefer arrow for this as that's what I'm more familiar with

  return (
    <div>
      <h1>Enter a value:</h1>
      <input
        type="text"
        value={"a state variable goes here"}
        onChange={"a function goes here"}
      />
      {/* we'll need to set a value and onChange attribute inside our input. Think about what value needs to be point to and set onChange to whatever you've called your function which handles changes above */}

      <div>
        <h2>Input value:</h2>
        <p>{"something that contains our input values"}</p>
      </div>
      {/* The div above will need to be conditionally rendered so that it displays when we've typed something in to the text input but NOT if it is empty */}
    </div>
  );
}

export default App;
