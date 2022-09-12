import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";

function App() {
  const [sub, setSub] = useState(false);

  const setSubmission = (val) => {
    setSub(val);
    return val;
  };

  return (
    <div className="container">
      <h1>Employee Polls</h1>
      <LoginForm setSubmission={setSubmission} />
    </div>
  );
}

export default App;
