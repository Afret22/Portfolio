import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

const ExFFmpeg = () => {
  const [ready, setReady] = React.useState(false);
  const [video, setVideo] = React.useState();
  const [gif,setGif] = React.useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  const convertToGIf =  async()=>{
      console.log("loading gif")
      ffmpeg.FS('writeFile','test.mp4', await  fetchFile(video))

      await ffmpeg.run('-i', 'test.mp4', '-t', '30', '-ss', '2.0', '-f', 'gif', 'out.gif');

      const data = ffmpeg.FS('readFile','out.gif')

      const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
      setGif(url)
      console.log("convertsion finishied")

  }

  React.useEffect(() => {
    load();
  }, []);

  return ready ? (
    <div style={{ marginTop: "50vw",display:"flex",justifyContent:"center", }}>
      <div>
      {video && (
        <video controls width='250' src={URL.createObjectURL(video)} style={{marginBottom:"3vw"}} />
      )}
      </div>
      <input type='file' style={{marginTop:'auto'}} onChange={(e) => setVideo(e.target.files?.item(0))} />
      <h3>Res</h3>
      <button onClick={convertToGIf} >Convert</button>
      {gif && <img src={gif} alt="gif"/>}

     

    </div>
  ) : (
    <h1> Loading ...</h1>
  );
};

export default ExFFmpeg;
