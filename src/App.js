import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enabled", "success");
      // document.title = "Word Counter - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is disabled", "secondary");
      // document.title = "Word Counter - Light";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="WordApp" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            {/* use "exact" to match exact path or else react will match partially */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
