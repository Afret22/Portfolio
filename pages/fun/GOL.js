import Layout from "../../components/Layout";
import GameOfLife from "../../components/GameOfLife";
import useComponentWillMount from "../../components/useComponentWillMount";
import { Card, Col, Container, Row } from "react-bootstrap";
import {NextSeo} from "next-seo"



const GOL = ()=>{
    const [smallWindow, setSmallWindow] = React.useState(false);
    const SEO ={
        title:"GameOfLife",
        description:"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Conway It is a zero-player game,meaning that its evolution is determined by its initial state, requiring no further input."
}
    
   React.useEffect(() => {
        log()
       
        },[])
    
        const log = () => 
        {
            if (window.innerWidth <= 1050) {
              setSmallWindow(true);
            }
            
            window.addEventListener("resize", () => {
              if (window.innerWidth <= 750) {
                setSmallWindow(true);
              } else {
                setSmallWindow(false);
              }
            });
        };


return(
    <Layout>
    <NextSeo {...SEO}/>

    <div style={{ margin:"auto", margin:""}}>
    { smallWindow   ? 
    <Card style={{ justifyContent:"center", display: "flex",marginTop:"100px",background:"inherit"}}>
    
    <Container>
  <Row className="justify-content-md-center">
  
    <Col md="auto"><div style={{width:"10%",justifyContent:"end", display: "flex"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif" alt="" />
    </div></Col>
   
  </Row>
 
</Container>
<br/>
    
    <h1 style={{justifyContent:"center", display: "flex",color:"white",marginBottom:"100px"}}>Does not look good on phones check it on browser 
    
    </h1>
    </Card>
    : <GameOfLife/>}
    </div>
    </Layout>
)
}

export default GOL;
