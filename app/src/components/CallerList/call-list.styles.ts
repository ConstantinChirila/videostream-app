import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 20rem;
  padding: 0 2rem;
`;

export const StyledButton = styled.button`
  text-align: left;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  color: #fff;
  border-radius: 3px;
  padding: 1.2rem 1.5rem 1.5rem 1.5rem;
  font-weight: 700;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  align-items: center;
  vertical-align: middle;

  svg {
    transform: scale(0.8);
    margin-bottom: -0.8rem;
    margin-right: 1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
