import React from "react";
import ReactPlayer from "react-player";
const YouTubeEmbed = ({
  keyVideo,
  name,
}: {
  keyVideo: string;
  name: string;
}) => {
  return (
    <div className="w-full aspect-video h-full relative ">
      <ReactPlayer
        src={
          keyVideo
            ? `"https://www.youtube.com/watch?v=${keyVideo}"`
            : "https://www.youtube.com/watch?v=LXb3EKWsInQ"
        }
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
        controls
      />
    </div>
  );
};

export default YouTubeEmbed;
