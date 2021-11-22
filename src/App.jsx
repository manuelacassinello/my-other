import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Community from "./components/community/Community";
import "./app.scss";
import { useState} from "react";






function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Testimonials />
        <Community />
      </div>
    </div>
  );
}

export default App;
