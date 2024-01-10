import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
//Test initial page state - include 2 tests for initial state
test('pizza checkbox is initially unchecked', () => {
    render(<App />)

    const addPep = screen.getByRole('checkbox', { name: /add pepperoni/i })

    expect(addPep).not.toBeChecked()
})

test('toppings list initially contains only cheese', () => {
    render(<App />)

    expect(screen.getAllByRole('listitem').length).toBe(1)
    expect(screen.getByText('Cheese')).toBeInTheDocument()
    expect(screen.queryByText('Pepperoni')).not.toBeInTheDocument()
})
//Test effect of clicking checkbox
test('checkboxes become checked when user clicks them', () => {
    render(<App />)

    const addPep = screen.getByRole('checkbox', { name: /add pepperoni/i })

    userEvent.click(addPep)
    expect(addPep).toBeChecked
})

test('topping appears in toppings list when checked', () => {
    render(<App />)

    const addPep = screen.getByRole('checkbox', { name: /add pepperoni/i })


    userEvent.click(addPep)

    expect(screen.getAllByRole('listitem').length).toBe(2)
    expect(screen.getByText('Cheese')).toBeInTheDocument()
    expect(screen.queryByText('Pepperoni')).toBeInTheDocument()    
})

//Test the effect of clicking the checkbox a second time
test("selected topping disappears when checked a second time", () => {
    render(<App />);
  
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
    userEvent.click(addPepperoni);
  
    expect(addPepperoni).toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();
  
    userEvent.click(addPepperoni);
  
    expect(addPepperoni).not.toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
  });
