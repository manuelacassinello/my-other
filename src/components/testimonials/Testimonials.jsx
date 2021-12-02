import "./testimonials.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



export default function testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <div className="text1">
       <h1>Testimonials</h1>
      </div>
      <div className="right">
        <input type="text" placeholder="Search for a word..." />
      </div>
      <div className="image30">
        <img src="assets/334.png" alt="k"></img>
      </div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/none.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/none.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/none.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>



    </div>
  )
}
