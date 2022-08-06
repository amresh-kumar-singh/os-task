import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./Pages/Course";
import Staff from "./Pages/Staff";
import Student from "./Pages/Student";
import SchoolProvider from "./context";
import StudentDetail from "./Pages/Student/StudentDetail";
function App() {
  return (
    <div className="App">
      <SchoolProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/courses" element={<Course />} />
            <Route path="/staffs" element={<Staff />} />
            <Route path="/students" element={<Student />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/*" element={<Course />} />
          </Routes>
        </Router>
      </SchoolProvider>
    </div>
  );
}

export default App;
