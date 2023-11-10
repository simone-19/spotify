import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./components/Mynav";
import MyMain from "./components/MyMain";

import { useState } from "react";
import Player1 from "./components/Player1";

function App() {
  const [ricerca, setricerca] = useState(null);
  const impostazione = (data) => {
    setricerca(data);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Mynav impostazione={impostazione} />
        <MyMain ricerca={ricerca} />
        <Player1 />
      </div>
    </div>
  );
}

export default App;
