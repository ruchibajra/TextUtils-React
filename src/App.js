import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }

    // makes the tab title reappear again and again
    // setInterval(() => {
    //   document.title = "Install TextUtils Now";
    // }, 2000);

    // setInterval(() => {
    //   document.title = "TextUtils is a great app!!!";
    // }, 1500);
  };

  // const toggleRedMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "red";
  //     showAlert("Dark Red mode has been enabled", "success");
  //     document.title = "TextUtils - Red Mode";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //     document.title = "TextUtils - Light Mode";
  //   }
  // };
  return (
    <>
    <Router>
    <Navbar
        title="Skin Media"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        // toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
          <Routes>
            {/* React does partial matching in routes so muct used exact to make sure react direct it to the exam path given.
             users -> component 1
             users/home -> component 2 */}
           
            <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter | Lowercase to Uppercase | Uppercase to Lowercase | Remove Extra Spaces" mode={mode}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>

          </Routes>          

          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse below:" mode={mode}/> */}
      </div>

    </Router>
      

    
    </>
  );
}

export default App;
