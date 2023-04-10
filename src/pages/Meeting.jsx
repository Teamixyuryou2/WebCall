import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import VideoCall from "../components/VideoCall.js"

const Meeting = () => {
    const [inCall, setInCall] = useState(false);


    return (
        <div>
            <h1>Meeting</h1>
            <Button variant = "contained" color ="primary" onClick ={() => setInCall(true)}>Join Call</Button>
            {inCall ? <VideoCall setInCall = {setInCall} /> : "Waiting to join Call"}
        </div>
    );
};

export default Meeting;