import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return(
    <div className={"menu "+(menuOpen && "active")}>
      <div className="image90">
        <img src="assets/888.png" alt="k"></img>
      </div>
      <ul>
        <div className="home">
        <li >Home</li>
        </div>
        <div className="about">
        <li>About</li>
        </div>
        <div className="testimonials">
          <li>Testimonials</li>
        </div>
        <div className="mystory">
          <li>My Story</li>
        </div>
      </ul>

    </div>
  )

}
