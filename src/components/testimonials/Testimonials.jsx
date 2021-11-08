import "./testimonials.scss"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/701.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/702.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/703.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    </div>
  )
}
