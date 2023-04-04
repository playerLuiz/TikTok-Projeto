import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight;
  }
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosDocs = await getDocs(videosCollection);
    const videosList = videosDocs.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    /* Funcionalidades acima do return, coisas visuais dentro do retunr */
    <div className="App" style={{ maxHeight: maxHeight + "px" }}> 
      <div className="render_Videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              msgs={item.msgs}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
          likes={120}
          msgs={98}
          shares={50}
          name="@Luiz"
          description="Gato o goleiro da seleção"
          music="Outkast - Hey Ya!"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        /> */}
      </div>
    </div>
  );
}

export default App;
