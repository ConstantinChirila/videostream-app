import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 38rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 0.6rem;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;
`;

export const StyledHeading = styled.h1`
  font-size: 2rem;
  margin: 0;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 2rem 2rem;
`;

export const StyledContent = styled.div`
  padding: 2rem;
`;

export const StyledButton = styled.button`
  font-size: 1.4rem;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  color: #fff;
  border-radius: 3px;
  margin: 4rem 0;
  padding: 1.2rem 2.4rem;
  font-weight: 700;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
