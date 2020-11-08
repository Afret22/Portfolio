
import { Button, Card, CardDeck } from "react-bootstrap";
import Layout from "../../components/Layout";

const Index = ()=>{
    return (
        <Layout>
    <div style={{marginTop:"20%",display: "flex",justifyContent: "center"}}>
 
  <Card className="card1">
    <Card.Img variant="top" src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/e/e6/Conways_game_of_life_breeder_animation.gif" />
    <Card.Body>
      <Card.Title>The Game of Life</Card.Title>
      <Card.Text>
      The Game of Life, also known simply as Life, is a board game originally created in 1860 by Milton Bradley, 
      as The Checkered Game of Life. 
      <br/>
      <a href="https://en.wikipedia.org/wiki/The_Game_of_Life">Discrption</a>
      </Card.Text>
      <Button variant="primary" href="/fun/GOL">View</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">May 2020</small>
    </Card.Footer>
  </Card>
    </div>
    
    
    
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