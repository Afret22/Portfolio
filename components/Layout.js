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
import particalConfig from "./particalConfig"

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
    <Modal.Body style={{background: "#737373",color:"white"}}>
      <motion.h3 whileHover={{ scale: 1.03 }} style={{ textColor:"white"}}>
        <Link href='/' style={{ textDecoration: "none"}}>
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
        <Link href='/fun' as={"text"} >Side Projects</Link>
      </motion.h3>
      <motion.h3 whileHover={{ scale: 1.03 }} >
        <Link href='/projects'>Deployed Projects</Link>
      </motion.h3>
    </Modal.Body>
  </Modal>
);
const NavBar = ({ setShowDialog }) => (
  <>
    <ThemeProvider>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
        <SVGIMG />
          
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

const Layout = ({ children, smallWindow = false }) => {
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
        { !smallWindow &&
            <Particles
          params={particalConfig}
          className='particles'
          style={{
            background: "#000000",
            width: "100%",
            position: "fixed",
            height: "100%",
            top: 0,
            left: 0,
          }}
        ></Particles>}
      </Container>
      <NavBar setShowDialog={setShowDialog} />

      <div className='wrapper' style={{ minHeight: `calc(95vh - 96px)` }}>

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
        a {
            color: #fff;
            text-decoration: none;
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
