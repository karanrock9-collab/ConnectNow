import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import landingPage from "./pages/landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<landingPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
