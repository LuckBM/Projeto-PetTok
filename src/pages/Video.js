import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {

    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
        videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      ></video>
    </div>
  );
}

export default Video;
