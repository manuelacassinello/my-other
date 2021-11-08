import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Community from "./components/community/Community";
import "./app.scss";






function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Testimonials />
        <Community />
      </div>
    </div>
  );
}

export default App;
