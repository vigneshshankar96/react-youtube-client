import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "./../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(response.data.items[0]);
  return (
    <div className="ui container">
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
