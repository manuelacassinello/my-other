import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return(
    <div className={"menu "+(menuOpen && "active")}>
      <div className="image90">
        <img src="assets/888.png" alt="k"></img>
      </div>
      <ul>
        <div className="about">
         <a href="#intro"><li>Home</li></a>
        </div>
        <div className="about">
          <a href="#about"><li>About</li></a>
        </div>
        <div className="about">
          <a href="#testimonials"><li>Testimonials</li></a>
        </div>
        <div className="about">
          <a href="#mystory"><li>My Story</li></a>
        </div>
      </ul>

    </div>
  )

}
