import React from "react";
import { BoldText } from "../../components/cart/cart.styles";
import LoginForm from "../../components/login-form/login-form.component";
import { DescriptionContainer, LoginContainer } from "./login.styles";

const Login = () => {
  return (
    <LoginContainer>
      <DescriptionContainer>
        <BoldText fontSize={40} fontWeight={700}>
          Login
        </BoldText>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </DescriptionContainer>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
