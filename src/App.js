import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextArea from "./components/TextArea";
import { useState } from "react";
import Alert from "./components/Alert";
import { Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#008B8B";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="IndMart"
        mode={mode}
        about="Home"
        toggleMode={toggleMode}
        contact="About"
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <TextArea
                showAlert={showAlert}
                heading="Ener The text to analyze below"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
