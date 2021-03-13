import Layout from "../components/Layout";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Firebase from "../components/firebase";
import { NextSeo } from "next-seo";

const onSubmit = (data) => {
  Firebase.createMsg(data).then(() => {
    alert("Done?");
    window.location.reload();
  });
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const SEO = {
    title: "Contact Me",
    description: "Contact me at 01223699925 ",
  };

  return (
    <>
      <Layout>
        <NextSeo {...SEO} />

        <div>
          <div style={{ marginTop: "100px", marginBottom: "40px" }}>
            <Container>
              <Card style={{ backgroundColor: "inherit" }}>
                <h1 style={{ color: "white" }}>Contacts me at</h1>
              </Card>
              <Row className="justify-content-md-start">
                <Col md="auto" style={{ color: "#a4a4a4" }}>
                  Phone:
                  <a href="tel://01223699925"> +02 01223699925</a>
                </Col>
                <Col md="auto" style={{ color: "#a4a4a4" }}>
                  WhatsApp:
                  <a href="https://wa.me/01223699925"> +02 01223699925</a>
                </Col>
                <Col xs lg="2" style={{ color: "#a4a4a4" }}>
                  <p>
                    <span>Email:</span>

                    <a href="mailto:a.kader.r5o@gmail.com">
                      a.kader.r5o@gmail.com
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <Card style={{ backgroundColor: "inherit" }}>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                margin: "0 auto",
                width: "50%",
                justifyContent: "center",
                marginBottom: "1",
              }}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  ref={register}
                  name="userName"
                  class="form-control"
                  placeholder="Your Name"
                  style={{ background: "inherit", color: "whitesmoke" }}
                />
              </Form.Group>
              <Form.Group class="form-group">
                <Form.Control
                  type="text"
                  ref={register}
                  name="email"
                  class="form-control"
                  placeholder="Your Email"
                  style={{ background: "inherit", color: "whitesmoke" }}
                  autoComplete="email"
                />
              </Form.Group>
              <Form.Group class="form-group">
                <Form.Control
                  type="text"
                  ref={register}
                  name="Subject"
                  class="form-control"
                  placeholder="Subject"
                  style={{ background: "inherit", color: "whitesmoke" }}
                />
              </Form.Group>
              <Form.Group class="form-group">
                <textarea
                  name="msg"
                  ref={register}
                  cols="30"
                  rows="7"
                  class="form-control"
                  placeholder="Message"
                  style={{ background: "inherit", color: "whitesmoke" }}
                ></textarea>
              </Form.Group>
              <Form.Group class="form-group">
                <Button
                  type="submit"
                  value="Send Message"
                  class="btn btn-primary py-3 px-5"
                >
                  Send
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default ContactMe;
