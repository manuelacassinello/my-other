import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Community from "./components/community/Community";
import "./app.scss";
import { useState} from "react";
import Menu from "./components/menu/Menu";







function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Testimonials />
        <Community />
      </div>
    </div>
  );
}

import { GlowParticle } from "./glowparticle.js";

const COLORS = [
  { r: 196 g: 196 b: 196 },
  { r: 200 g: 246 b: 86 },
];

class App {
  constructor() {
     this.canva = document.createElement('canvas');
     document.body.appendChild(this.canvas);
     this.ctx = this.canvas.getContext('2d')

     this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

     this.totalParticles = 1;
     this.particles = [];
     this.maxRaddius = 90;
     this.minRadius = 40;

     window.addEventListener('resize', this.resize.blind(this), false);
     this.resize();

     window.requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; < this.totalParticles; i++) {
      const item = new GlowParticle();
    }
  }

  animate(){

  }

}
window.onload = () => {
  new App();
}

export default App;
