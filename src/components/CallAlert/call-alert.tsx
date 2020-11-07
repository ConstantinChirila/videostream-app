import React, { ReactElement } from "react";
import { StyledContainer, StyledHeading, StyledButton } from "./";

type TProps = {
  caller: string;
  acceptCall: () => void;
};

export function CallAlert({ caller, acceptCall }: TProps): ReactElement {
  return (
    <StyledContainer>
      <StyledHeading>{caller} is calling you</StyledHeading>
      <StyledButton type="button" onClick={acceptCall}>
        Accept
      </StyledButton>
    </StyledContainer>
  );
}
