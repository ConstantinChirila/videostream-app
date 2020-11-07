import React, { useEffect, useState, useRef } from "react";
import io, { Socket } from "socket.io-client";
import Peer, { SignalData } from "simple-peer";
import { StyledContainer } from "./video-chat.styles";
import { VideoContainer, CallAlert, CallerList } from "../index";
import { config } from "./../../config";

type TSocket = typeof Socket;

export function VideoChat() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState<MediaStream>();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState<string | SignalData>("");
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef<HTMLVideoElement>(null);
  const partnerVideo = useRef<HTMLVideoElement>(null);
  const socket = useRef<TSocket>();

  useEffect(() => {
    socket.current = io(config.SOCKET_URL, {
      transports: ["websocket"],
    });
    if (!navigator) return;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.current.on("yourID", (id: string) => {
      setYourID(id);
    });

    socket.current.on("allUsers", (users: {}) => {
      setUsers(users);
    });

    socket.current.on("hey", (data: any) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, []);

  function acceptCall() {
    setCallAccepted(true);
    setReceivingCall(false);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket?.current?.emit("acceptCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream: any) => {
      if (partnerVideo && partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    peer.signal(callerSignal);
  }

  function callPeer(id: string) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (data) => {
      socket?.current?.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket?.current?.on("callAccepted", (signal: any) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
  }

  return (
    <StyledContainer>
      <CallerList users={users} callPeer={callPeer} yourID={yourID} />
      <VideoContainer
        stream={stream}
        callAccepted={callAccepted}
        userVideo={userVideo}
        partnerVideo={partnerVideo}
      />
      {receivingCall && <CallAlert caller={caller} acceptCall={acceptCall} />}
    </StyledContainer>
  );
}
