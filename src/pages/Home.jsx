import '../App.css';
import '../index.scss'
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1 / 2
    };

    return (
        <>
            {/*-------------carousel-------------  */}
            <Carousel>
                <Carousel.Item>
                    <img src="/static/carousel/slide3.avif" className='carousel-img' alt="slide-01" text="First Image" />
                    <Carousel.Caption className='mb-4 c_text'>
                        <h1 ><b>Admission Open</b> </h1>
                        <p>Admission Open for all batch for session 2023-24</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/carousel/slide2.jpg" className='carousel-img' alt="slide 02" />
                    <Carousel.Caption className='mb-4 c_text'>
                        <h1><b>LIMITED TIME OFFER</b> </h1>
                        <p>Get admission at discount for limited time only. Apply now</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/carousel/slide1.jpg" className='carousel-img' alt="slie 03" text="Slide 03" />
                    <Carousel.Caption className='mb-4 c_text'>
                        <h1><b>NEW EDUCATION POLICY</b> </h1>
                        <p> Our education system is based on new Education policy</p>
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
                    <div className="hvr dfdc">
                        <h1 className="text-center text-white">Prof.  Prem Kumar</h1>
                        <h4 className='text-white'> <b>Graduate from BNMU</b></h4>
                        <p className='p-4 fw-bold text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio minima eaque debitis itaque excepturi minus officia eligendi est voluptate vero, hic, corporis et commodi accusantium dignissimos doloremque odio fugit.</p>
                        <button className='btn btn-primary'>Know More</button>
                    </div>
                </div>
            </section>
            <section className='teacher_card_container'>
                <h1 className="text-center text-white mb-4 bottom_border">OUR TEACHERS</h1>
                <Slider {...settings} className='teacher_slider'>
                    <div style={{ display: "flex!important", flexBasis: "row !important" }}>
                        <div className='dfdr justify-content-evenly'>
                            <Card className='teacher_card' >
                                <Card.Img variant="top" src="/static/Prem.png" />
                                <Card.Body>
                                    <Card.Title>Mr. Prem Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: B.A <br />
                                            <b>Position: </b> Math Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card' >
                                <Card.Img variant="top" src="/static/teacher2.jpg" />
                                <Card.Body>
                                    <Card.Title>Mr. Deepak Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: Polytechnic <br />
                                            <b>Position: </b> Science Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/teacher4.png" />
                                <Card.Body>
                                    <Card.Title>Rekha Madam</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: M.Sc <br />
                                            <b>Position: </b> S. St. Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/teacher3.jpg" />
                                <Card.Body>
                                <Card.Title>Mr. Bikash Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: Master of Science <br />
                                            <b>Position: </b> Sanskrit Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div style={{ display: "flex!important", flexBasis: "row !important" }}>
                        <div className='dfdr justify-content-evenly'>
                        <Card className='teacher_card' >
                                <Card.Img variant="top" src="/static/teacher2.jpg" />
                                <Card.Body>
                                    <Card.Title>Mr. Deepak Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: Polytechnic <br />
                                            <b>Position: </b> Science Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/Prem.png" />
                                <Card.Body>
                                    <Card.Title>Mr. Prem Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: B.A <br />
                                            <b>Position: </b> Math Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/teacher4.png" />
                                <Card.Body>
                                    <Card.Title>Rekha Madam</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: M.Sc <br />
                                            <b>Position: </b> S. St. Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/teacher3.jpg" />
                                <Card.Body>
                                <Card.Title>Mr. Bikash Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: Master of Science <br />
                                            <b>Position: </b> Sanskrit Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div style={{ display: "flex!important", flexBasis: "row !important" }}>
                        <div className='dfdr justify-content-evenly'>
                        <Card className='teacher_card'>
                                <Card.Img variant="top" src="/static/teacher4.png" />
                                <Card.Body>
                                    <Card.Title>Rekha Madam</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: M.Sc <br />
                                            <b>Position: </b> S. St. Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/teacher3.jpg" />
                                <Card.Body>
                                <Card.Title>Mr. Bikash Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: Master of Science <br />
                                            <b>Position: </b> Sanskrit Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card' >
                                <Card.Img variant="top" src="/static/teacher2.jpg" />
                                <Card.Body>
                                    <Card.Title>Mr. Deepak Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: Polytechnic <br />
                                            <b>Position: </b> Science Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                            <Card className='hd teacher_card'>
                                <Card.Img variant="top" src="/static/Prem.png" />
                                <Card.Body>
                                    <Card.Title>Mr. Prem Sir</Card.Title>
                                    <Card.Text>
                                        <p><b>Degree</b>: B.A <br />
                                            <b>Position: </b> Math Teacher </p>
                                    </Card.Text>
                                    <Button variant="primary">Visit Profile</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Slider>
            </section>
        </>

    )
}