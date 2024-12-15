import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import JobListings from "./components/Joblistings";

// Additional Components
function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>User Management</li>
        <li>Activity Monitor</li>
        <li>Analytics Tools</li>
      </ul>
    </div>
  );
}

function RecruiterInterface() {
  return (
    <div>
      <h2>Recruiter Interface</h2>
      <ul>
        <li>Candidate Management</li>
        <li>Chat & Document Handling</li>
        <li>Analytics and Reports</li>
      </ul>
    </div>
  );
}

function CandidateInterface() {
  return (
    <div>
      <h2>Candidate Interface</h2>
      <ul>
        <li>Resume Scanning</li>
        <li>Interactive Games</li>
        <li>Application Tracker</li>
      </ul>
    </div>
  );
}

// Main App Component
const App = () => {
  const [section, setSection] = useState("default");

  const loadSection = (newSection) => setSection(newSection);

  return (
    <Router>
      <div>
        <Header loadSection={loadSection} />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
            <li><Link to="/recruiter">Recruiter Interface</Link></li>
            <li><Link to="/candidate">Candidate Interface</Link></li>
          </ul>
        </nav>
        <main>
          {section === "default" && <h2 className="welcome-message">Welcome to CareerConnect</h2>}
          {section === "login" && <Login loadSection={loadSection} />}
          {section === "register" && <Register loadSection={loadSection} />}
          {section === "jobs" && <JobListings />}
        </main>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/recruiter" element={<RecruiterInterface />} />
          <Route path="/candidate" element={<CandidateInterface />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
