import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked.", () => {
  //logRoles is useful for testing when you have a very large page and dont know some of roles.
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /change to blue/i });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle({
    "background-color": "red",
  });

  //click button
  fireEvent.click(buttonElement);

  //expect the background to be blue
  expect(buttonElement).toHaveStyle({ "background-color": "blue" });

  //expect the button text to be 'Change to Red'
  expect(buttonElement).toHaveTextContent("Change to red");
});

// For funtional testing expect to have more than one assertion in a test. For more rigorous unit testing you can have one expect per test.
// test("button turns blue when clicked", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to Blue" });

// });
