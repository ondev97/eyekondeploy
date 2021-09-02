import React from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function VideoEmbed() {
  let query = useQuery();
  let id = query.get("video_id");

  if (!id) {
    return <NotFound />;
  }

  let style = {
    backgroundColor: "transport",
    margin: "0px",
  };
  let iframe = {
    width: "100%",
    height: "100%",
  };
  return (
    <div style={style}>
      <iframe
        src="https://player.vimeo.com/video/90594364?title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;app_id=122963&amp;h=fe9d29e6df"
        width="100"
        height="100"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Portfolio Reel Alex"
        style={iframe}
      ></iframe>
    </div>
  );
}

export default VideoEmbed;
