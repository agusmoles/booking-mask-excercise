import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FlightTab } from "../FlightTab";

const { render } = testUtils;

const component = () => render(<FlightTab />);

describe("FlightTab test suite", () => {
  it("Displays matching places while typing in both From and To locations fields", () => {
    component();

    const fromInput = screen.getByLabelText("From");
    const toInput = screen.getByLabelText("To");

    userEvent.click(fromInput);

    expect(screen.getByText("Buenos Aires")).toBeVisible();
    expect(screen.getByText("Miami")).toBeVisible();
    expect(screen.getByText("Cordoba")).toBeVisible();

    userEvent.type(fromInput, "Bue");

    expect(screen.getByText("Buenos Aires")).toBeVisible();
    expect(screen.queryByText("Miami")).toBeNull();
    expect(screen.queryByText("Cordoba")).toBeNull();

    userEvent.clear(fromInput);
    userEvent.type(fromInput, "Mia");

    expect(screen.getByText("Miami")).toBeVisible();
    expect(screen.queryByText("Buenos Aires")).toBeNull();
    expect(screen.queryByText("Cordoba")).toBeNull();

    userEvent.click(toInput);

    expect(screen.getByText("Buenos Aires")).toBeVisible();
    expect(screen.getByText("Miami")).toBeVisible();
    expect(screen.getByText("Cordoba")).toBeVisible();

    userEvent.type(toInput, "Bue");

    expect(screen.getByText("Buenos Aires")).toBeVisible();
    expect(screen.queryByText("Miami")).toBeNull();
    expect(screen.queryByText("Cordoba")).toBeNull();
  });

  it("Navigates through places options using the arrow keys and selects using enter", () => {
    component();

    const fromInput = screen.getByLabelText("From");

    userEvent.type(fromInput, "{arrowdown}");
    userEvent.type(fromInput, "{enter}");

    expect(screen.getByLabelText("From").value).toEqual("New York (NYC)");

    userEvent.clear(fromInput);
    userEvent.type(fromInput, "{arrowup}");
    userEvent.type(fromInput, "{enter}");

    expect(screen.getByLabelText("From").value).toEqual("Buenos Aires (BUE)");
  });

  it("Selects passengers correctly", () => {
    component();

    const dropdownButton = screen.getByText("1 Passenger");

    userEvent.click(dropdownButton);

    const adultsInput = screen.getByLabelText("Adults passengers");

    userEvent.clear(adultsInput);
    userEvent.type(adultsInput, "3");

    expect(screen.getByText("3 Passengers")).toBeVisible();

    userEvent.click(screen.getByLabelText("Decrement Adults passengers"));
    expect(screen.getByText("2 Passengers")).toBeVisible();

    userEvent.click(screen.getByLabelText("Increment Adults passengers"));
    userEvent.click(screen.getByLabelText("Increment Adults passengers"));
    expect(screen.getByText("4 Passengers")).toBeVisible();

    userEvent.click(screen.getByLabelText("Increment Children passengers"));
    userEvent.click(screen.getByLabelText("Increment Infants passengers"));

    expect(screen.getByText("4 Adults, 1 Children, 1 Infant")).toBeVisible();

    userEvent.click(dropdownButton);

    expect(screen.queryByLabelText("Increment Adults passengers")).toBeNull();
  });

  it("Switches flight type", () => {
    component();

    const switchButton = screen.getByLabelText("Switch flight type");

    expect(screen.getByLabelText("Return flight")).toBeEnabled();
    expect(screen.getByLabelText("Outbound flight")).toBeVisible();

    userEvent.click(switchButton);

    expect(screen.getByLabelText("Return flight")).toBeDisabled();
    expect(screen.queryByLabelText("Outbound flight")).toBeNull();
    expect(screen.getByLabelText("One-way")).toBeVisible();
  });
});
