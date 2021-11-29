import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return(
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <div className="login">
        <li >Log in</li>
        </div>
        <div className="signup">
        <li>Sign up</li>
        </div>
      </ul>

    </div>
  )

}
