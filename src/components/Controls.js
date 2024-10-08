import { useState } from "react";
import { useClient } from "../VideoSettings.js";
import { Grid, Button } from "@mui/material";
import MicIcon from "@mui/material";
import MicOffIcon from "@mui/material";
import VideocamIcon from "@mui/material";
import VideocamOffIcon from "@mui/material";
import ExitToAppIcon from "@mui/material";

export default function Controls(props){
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({video: true, audio: true});

    const mute = async (type) => {
        if(type === "audio"){
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return{...ps, audio: !ps.audio };
            });
        }
        else if(type === "video"){
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((ps) => {
                return{...ps, video: !ps.video };
            });
        }
    }

    const leaveChannel = async() => {
        await client.leave();
        client.removeAllListenders();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);

    }

    return (
        <Grid container spacing = {2} alignItems = "center">
            
            <Grid item>
                <Button variant = "contained" color = {trackState.audio ? "primary" : "secondary"} onClick ={() => mute("audio")} >
                    {trackState.audio ? <MicIcon /> : <MicOffIcon />}
                </Button>
            </Grid>
            
            <Grid item>
                <Button variant = "contained" color = {trackState.video ? "primary" : "secondary"} onClick ={() => mute("video")} >
                    {trackState.audio ? <VideocamIcon /> : <VideocamOffIcon />}
                </Button>
            </Grid>
            
            <Grid item>
                <Button variant = "contained" color = "default" onClick ={() => leaveChannel()} >
                    Leave
                    <ExitToAppIcon />
                </Button>
            
            </Grid>   
        </Grid>
    )
}