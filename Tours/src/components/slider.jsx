import Carousel from 'react-bootstrap/Carousel';
import PictureFrame from './pictureFrame';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <PictureFrame imageUrl = 'https://www.incredible-southindia.com/images/kerala-header.jpg'/>
        <Carousel.Caption>
          <h3>Explore The Backwaters</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <PictureFrame imageUrl = 'https://images.unsplash.com/photo-1701152321973-e7e8c78406e6?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Carousel.Caption>
          <h3>Experience the breathtaking views</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <PictureFrame imageUrl = 'https://c.myholidays.com/blog/blog/content/images/2021/06/Beaches-In-Kerala.webp'/>
        <Carousel.Caption>
          <h3>Enjoy the scenic beaches</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;