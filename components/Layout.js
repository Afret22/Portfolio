import {
  Navbar,
  Nav,
  Form,
  Card,
  ProgressBar,
  ThemeProvider,
  Badge,
  Row,
  Col,
  Modal,
  Button,
  Container,
} from "react-bootstrap";
import Particles from "react-particles-js";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsList } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import SVGIMG from "./SVGIMG";

const set = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
const Dialog = ({ showDialog, setShowDialog }) => (
  <Modal
    show={showDialog}
    onHide={() => setShowDialog(false)}
    animation={true}
    aria-labelledby='contained-modal-title-vcenter'
    centered
    contentClassName='modal-co'
    size='lg'
    style={{ background: "transparent" }}
  >
    <Modal.Body style={{}}>
      <motion.h3 whileHover={{ scale: 1.03 }}>
        <Link href='/' style={{ textDecoration: "none" }}>
          Home
        </Link>
      </motion.h3>
      <motion.h3 whileHover={{ scale: 1.03 }}>
        <Link href='/contactme'>Contact</Link>
      </motion.h3>
      <motion.h3 whileHover={{ scale: 1.03 }}>
        <Link href='/static/PDF/Abdelkader-rafaat.pdf'>CV</Link>
      </motion.h3>
      <motion.h3 whileHover={{ scale: 1.03 }}>
        <Link href='/fun'>Side Projects</Link>
      </motion.h3>
      <motion.h3 whileHover={{ scale: 1.03 }}>
        <Link href='/projects'>Deployed Projects</Link>
      </motion.h3>
    </Modal.Body>
  </Modal>
);
const NavBar = ({ setShowDialog }) => (
  <>
    <ThemeProvider>
      <Navbar bg='dark' variant='dark' style={{width:"101%"}}>
        <Navbar.Brand>
          <SVGIMG/>
        </Navbar.Brand>
        <Nav className='mr-auto'></Nav>
        <Form inline>
          <div style={{ color: "white" }}>
            <a href='#' style={{ textDecoration: "none", color: "#fff" }}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <BsList
                  size={30}
                  whileHover={{ scale: "1.1" }}
                  onClick={() => setShowDialog(true)}
                ></BsList>
              </motion.div>
            </a>
          </div>
        </Form>
      </Navbar>
    </ThemeProvider>
  </>
);
const Footer = () => (
  <div
    className='footer'
    style={{
      width: "100vw",
      background: "#00000000",
      position: "relative",
      bottom: 0,
      marginTop: "15px",
    }}
  >
    <Row className='justify-content-md-center' style={{ maxWidth: "100%" }}>
      <Col xs lg='3' style={{ color: "#", postion: "absolute", bottom: 0 }}>
        <div
          style={{
            borderTop: "2px solid gray",
            marginBottom: "20px",
            width: "100%",
          }}
        ></div>
        <div
          style={{ color: "gray", display: "flex", justifyContent: "center" }}
        >
          <h1 style={{ marginRight: "15px" }}>Contacts:</h1>
          <a
            href='https://www.linkedin.com/in/abdelkader-rafaat-141a68199/'
            target='_blank'
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <SiLinkedin size={45} />
          </a>
          <div style={{ marginLeft: "10px" }}>
            <a
              href='https://github.com/Afret22'
              target='_blank'
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <SiGithub size={45} />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

const Layout = ({ children }) => {
  const [vs, setVs] = React.useState(0);
  const [showDialog, setShowDialog] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      let body = document.body,
        html = document.documentElement;

      let dheight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      let wheight = window.innerHeight;
      let v = window.scrollY;
      setVs((v / (dheight - wheight)) * 100);
    });
  }, []);

  return (
    <div className='layout'>
      <div className='KW_progressContainer'>
        <ProgressBar
          className='KW_progressBar'
          now={vs}
          style={{ background: "inherit" }}
        />
      </div>
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog}></Dialog>
      <Container>
        <Particles
          params={set}
          className='particles'
          style={{
            background: "#000000",
            width: "100%",
            position: "fixed",
            height: "100%",
            top: 0,
            left: 0,
          }}
        ></Particles>
      </Container>
      <div className='wrapper' style={{ minHeight: `calc(95vh - 96px)` }}>
        <NavBar setShowDialog={setShowDialog} />

        {children}
      </div>

      <Footer />

      <style jsx>
        {`
          .layout {
            background-color: black;
          }
          .KW_progressContainer {
            left: 0;
            width: 100%;

            position: fixed;
            top: 0px;
            overflow: hidden;

            display: table;
            table-layout: fixed;
            z-index: 999;
          }

          .particles {
          }

          .modal-co {
            background-color: black;
            background: inherit;
          }
        `}
      </style>
    </div>
  );
};
const theme = {
  backgroundImage: "/static/img/bgimg.jpeg",
};
export default Layout;
