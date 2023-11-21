
import { Link, Route, Routes } from 'react-router-dom';

import Contact from "./components/Contact"

import Form from "./components/Form"
import Heroes from "./components/Heroes.jsx"

import './App.css';
import Error from './components/Error.jsx';

function App() {
  return (
    <fieldset className="App">
      <legend>Routing</legend>
      {/* // React Don't use Anquer tags */}
      {/* <a href='/Home'>Home 🏠</a> */}

      <Link to="/" >Home 🏠</Link>
      <Link to="/contact" >Contact 📲</Link>
      <Link to="/form" >Form 🔡</Link>
      <Link to="/hero/" >Hero 🦸‍♀️🦸‍♂️</Link>

      {/* Masra7 */}
      <Routes>
        {/* Act1 */}
        <Route path="/contact" element={<Contact />} />
        {/* Act2 */}
        <Route path="/form" element={<Form />} />
        {/* Act3 */}
        <Route path="/hero/:id" element={<Heroes />} />
        <Route path="/Error" element={<Error />} />

      </Routes>






    </fieldset>
  );
}

export default App;
