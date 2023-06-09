import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

import React from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);
  };

  return (
    <PaymentFormContainer onSubmit={paymentHandler}>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Payment</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
