import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return <div>
        <Link to="/">About</Link>
        <Link> Contact</Link>
        <Link> Sustainability</Link>
    </div>;
};

export default App;
