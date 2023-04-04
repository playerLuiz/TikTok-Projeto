import React, { useState } from "react"; /* tem que usar o useState para passar o estado */
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({likes,msgs,shares}) {

  const[liked,setLiked] = useState(false)  
  function handddleLike() {
    setLiked(!liked) /* o ! significa o valor contrário, assim mudando o valor da variavel automaticamente */
  }

  return (
    <div className="videosidebar">
      <div className="videosidebar_options" onClick={handddleLike}>
        {liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/>}
        <p>{ liked ? likes+1 : likes}</p>
      </div>

      <div className="videosidebar_options">
        <ChatIcon fontSize="large" />
        <p>{msgs}</p>
      </div>

      <div className="videosidebar_options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
