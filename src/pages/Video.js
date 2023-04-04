import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/videoSidebar";
import "./Video.css";

function Video({likes,msgs,shares,name,description,music,url}) {
  const videoRef = useRef(null);
  const [play, setplay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.play();
      setplay(false);
    } else {
      videoRef.current.pause();
      setplay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_Player"
        ref={videoRef}
        onClick={handdleStart}
        src={url}
        loop
      ></video>
      <VideoSidebar
        likes={likes}
        msgs={msgs}
        shares={shares}
      />
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Video;
