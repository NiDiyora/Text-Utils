import "./App.css";
/* import About from "./components/About";
 */import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
/* import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 */
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0d0e51";
      showAlert("Enable Dark Mode", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Disable Dark Mode", "danger");
    }
  };
  return (
/*     <Router>
 */     
 <>
        <Navbar
          title="Text Utils"
          aboutText="about Us"
          link="solid Link"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
       
        <div className="container my-3">
        <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze below"
                mode={mode}
              />
{/*           <Switch>
 */}           {/*  <Route exact path="/about">
              <About mode={mode} />
            </Route> */}
      {/*       <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze below"
                mode={mode}
              />
            </Route> */}
{/*           </Switch>
 */}        </div>
      </>
/*     </Router>
 */  );
}

export default App;
