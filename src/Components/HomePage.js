import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FaEnvelope, FaGithub,FaLinkedin,FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Optional icons for social links
import TypingEffect from 'react-typing-effect';
import { FaCode, FaPaintBrush,FaMapSigns } from 'react-icons/fa';
import './Services.css'; // Custom CSS for additional styling
import './About.css'; // Custom CSS for styling
import './skills.css'; // Custom CSS for styling


function App() {
  return (
    <div>
     {/* Navigation Bar */}
<Navbar bg="light" variant="light" expand="lg" fixed="top" style={{ backgroundColor: "#FFB6C1" }}>
  <Container>
    <Navbar.Brand href="#home" style={{ color: "red" }}>My Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#about" style={{ color: "black"  }} className='nav-link-custom'>About</Nav.Link>
        <Nav.Link href="#projects" style={{ color: "black" }}className='nav-link-custom' >Projects</Nav.Link>
        <Nav.Link href="#skills" style={{ color: "black" }}className='nav-link-custom'>Skills</Nav.Link>
        <Nav.Link href="#contact" style={{ color: "black" }}className='nav-link-custom'>Contact</Nav.Link>
        <Nav.Link href="#services" style={{ color: "black" }}className='nav-link-custom'>Services</Nav.Link>
        <Nav.Link href="#services-and-team" style={{ color: "black" }}className='nav-link-custom'>Team Members</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

{/* CSS in a <style> block or a CSS file */}
<style jsx>{`
  .nav-link-custom {
    text-color: black;
    font-weight: bold;
    padding: 10px 15px;
    transition: color 0.3s, background-color 0.3s;
  }

  .nav-link-custom:hover {
    color: #900C3F; /* Text color on hover */
    background-color: #f0f8ff; /* Light background on hover */
    text-decoration: underline; /* Underline on hover */
  }
`}</style>
{/* Hero Section */}
<div
  className="hero-section"
  style={{
    background: "linear-gradient(to right, #FFB6C1, #87CEFA)", // soft pink to sky blue gradient
    color: "#333333",
    padding: "100px 0"
  }}
>
  <Container className="text-center">
    <Row>
      <Col>
        <h1>
          <TypingEffect
            text={[
              "Welcome to my portfolio!",
              "Hello, I'm Shahil Kumar Gupta"
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
          />
        </h1>
        <p className="lead" style={{ color: "#333333" }}>A Computer Science Engineering Student</p>
        <p>
          <Button variant="outline-primary" href="#services" style={{ borderColor: "#FF7F50", color: "#FF7F50" }}>
            Our Services
          </Button>
        </p>
        <h2 className="typing-text" style={{ color: "blue" }}>
          <TypingEffect
            text={[
              "Services for college students and personal projects!",
              "Graphic Design for personal branding",
              "Web Projects for college assignments",
              "Java Projects for academic and personal growth",
              "Python Projects for data analysis and AI",
              "Notes for easy learning",
              "Guidance for college students",
              "Portfolio development assistance"
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={200}
          />
        </h2>
      </Col>
    </Row>
  </Container>
</div>
  {/* About Section */}
       <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              I'm a passionate Computer Science student with a deep interest in software development, machine learning, and web technologies.
              I am always eager to learn new things and contribute to exciting projects. My mission is to bridge the gap between technology
              and human potential, helping others through meaningful software and creative designs.
            </p>
            <blockquote className="blockquote">
              "The only way to do great work is to love what you do." – Steve Jobs
            </blockquote>
            <p className="section-description">
              As a software developer, I firmly believe in the power of technology to transform lives. Whether it's building scalable 
              applications or designing a simple website, I enjoy taking on new challenges that push me to think creatively and work 
              efficiently. With a love for coding and problem-solving, I aim to develop innovative solutions that not only meet 
              clients' needs but also improve the user experience.
            </p>
            <blockquote className="blockquote">
              "The best way to predict the future is to invent it." – Alan Kay
            </blockquote>
            <p className="section-description">
              Alongside my technical expertise, I also enjoy creative endeavors such as graphic designing and video editing, which allow
              me to create visually appealing content. I have a deep interest in both coding and creative arts, and I believe they complement
              each other in the modern tech landscape.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="shahilguptaphoto.png"
              alt="Shahil Gupta"
              className="img-fluid square shadow-lg profile-img"
            />
            <br />
            <img
              src="https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=pexels-pixabay-270366.jpg&fm=jpg" // You can replace this with another image URL
              alt="Coding Work"
              className="img-fluid rounded shadow mt-4"
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </section>

      <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Services</h2>
        <Row>
          {/* College Projects Section */}
          <Col md={4} className="service-col">
            <h5 style={{ color: '#007bff' }}><FaCode /> College Projects</h5>
            <ul>
              <li>Python Projects</li>
              <li>Java Projects</li>
              <li>C++ Projects</li>
              <li>C Projects</li>
              <li>MERN Stack Projects</li>
              <li>HTML, CSS, and JavaScript Projects</li>
            </ul>
          </Col>

          {/* Graphic & Video Design Section */}
          <Col md={4} className="service-col">
            <h5 style={{ color: '#28a745' }}><FaPaintBrush /> Graphic & Video Design</h5>
            <ul>
              <li>Graphic Design for Branding</li>
              <li>Video Editing</li>
              <li>Thumbnail Creation</li>
              <li>Poster and Banner Design</li>
              <li>Invitation Cards</li>
              <li>Portfolio Design</li>
            </ul>
          </Col>

          {/* Guidance and Resources Section */}
          <Col md={4} className="service-col">
            <h5 style={{ color: '#ff5733' }}><FaMapSigns /> Guidance and Resources</h5>
            <ul>
              <li>Notes for Key Subjects</li>
              <li>Project Roadmaps and Tutorials</li>
              <li>Guidance for College Students</li>
              <li>Technical Interview Preparation</li>
              <li>Career Roadmap for Software Development</li>
            </ul>
          </Col>
        </Row>
        {/* services */}
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Build robust, scalable, and visually stunning websites using the latest web technologies. From front-end to back-end, we’ve got you covered.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Graphic Design</Card.Title>
                <Card.Text>
                  Create beautiful and creative designs for your brand. We specialize in logo design, posters, social media graphics, and more.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Project Guidance</Card.Title>
                <Card.Text>
                  Offering personalized guidance for college projects. Get assistance in choosing topics, coding, and project presentations.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>     
    
     {/* Projects Section  
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center mb-4">My Projects</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="project1-image.jpg" />
                <Card.Body>
                  <Card.Title>Project One</Card.Title>
                  <Card.Text>
                    A description of the project. Built using ReactJS and Bootstrap.
                  </Card.Text>
                  <Button variant="primary" href="#">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="project2-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Two</Card.Title>
                  <Card.Text>
                    Another project description. Built with HTML, CSS, and JavaScript.
                  </Card.Text>
                  <Button variant="primary" href="#">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="project3-image.jpg" />
                <Card.Body>
                  <Card.Title>Project Three</Card.Title>
                  <Card.Text>
                    Description of a machine learning project. Built with Python.
                  </Card.Text>
                  <Button variant="primary" href="#">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      */}
      {/* skills - section */}
      <section id="skills" style={{ padding: '60px 0', backgroundColor: '#f7f7f7' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#333', fontSize: '2.5rem', fontWeight: 'bold' }}>
          My Skills
        </h2>
        <Row>
          <Col md={3}>
            <h5 style={{ color: '#555', fontSize: '1.2rem' }}>Programming Languages</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{ color: '#555', fontSize: '1.2rem' }}>Technologies</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{ color: '#555', fontSize: '1.2rem' }}>Development Tools</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>Jupyter</li>
              <li>Docker</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{ color: '#555', fontSize: '1.2rem' }}>Additional Skills</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Data Structures & Algorithms (DSA)</li>
              <li>Big Data</li>
              <li>Swing (Java)</li>
              <li>Tkinter (Python)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>

{/* my team members */}
<section id="services-and-team" className="py-5">
      <Container>
        
        {/* Team Section */}
        <Row className="text-center">
          <Col>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">
              Our team consists of skilled professionals with expertise in different areas. Here are some of the key members of our team:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="webdev.jpg" alt="Team Member 1" />
              <Card.Body>
                <Card.Title>Shahil Gupta</Card.Title>
                <Card.Text>
                  Web Developer & Designer<br />
                  Specializing in front-end web development, UI/UX design, and responsive websites.
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="Graphic.jpg" alt="Team Member 2" />
              <Card.Body>
                <Card.Title>Ritesh Kumar</Card.Title>
                <Card.Text>
                  Graphic Designer<br />
                  Passionate about creating stunning visual designs for brands, advertisements, and print media.
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src="Projectc.jpg" alt="Team Member 3" />
              <Card.Body>
                <Card.Title>Rajat Jaiswal</Card.Title>
                <Card.Text>
                  Project Consultant<br />
                  Providing guidance for college projects, research, and practical implementations.
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="contact" className="py-5 bg-light text-dark">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-5">Feel free to reach out via email or connect with me on social media:</p>

        {/* Social Media Links */}
        <div className="text-center mb-5">
          <a href="https://wa.me/8809471808" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} className="mx-3" />
          </a>
          <a href="https://wa.me/8809471808" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="mx-3" />
          </a>
          <a href="https://wa.me/8809471808" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} className="mx-3" />
          </a>
          <a href="https://wa.me/8809471808" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} className="mx-3" />
          </a>
          <a href="mailto:hgshahilgupta@gmail.com?subject=Hello&body=Hi there!" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={40} className="mx-3" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper" style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h3 className="text-center mb-4">Contact Us</h3>
          <form >
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="query">Query</label>
              <textarea
                id="query"
                name="query"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', height: '120px' }}
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '12px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', fontSize: '18px', cursor: 'pointer', border: 'none' }}
            >
              Submit
            </button>
          </form>

          
        </div>
      </Container>
    </section>
  
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 shahil kumar Gupta. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
 
export default App;
