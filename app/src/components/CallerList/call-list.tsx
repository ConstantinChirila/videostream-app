import React, { ReactElement } from "react";
import { StyledContainer, StyledButton } from "./call-list.styles";

type TProps = {
  users: any;
  yourID: any;
  callPeer: any;
};

export function CallerList({ users, yourID, callPeer }: TProps): ReactElement {
  return (
    <StyledContainer>
      <h3>Active Users</h3>
      {Object.keys(users).map((key) => {
        if (key === yourID) {
          return null;
        }

        return (
          <StyledButton key={key} onClick={() => callPeer(key)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2M15 7a2 2 0 012 2M15 3a6 6 0 016 6" />
            </svg>{" "}
            {key}
          </StyledButton>
        );
      })}
    </StyledContainer>
  );
}
