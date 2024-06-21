import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button />
    </div>
  );
}

function Button() {
  const buttonText = "click with React";

  return (
    <button type="button" onClick={() => console.log("Hello World")}>
      {buttonText}
    </button>
  );
}




export default App;
