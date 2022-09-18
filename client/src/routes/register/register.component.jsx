import React from "react";
import { BoldText } from "../../components/cart/cart.styles";
import RegisterForm from "../../components/register-form/register-form.component";
import { DescriptionContainer, LoginContainer } from "../login/login.styles";

const Register = () => {
  return (
    <LoginContainer>
      <DescriptionContainer>
        <BoldText fontSize={40} fontWeight={700}>
          Signup
        </BoldText>
        <span>We do not share your personal information with anyone</span>
      </DescriptionContainer>
      <RegisterForm />
    </LoginContainer>
  );
};

export default Register;
