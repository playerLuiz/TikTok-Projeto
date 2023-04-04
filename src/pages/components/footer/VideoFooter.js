import React from "react";
import "./Footer.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name,description,music}) {
  return (
    <div className="videofooter">
      <div className="videofooter_text">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="videofooter_music">
          <MusicNoteIcon className="videofooter_icon" />
          <div className="videofooter_musictext">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videofooter_disc"
        alt="imagem de vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
