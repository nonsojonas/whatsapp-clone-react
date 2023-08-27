import { useState } from "react";
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/styles.css';
import '../css/material-icons.css';
import Welcome from './Welcome';
import Home from './Home';

function App() {
  const [loadingState, setLoadingState] = useState(true);

  setTimeout(function() {
    setLoadingState(false);
  }, 5000);

  return (
    <>
    {loadingState ? <Welcome /> : <Home />}
    </>
  );
}

export default App;
