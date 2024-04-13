import '../App.css';
import '../index.scss'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Home() {

    return (
        <>
            {/*-------------carousel-------------  */}
            <Carousel>
                <Carousel.Item>
                    <img src="/static/carousel/slide3.avif" className='carousel-img' alt="slide-01" text="First Image" />
                    <Carousel.Caption className='mb-4'>
                        <h1 className='text-primary'><b>Admission Open</b> </h1>
                        <p className='text-success'>Admission Open for all batch for session 2023-24</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/carousel/slide2.jpg" className='carousel-img' alt="slide 02" />
                    <Carousel.Caption className='mb-4'>
                        <h1 className='text-primary'><b>LIMITED TIME OFFER</b> </h1>
                        <p className='text-success'>Get admission at discount for limited time only. Apply now</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/carousel/slide1.jpg" className='carousel-img' alt="slie 03" text="Slide 03" />
                    <Carousel.Caption className='mb-4'>
                        <h1 className='text-primary'><b>NEW EDUCATION POLICY</b> </h1>
                        <p className='text-success'> Our education system is based on new Education policy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className='about dfdr p-4'>
                <div className='about-text p-3'>
                    <h1 className="text-danger text-center fw-bold">Our Vision</h1>
                    <p>Welcome to My School, where education meets innovation and holistic development! Founded in accordance with the principles outlined in India's new education policy, we strive to create a nurturing and empowering environment for students from grades 1 to 10.
                        <br />
                        &emsp;&emsp;At My school, we believe in fostering a love for learning that goes beyond textbooks. Our curriculum is designed to be holistic, incorporating not just academic excellence but also a focus on critical thinking, creativity, and practical skills. We understand that each child is unique, and our teaching methods are tailored to cater to diverse learning styles, ensuring that every student reaches their full potential.
                    </p>
                    <p>&emsp;&emsp;
                    One of the key pillars of our school is the emphasis on experiential learning. We provide ample opportunities for students to engage in hands-on activities, projects, and real-world experiences that enhance their understanding and application of concepts. From science experiments to art workshops, from field trips to community service projects, our students are encouraged to explore, question, and discover.
                    </p>
                    <p>&emsp;&emsp;Here, education is not just about acquiring knowledge; it's about nurturing compassionate, creative, and confident individuals who are equipped to thrive in an ever-changing world. Join us on this journey of discovery, growth, and excellence!</p>
                </div>
                <div className='about-img dfdc jc ac'>
                    <h3 className="text-danger">Director</h3>
                    <img src="/static/Prem.png" alt="" height="400" />
<h4 className="td">Mr. Prem Kumar</h4>
<p>Ph.D from Economics</p>
                </div>
            </section>
        </>

    )
}