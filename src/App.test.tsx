import { render, screen } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App from "./App";

test("button is available on first render", () => {
  //logRoles is useful for testing when you have a very large page and dont know some of roles.
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /change to blue/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle({
    "background-color": "red",
  });
});

test("button turns blue when clicked", () => {});
