import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { CallAlert } from "./call-alert";

describe("CallAlert", () => {
  it("should render the component", () => {
    const mockFn = jest.fn();
    const { container } = render(
      <ThemeProvider theme={theme}>
        <CallAlert caller="test" acceptCall={mockFn} />
      </ThemeProvider>
    );
    const heading = screen.getByText(/test is calling you/i);
    expect(heading).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should accept the call", () => {
    const mockFn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <CallAlert caller="test" acceptCall={mockFn} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText(/Accept/i));
    expect(mockFn).toHaveBeenCalled();
  });
});
