import React, { ReactElement } from "react";

type TProps = {
  caller: string;
  acceptCall: () => void;
};

export function CallAlert({ caller, acceptCall }: TProps): ReactElement {
  return (
    <div>
      <h1>{caller} is calling you</h1>
      <button onClick={acceptCall}>Accept</button>
    </div>
  );
}
