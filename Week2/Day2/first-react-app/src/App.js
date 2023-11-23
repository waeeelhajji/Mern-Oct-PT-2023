
import './App.css';
import SecondeComponent from './components/SecondeComponent';

function App() {
  console.log("Hello From the Best stack Ever")
  const exp = 3
  const Bob = " Bob 🎈🎈🎈"
  const animals = ['🦁', "🦒", "🐫", "🐊", "🦓"]
  console.log(exp)
  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 100
  }
  return (
    <fieldset>
      <SecondeComponent />
      <SecondeComponent />
      <legend>SecondeComponent.jsx</legend>
      <h2>Another One 😏😏</h2>


    </fieldset>
  );
}

export default App;
