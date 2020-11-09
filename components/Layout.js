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
} from "react-bootstrap";
import Particles from "react-particles-js";
import { SiLinkedin } from "react-icons/si";
import { BsList } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion"

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
    aria-labelledby="contained-modal-title-vcenter"
    centered
    contentClassName="modal-co"
    size="lg"
    style={{background:"transparent"}}
  >
        
    <Modal.Body style={{}} >
      <motion.h3 whileHover={{scale:1.03}} >
        <Link href="/">Home</Link>
      </motion.h3>
      <motion.h3 whileHover={{scale:1.03}} >
        <Link href="/contactme">Contact</Link>
        </motion.h3>
      <motion.h3 whileHover={{scale:1.03}} >
        <Link href="/static/PDF/Abdelkader-rafaat.pdf">CV</Link>
        </motion.h3>
      <motion.h3 whileHover={{scale:1.03}} >
        <Link href="/fun">Side Projects</Link>
        </motion.h3>
      <motion.h3 whileHover={{scale:1.03}} >
        <Link href="/projects">Deployed Projects</Link>
        </motion.h3>
    </Modal.Body>
  </Modal>
);
const NavBar = ({ setShowDialog }) => (
  <>
    <ThemeProvider prefixes={{ background: "#00000" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"><img src="/static/img/Logo.png" alt="" style={{width:"60%",color:"white"}}/></Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <div style={{ color: "white" }}>
            
            <a  href="#" style={{ textDecoration: 'none',color:"#fff" }}> 
            <motion.div whileHover={{scale:1.2}} >
            <BsList size={30} whileHover={{scale:"1.1"}} onClick={() => setShowDialog(true)}></BsList>
            </motion.div>
            </a>
            
          </div>
        </Form>
      </Navbar>
    </ThemeProvider>
  </>
);
const Footer = () => (
  <div className="footer" style={{ width: "100vw",background:"#00000000", position: "relative" ,bottom:0,}}>
    <Row className="justify-content-md-center" style={{ maxWidth: "100%",}}>
      <Col xs lg="3" style={{ color: "#a4a4a4",postion:"absolute", bottom:0, }}>
        <h1 style={{ color: "white" ,display:"flex",justifyContent:"center"}}>Contact me at</h1>
        <div style={{ color: "blue",display:"flex",justifyContent:"center"}}>
            <Button href="https://www.linkedin.com/in/abdelkader-rafaat-141a68199/">
          <SiLinkedin size={45}   />

            </Button>
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
    <div className="layout">
      <div className="KW_progressContainer">
        <ProgressBar
          className="KW_progressBar"
          now={vs}
          style={{ background: "inherit" }}
        />
      </div>
      <NavBar setShowDialog={setShowDialog} />
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog}></Dialog>

      <Particles
        params={set}
        className="particles"
        style={{
          background: "#000000",
          width: "100%",

          position: "fixed",
          height: "100%",
        }}
      ></Particles>
      {children}

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
