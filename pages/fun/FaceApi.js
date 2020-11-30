import { Card, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import * as faceapi from "face-api.js";

const FaceApi = () => {
  const [expression, setExpression] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [smallWindow, setSmallWindow] = React.useState(false);

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  React.useEffect( () => {
    const log = () => 
    {
        if (window.innerWidth <= 750) {
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

    log()
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
      faceapi.nets.ageGenderNet.loadFromUri("/static/Models"),
    ]).then(startVideo());

    video.addEventListener("playing", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      document.body.append(canvas);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions()
          .withAgeAndGender();
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        faceapi.recognizeFaceExpressions(video).then((res) => {
          let arr = Object.values(res);
          let max = Math.max(...arr);
          setExpression(getKeyByValue(res, max));
        });
        faceapi.predictAgeAndGender(video).then((res) => {
          setAge(res.age.toFixed(0));
          setGender(res.gender);
        });
      }, 150);
    });
  }, [smallWindow]);

  const getEmoj = () => {
    switch (gender) {
      case "male":
        switch (expression) {
          case "happy":
            return "🙆‍♂️";

          case "neutral":
            return "👨";

          case "sad":
            return "🙍‍♂️";

          case "surprised":
            return "🤷‍♂️";

          case "fearful":
            return "🙇‍♂️";

          case "disgusted":
            return "🧟‍♂️";

          case "angry":
            return "👿";
          default:
            return "👨";
        }
      case "female":
        switch (expression) {
          case "happy":
            return "🙆‍♀️";

          case "neutral":
            return "👩";

          case "sad":
            return "🙎‍♀️";

          case "surprised":
            return "🤷‍♂️";

          case "fearful":
            return "🤷‍♀️";

          case "disgusted":
            return "🧟‍♀️";

          case "angry":
            return "👿";
          default:
            return "👩";
        }
      default:
        return "🧐";
    }
  };

  return (
    <>
      <Layout>
        <Card
          rounded
          style={{
            margin: "auto",
            padding: 0,
            background: "#8080802e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video id='video' width={smallWindow ? '360' : '720'} height={smallWindow ? '240' : '560'} autoPlay muted></video>
        </Card>
        
        <Card
          style={{
            margin: "auto",
            display: "table",
            padding: "2px",
            background: "#8080802e",
            color: "white",
            marginTop: "2px",
          }}
          rounded
        >
          
          <h1> {getEmoj()}</h1>
          <h1>{expression}</h1>
        </Card>
        
      </Layout>
    </>
  );
};

export default FaceApi;
