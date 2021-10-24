import "./intro.scss"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="text">
        <img src="assets/1.png" alt="k"></img>
      </div>

      <a href="#testimonials">
        <Button className="button" variant="outline-dark">BROWSER </Button>
      </a>



    </div>
  )

}
