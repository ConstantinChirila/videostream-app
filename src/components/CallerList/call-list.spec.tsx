import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { CallerList } from "./call-list";

const mockUsers = { test: "test" };
const mockID = "testID";
const mockCallPeer = jest.fn();

describe("CallAlert", () => {
  it("should render the component", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <CallerList users={mockUsers} yourID={mockID} callPeer={mockCallPeer} />
      </ThemeProvider>
    );
    const user = screen.getByText(mockUsers.test);
    expect(user).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not show any users", () => {
    render(
      <ThemeProvider theme={theme}>
        <CallerList users={{}} yourID={mockID} callPeer={mockCallPeer} />
      </ThemeProvider>
    );
    const user = screen.getByText("No active users.");
    expect(user).toBeInTheDocument();
  });
  it("should call the user on click", () => {
    const mockFn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <CallerList users={mockUsers} yourID={mockID} callPeer={mockFn} />
      </ThemeProvider>
    );
    const regex = new RegExp(mockUsers.test, "i");
    fireEvent.click(screen.getByText(regex));
    expect(mockFn).toHaveBeenCalledWith(mockUsers.test);
  });
});
