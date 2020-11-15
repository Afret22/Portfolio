import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const Index = () => {
  const SEO = {
    title: "Deployed apps",
    description: "Contact me at 01223699925 ",
  };

  return (
    <Layout>
      <NextSeo {...SEO} />

      <motion.div
        style={{
          marginTop: "10%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "60vw",
        }}
        initial={{ y: "-100vw" }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        <Card className='card1'>
          <Card.Img
            variant='top'
            src='/static/img/JustOrder.jpg'
            style={{ Width: "25%" }}
          />
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
    </Layout>
  );
};

export default Index;
