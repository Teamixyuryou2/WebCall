import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appID = "f362df6db382434b86c118d8d4f826d5"
const Token = "007eJxTYIj+s7xDTSCc4QJHn8z9SW3nfYvV/XK3rRPyi0t8EfeGU1yBIc3YzCglzSwlydjCyMTYJMnCLNnQ0CLFIsUkzcLILMX0fqVxSkMgI4NmSD0DIxSC+NwMvqmpJaUFus6JOTkMDACEex9p"

export const config = {mode: "rtc", codec: "vp8", appId: appID, token: Token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Meetup-Call";