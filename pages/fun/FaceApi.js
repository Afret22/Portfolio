import { Card, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import * as faceapi from "face-api.js";

const FaceApi = () => {
  const [expression, setExpression] = React.useState("  ");

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  React.useEffect(async () => {
    const startVideo = () => {
      const video = document.getElementById("video");

      navigator.getUserMedia(
        {
          video: {},
        },
        (stream) => (video.srcObject = stream),
        (error) => console.log(error)
      );
    };
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/static/Models"),
      ,
      faceapi.nets.faceExpressionNet.loadFromUri("/static/Models"),
    ]).then(startVideo());

    video.addEventListener("playing", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      document.body.append(canvas);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        // faceapi.recognizeFaceExpressions(video).then(res=> console.log(res      // let arr = Object.values(detections[0].expressions);
        // let max = Math.max(...arr);
        // setExpression(String(getKeyByValue(detections[0].expressions,max)));
        // console.log(expression);
      }, 100);
    });
  }, []);

  return (
    <>
      <Layout>
        <Card
          rounded
          style={{
            margin: "auto",
            padding: 0,
            width: "719px",
            height: "559px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video id='video' width='720' height='560' autoPlay muted></video>
        </Card>
        <Col md={4} lg={4}></Col>
      </Layout>
    </>
  );
};

export default FaceApi;
