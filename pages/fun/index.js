
import { Button, Card, CardDeck } from "react-bootstrap";
import Layout from "../../components/Layout";
import { motion } from "framer-motion"

const Index = ()=>{
    return (
        <Layout>
    <motion.div style={{marginTop:"10%",display: "flex",justifyContent: "center"}} initial={{x:"-100vw"}} animate={{x:0}} whileHover={{scale:1.1}} >
 
  <Card className="card1">
    <Card.Img variant="top" src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/e/e6/Conways_game_of_life_breeder_animation.gif" />
    <Card.Body>
      <Card.Title>The Game of Life</Card.Title>
      <Card.Text>
      The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Conway It is a zero-player game, 
      <br/>
      meaning that its evolution is determined by its initial state, requiring no further input.
      <br/>
      <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"><h3>Discrption</h3></a>
      </Card.Text>
      <Button variant="primary" href="/fun/GOL">View</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">May 2020</small>
    </Card.Footer>
  </Card>
    </motion.div>
    
    
    
    <div style={{position:"",color:"white"}}> hello</div>

   
    
    <style jsx>
        {`
          .card1:hover
          {

          }
        `}
      </style>

    </Layout>
    )
}

export default Index;