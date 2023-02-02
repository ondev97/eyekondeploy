import React, { useState } from "react";
import ReactPlayer from "react-player";

function UPlayerComponent({ url, setvideoLink, setsetVideo }) {
  const [playing, setplaying] = useState(false);
  const playPush = (e) => {
    if (e.target.className.includes("player_overlay")) {
      if (playing) {
        setplaying(false);
      } else {
        setplaying(true);
      }
    }
  };
  const play = (link) => {
    console.log(link);
    setplaying(true);
    setvideoLink(link);
    setsetVideo(true);
    setplaying(false);
  };

  const getYoutubeVId = (url) => {
    let url_search = new URL(url);
    let c = url_search.searchParams.get("v");
    return `https://youtu.be/${c}`;
  };
  return (
    <>
      <div className="player_overlay" onClick={playPush}></div>
      <ReactPlayer
        url={getYoutubeVId(url)}
        controls={true}
        pip={true}
        className="player"
        width="100%"
        height="100%"
        muted={true}
        playing={playing}
        onPlay={() => play(url)}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              fs: 0,
            },
          },
        }}
      />
    </>
  );
}

export default UPlayerComponent;
