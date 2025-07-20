import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/example1.avif';
import img2 from '../assets/images/example2.jpg';
import img3 from '../assets/images/example3.webp';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img src={img1} alt="First slide" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={img2} alt="Second slide" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={img3} alt="Third slide" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;