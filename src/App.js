import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import New from "./headerpass/New";
import Past from "./headerpass/Past";
import Comments from "./headerpass/Comments";
import ask from "./headerpass/ask";
import show from "./headerpass/show";
import jobs from "./headerpass/jobs";
import submit from "./headerpass/submit";
import Login from "./headerpass/Login";
import Forgotpassword from "./headerpass/Forgotpassword";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomeScreen} />
      <Route path="/new" exact component={New} />
      <Route path="/past" exact component={Past} />
      <Route path="/comments" exact component={Comments} />
      <Route path="/ask" exact component={ask} />
      <Route path="/show" exact component={show} />
      <Route path="/jobs" exact component={jobs} />
      <Route path="/submit" exact component={submit} />
      <Route path="/login" exact component={Login} />
      <Route path="/forgot" exact component={Forgotpassword} />
    </Router>
  );
}

export default App;
