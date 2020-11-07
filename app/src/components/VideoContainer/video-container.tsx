import React, { ReactElement, RefObject } from "react";

import { StyledVideoContainer, StyledVideo } from "./vide-container.styles";

type TProps = {
  stream: MediaStream | undefined;
  callAccepted: boolean;
  userVideo: RefObject<HTMLVideoElement> | null;
  partnerVideo: RefObject<HTMLVideoElement> | null;
};

export function VideoContainer({
  stream,
  callAccepted,
  userVideo = null,
  partnerVideo = null,
}: TProps): ReactElement {
  return (
    <StyledVideoContainer>
      {stream && <StyledVideo muted playsInline ref={userVideo} autoPlay />}
      {callAccepted && (
        <StyledVideo playsInline ref={partnerVideo} autoPlay muted />
      )}
    </StyledVideoContainer>
  );
}
