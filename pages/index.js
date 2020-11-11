import Layout from "../components/Layout";
import { Card, Toast } from "react-bootstrap";
import Typical from "react-typical";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const Index = () => {
  const [toast, setToast] = React.useState(true);
  const SEO = {
    title: "A.R Software Engineer",
    description: "Contact me at 01223699925 ",
  };
  return (
    <Layout>
      <NextSeo {...SEO} />

      <motion.div
        
        initial={{y:"-100vw"}} 
        animate={{y:0}}
         whileHover={{scale:1.1}}
        style={{
          position: "relative",
          minHeight: "100px",
        }}
      >
        <Toast
          show={toast}
          onClose={() => setToast(false)}
          style={{
            position: "absolute",
            top: 0,
            right: "49%",
          }}
        >
          <Toast.Header>
            <h4 className="mr-auto">Still Under Devoplment</h4>
          </Toast.Header>
          <Toast.Body>
            {" "}
            <h6>Don`t Judge ;~)</h6>
          </Toast.Body>
        </Toast>
      </motion.div>
      <Card
        style={{
          display: "table",
          padding: "30px",
          background: "#8080802e",
          color: "white",
          marginTop: "21%",
        }}
      >
        <Typical
          steps={[
            ">Hello",
            1000,
            ">My name is Abdelkader i am a Software Engineer",
            500,
            ">I worked with Ai",
            500,
            ">I worked in web-Dev",
            1000,
            ">I worked with Robots",
            1000,
            ">And alot more",
            1000,
            " >And i am alwyas open to change and learn",
          ]}
          loop={Infinity}
          wrapper="h1"
        />
      </Card>
    </Layout>
  );
};

export default Index;
