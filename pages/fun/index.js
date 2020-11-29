import { Button, Card, Col, Row} from "react-bootstrap";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Index = () => {
  const SEO = {
    title: "Side apps",
    description: "Contact me at 01223699925 ",
  };
  return (
      <>
    <Layout>
      <NextSeo {...SEO} />
      <>
      <Col md={6} lg={6} xl={6} style={{ margin: "auto" }}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <Card className='my-3 p-3 rounded'>
            <Card.Img
              variant='top'
              src='https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/e/e6/Conways_game_of_life_breeder_animation.gif'
            />
            <Card.Body>
              <Card.Title>The Game of Life</Card.Title>
              <Card.Text>
                The Game of Life, also known simply as Life, is a cellular
                automaton devised by the British mathematician John Conway It is
                a zero-player game,
                <br />
                meaning that its evolution is determined by its initial state,
                requiring no further input.
                <br />
                <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
                  <h3>Discrption</h3>
                </a>
              </Card.Text>
              <Button variant='primary'>
                <Link href='/fun/GOL'>
                  <h4>View</h4>
                </Link>
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>May 2020</small>
            </Card.Footer>
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
              src='http://pngriver.com/wp-content/uploads/2018/04/Download-Shopping-Cart-Logo-Png-Image-74545-For-Designing-Projects.png'
            />
            <Card.Body>
              <Card.Title>Souq el Gom3a</Card.Title>
              <Card.Text>
                eCommerce platform built with the MERN stack & Redux.
                <br />
                <strong>Features</strong>
                <ul>
                  <li>Full featured shopping cart</li>
                  <li>Product reviews and ratings</li>
                  <li>Product pagination/search feature</li>
                  <li>PayPal / credit card integration</li>
                </ul>
                <div style={{ background: "#00000" }}>
                  Sample User Logins <br />
                  admin@example.com (Admin) 123456
                  <br />
                  john@example.com (Customer) 123456
                </div>
              </Card.Text>

              <a
                target='_blank'
                href='https://souq-el-gom3a.herokuapp.com/product/5fbe6c1083d44134ada91a2a'
              >
                <h4>View</h4>
              </a>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>May 2020</small>
            </Card.Footer>
          </Card>
        </motion.div>
      </Col>
      </>
    </Layout>
    </>
  );
};

export default Index;