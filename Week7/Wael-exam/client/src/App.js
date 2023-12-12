
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Update from "./components/Update"
import ShowOne from "./components/ShowOne"





function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/create" >Create</Link>


      <Routes>

        {/* Read ALL  */}
        <Route path="/notes" element={<Dashboard />} />

        {/* CREATE  */}
        <Route path="/notes/create" element={<Create />} />

        {/* Update  */}
        <Route path="/notes/:id/edit" element={<Update />} />

        {/* Read One */}
        <Route path="/notes/:id" element={<ShowOne />} />

      </Routes>
    </div>
  );
}

export default App;
