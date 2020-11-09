import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { motion } from "framer-motion"



const Index = ()=>{
    return (
        <Layout>
    
    <motion.div style={{marginTop:"10%",display: "flex",justifyContent: "center"}} initial={{y:"-100vw"}} animate={{y:0}} whileHover={{scale:1.1}} >
    <Card className="card1">
    <Card.Img variant="top" src="/static/img/JustOrder.jpg" style={{Width:"45%"}} />
    <Card.Body>
      <Card.Title>ShopShipWear</Card.Title>
      <Card.Text>
    <h5>
    by Adding links from Instagram/FB page to the site you can buy fashion staff with ease 
       <br/>
       Made with React/Firebase
    </h5>
      <a href="https://shopshipwear.com/"><h3>Visit</h3></a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">May 2020</small>
    </Card.Footer>
  </Card>

    </motion.div>

    </Layout>
    )
}

export default Index;