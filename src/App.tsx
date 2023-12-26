import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/main";
import Scroll from "./page/scroll";
import "./styles/_reset.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/scroll" element={<Scroll />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
