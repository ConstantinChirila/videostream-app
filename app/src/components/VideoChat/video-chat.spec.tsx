import React from "react";
import { render, screen } from "@testing-library/react";
import { VideoChat } from "./video-chat";

test("renders learn react link", () => {
  render(<VideoChat />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
