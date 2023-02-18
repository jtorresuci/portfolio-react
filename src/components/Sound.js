import React, { useState, useRef } from "react";
import { Form, Row } from "react-bootstrap";
import "./Sound.css";

const SoundToggle = ({ soundFilePath }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  const handleEnded = () => {
    audioRef.current.play();
  };

  return (
    <div className="d-flex justify-content-end">
      <Form>
        <Row>
          <div style={{ display: "inline-flex", color: "#fff" }}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={isSoundOn ? "Sound On" : "Sound Off"}
              checked={isSoundOn}
              onChange={toggleSound}
            />
          </div>
        </Row>
      </Form>
      {isSoundOn && (
        <audio ref={audioRef} autoPlay onEnded={handleEnded}>
          <source src={soundFilePath} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default SoundToggle;
