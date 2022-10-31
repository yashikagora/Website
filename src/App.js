import "./App.css";
import Body from "./component/body";
import Header from "./component/header";
import Footer from "./component/footer";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </>
  );
}

export default App;
