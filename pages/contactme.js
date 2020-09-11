import Layout from "../components/Layout";
import { Card, Button, Jumbotron, Container, Col, Row, Form } from "react-bootstrap";

const ContactMe = ()=>{
return (

    <Layout>
    <div>
        <Jumbotron fluid style={{width: "100%",backgroundColor:"inherit",marginTop:90}}>
            <Container>
                <Card style={{backgroundColor: "inherit"}}>
            <h1 style={{color:"white"}}>Contacts me at</h1>
            </Card>
            <Row className="justify-content-md-start">
                <Col xs lg="2" style={{color:"#a4a4a4"}}>
                Address: 198 West 21th Street, Suite 721 New York NY 10016
                </Col>
                <Col md="auto" style={{color:"#a4a4a4"}}>
                    Phone:
                <a href="tel://1234567920"> + 1235 2355 98</a>
                    </Col>
                <Col xs lg="2"style={{color:"#a4a4a4"}}>
                <p>
                    <span>
                        Email:
                    </span> 
                    <br/>
                    <a href="mailto:info@yoursite.com">
                        info@yoursite.com</a>
                        </p>
                </Col>
                <Col md="auto" style={{color:"#a4a4a4"}}>
                <p>
                    <span>Website:</span>
                    <br/>
                     <a href="#">yoursite.com</a>
                </p>
                </Col>
            </Row>
            </Container>
            </Jumbotron> 
            <br/>
            <Card style={{backgroundColor: "inherit"} }>
              <Form action="#" style={ { margin:"0 auto",width:"50%",justifyContent: "center" , marginBottom:"1"}}>
                <Form.Group >
                  <Form.Control type="text" class="form-control" placeholder="Your Name" style={{background:"inherit"}}/>
                </Form.Group>
                <Form.Group class="form-group">
                  <Form.Control type="text" class="form-control" placeholder="Your Email" style={{background:"inherit"}}/>
                </Form.Group>
                <Form.Group class="form-group">
                  <Form.Control type="text" class="form-control" placeholder="Subject" style={{background:"inherit"}}/>
                </Form.Group>
                <Form.Group class="form-group">
                  <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message" style={{background:"inherit"}}></textarea>
                </Form.Group>
                <Form.Group class="form-group">
                  <Button type="submit" value="Send Message" class="btn btn-primary py-3 px-5">LL</Button>
                  </Form.Group>
              </Form>
              </Card>
            
       
            </div>
    </Layout>
)
}

export default ContactMe;   