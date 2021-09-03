import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function VideoEmbed() {
  let query = useQuery();
  let id = query.get("video_id");
  let src =
    "https://player.vimeo.com/video/" +
    id +
    "?autoplay=1&title=0&byline=0&playsinline=0&autopause=0&responsive=1";

  if (!id) {
    return <NotFound />;
  }

  let style = {
    backgroundColor: "#282E48",
    margin: "0px",
    position: "absolute",
    width: "100%",
    height: "100%",
  };
  let iframe = {
    width: "100%",
    height: "100%",
  };
  return (
    <div style={style}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style={iframe}
      ></iframe>
    </div>
  );
}

export default VideoEmbed;
