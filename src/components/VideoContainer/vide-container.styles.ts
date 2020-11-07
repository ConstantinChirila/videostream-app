import styled from "styled-components";

export const StyledVideoContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const StyledVideo = styled.video`
  border-radius: 5px;
  margin: 2rem 2rem 0 0;
  width: 100%;
`;
