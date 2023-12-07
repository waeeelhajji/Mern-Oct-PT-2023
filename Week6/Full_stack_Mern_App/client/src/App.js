
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Dashbord from "./components/Dashbord"
import OneStudents from "./components/OneStudents"
import Create from "./components/Create"
import Update from "./components/Update"





function App() {
  return (
    <div className="App">
      <h1>Hello Full Stack</h1>

      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashbord />} />

        {/* Read One  */}

        <Route path="/student/:id" element={<OneStudents />} />

        {/* Create or Form  */}

        <Route path="/student/create" element={<Create />} />

        {/* Update  */}
        <Route path="/student/:id/update" element={<Update />} />
      </Routes>


    </div>
  );
}

export default App;
