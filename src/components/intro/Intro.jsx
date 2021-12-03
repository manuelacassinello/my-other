import "./intro.scss"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function intro() {

  return (
    <div className="intro" id="intro">
      <div className="right">
        <input type="text" placeholder="Search for your other..." />
      </div>
      <div className="image99">
        <img src="assets/0099.png" alt="k"></img>
      </div>
      <a href="#about">
        <Button className="button" variant="outline-dark">BROWSER </Button>
      </a>



    </div>
  )

}
