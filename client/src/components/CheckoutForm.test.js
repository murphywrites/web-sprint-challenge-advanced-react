import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(<CheckoutForm />);

    //act

    // assert
    expect(screen.getByText(/checkout form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {

    //arrange
    render(< CheckoutForm />)

    //act
     // type into all inputs
  userEvent.type(screen.getByLabelText(/first name/i), "Donald");
  userEvent.type(screen.getByLabelText(/last name/i), "Duck");
  userEvent.type(screen.getByLabelText(/address/i), "101 Disneyway");
  userEvent.type(screen.getByLabelText(/city/i), "Pondville");
  userEvent.type(screen.getByLabelText(/state/i), "FL");
  userEvent.type(screen.getByLabelText(/zip/i), "90909");
  expect(screen.getByLabelText(/first name/i)).toHaveValue("Donald");

  //click submit button
  userEvent.click(screen.getByRole(/button/));
//assert
expect(screen.getByTestId(/successmessage/i)).toBeInTheDocument()
});
