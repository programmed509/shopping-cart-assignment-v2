import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, MyWideButton } from "./login-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let passwordRegex = /(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,}/;
      if (password.match(passwordRegex)) {
        loginUser(email);
        resetFormFields();
        navigate("/");
      } else {
        alert(
          "password must have atleast 6 characters and have atleast one number and one letter"
        );
      }
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          aria-label={"Please enter your registered Email ID"}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          aria-label={"Please enter your password"}
        />

        <MyWideButton type="submit">Login</MyWideButton>
      </form>
    </SignInContainer>
  );
};

export default LoginForm;
