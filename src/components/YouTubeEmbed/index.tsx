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
    <div className="w-full aspect-video">
      <div className="w-full mb-4  ">
        <h3 className="text-base md:text-2xl">{name}</h3>
      </div>

      <ReactPlayer
        src={
          keyVideo
            ? `"https://www.youtube.com/watch?v=${keyVideo}"`
            : "https://www.youtube.com/watch?v=LXb3EKWsInQ"
        }
        aspect-video
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default YouTubeEmbed;
