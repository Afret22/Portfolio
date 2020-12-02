import { Button, Card, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import ModalVideo from "react-modal-video";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const Index = () => {
  const SEO = {
    title: "Deployed apps",
    description: "Deployed apps",
  };
  const [flip, setFlip] = React.useState(false);
  const [body, setBody] = React.useState({});
  const [videoOpen, setVideoOpen] = React.useState(false);

  React.useEffect(() => {
    setFlip(!flip);
    setBody(document.body);
    body.style = "overflow:hidden";
    body.style = "overflow:auto";
  }, []);
  return (
    <Layout>
      <NextSeo {...SEO} />
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={videoOpen}
        videoId='ORry-5tHdsk'
        onClose={() => setVideoOpen(false)}
      />
      <Col md={6} lg={6} xl={6} style={{ margin: "auto" }}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <Card className='my-3 p-3 rounded'>
            <Card.Img variant='top' src='/static/img/JustOrder.jpg' />
            <Card.Body>
              <Card.Title>ShopShipWear</Card.Title>
              <hr />
              <Card.Text>
                <strong>
                  by Adding links from Instagram/FB page to the site you can buy
                  fashion staff with ease
                  <br />
                  Made with React/Firebase
                </strong>
                <br />
                <br />
                <a
                  target='_blank'
                  className='btn btn-lg btn-dark'
                  href='https://shopshipwear.com/'
                >
                  Visit
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
      <Col md={6} lg={6} xl={6} style={{ margin: "auto" }}>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <Card className='my-3 p-3 rounded'>
            <Card.Img
              variant='top'
              src='/static/img/kuka-drawing.jpeg'
              style={{ maxWidth: "600px", maxHeight: "600px", margin: "auto" }}
            />
            <Card.Body>
              <Card.Title>Kuka Drawing</Card.Title>
              <hr />
              <Card.Text>
                <strong>
                  A project made for display in MechTech expo,
                  <br />
                  It is a python project that has two main functions
                </strong>
                <br />
                By:
                <br />
                <ul>
                  <li>
                    To detect face and then crop it and convert it into line
                    strokes using image processing
                  </li>

                  <li>
                    To convert the final pic into SVG then into KRL(Kuka robotic
                    language)
                  </li>
                </ul>
                <Button
                  target='_blank'
                  className='btn btn-lg btn-dark'
                  onClick={() => setVideoOpen(true)}
                >
                  View Demo
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    </Layout>
  );
};

export default Index;
