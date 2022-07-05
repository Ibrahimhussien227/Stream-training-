import React, { useEffect, useRef } from "react";
import FlvJs from "flv.js";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = ({ fetchStream }) => {
  const { id } = useParams();
  const stream = useSelector((state) => state.streams[id]);
  const videoRef = useRef();
  let player;

  useEffect(() => {
    fetchStream(id);
    buildPlayer();
  }, []);

  useEffect(() => {
    return buildPlayer();
  });

  const buildPlayer = () => {
    if (player || !stream) {
      return;
    }
    player = FlvJs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });

    player.attachMediaElement(videoRef.current);
    player.load();
  };

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default connect(null, { fetchStream })(StreamShow);
