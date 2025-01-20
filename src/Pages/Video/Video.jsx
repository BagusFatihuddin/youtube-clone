import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Reccommended from "../../Components/Reccommended/Reccommended";
import { useParams } from "react-router-dom";

const Video = () => {
    const { videoId, categoryId } = useParams();

    return (
        <div className="play-container">
            <PlayVideo videoId={videoId} />
            <Reccommended categoryId={categoryId} />
        </div>
    );
};

export default Video;
