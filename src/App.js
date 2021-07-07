//import React from 'react'; = only used if using class
import Header from "./components/Header";

function App() {
const name = 'Brad'
const x = true

  return (
    <div className='container'>
      <h1>Hello from {name}</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
      <Header title="Hello"/> 
    </div>
  );
}

//class App extends React.Component {
//render() {
//  return <h1>Class in use</h1>
//}
//}

export default App;
