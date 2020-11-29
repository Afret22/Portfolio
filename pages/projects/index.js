import { Button, Card, Col, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const Index = () => {
  const SEO = {
    title: "Deployed apps",
    description: "Deployed apps",
  };

  return (
    <Layout>
      <NextSeo {...SEO} />
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
              <Card.Text>
                <h5>
                  by Adding links from Instagram/FB page to the site you can buy
                  fashion staff with ease
                  <br />
                  Made with React/Firebase
                </h5>
                <a href='https://shopshipwear.com/'>
                  <h3>Visit</h3>
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>May 2020</small>
            </Card.Footer>
          </Card>
        </motion.div>
      </Col>
      
    </Layout>
  );
};

export default Index;
