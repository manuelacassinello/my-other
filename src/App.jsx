import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Community from "./components/community/Community";
import "./app.scss";
import { useState} from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Mystory from "./components/mystory/Mystory";










function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About/>
        <Mystory />
        <Testimonials />
        <Community />
      </div>
    </div>
  );
}



export default App;
