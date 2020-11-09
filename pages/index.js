import Layout from "../components/Layout";
import { Card } from "react-bootstrap";
import Typical from 'react-typical'

const Index = ()=>{
    return (
        <Layout>

    <Card style={{display:"table",padding:"30px",background:"#8080802e",color: "white",marginTop: "21%"}}>
    <Typical
        steps={['>Hello', 1000, '>My name is Abdelkader i am a Software Engineer', 500,'>I worked with Ai',500,'>I worked in web-Dev', 1000,'>I worked with Robots', 1000,">And alot more",1000," >And i am alwyas open to change and learn"]}
        loop={Infinity}
        wrapper="h1"
      />
        
    </Card>

    
    
    <div style={{position:"",color:"white"}}> hello</div>

   
    
    

    </Layout>
    )
}

export default Index;