import Layout from "../components/Layout";
import { Card, Toast } from "react-bootstrap";
import Typical from "react-typical";
import { NextSeo } from "next-seo";

const Index = () => {
  const [toast, setToast] = React.useState(true);
  const SEO = {
    title: "A.R Software Engineer",
    description: "Abdelkader is a software engineer that worked in many fields of software development, A person with the open mind to learn and change. ",
  };
  return (
    <Layout>
      <NextSeo {...SEO} />

      
      <Card
        style={{
          display: "table",
          padding: "30px",
          background: "#8080802e",
          color: "white",
          marginTop: "10%",
        }}
      >
        <Typical
          steps={[
            ">Hello",
            1000,
            ">My name is Abdelkader i am a Software Engineer",
            500,
            ">I worked with AI",
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
          wrapper='h1'
        />
      </Card>
    </Layout>
  );
};

export default Index;
