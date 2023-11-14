
import './App.css';
import Forms from './Components/Forms';

function App() {
  const animals = ["🦓", "🦒", "🦁", "🐫", "🐊"]




  return (
    <fieldset >
      <legend>App.jsx</legend>

      <Forms zoo={animals} />



    </fieldset>
  );
}

export default App;
