import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, MyWideButton } from "../login-form/login-form.styles";

const defaultFormFields = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstname, lastname, email, password, confirmPassword } = formFields;
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password === confirmPassword) {
        let passwordRegex = /(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,}/;
        if (password.match(passwordRegex)) {
          loginUser(email);
          resetFormFields();
          navigate("/");
        } else {
          alert(
            "Password must have atleast 6 characters and have atleast one number and one letter"
          );
        }
      } else {
        alert("Passwords do not match");
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
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstname"
          value={firstname}
        />

        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastname"
          value={lastname}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <MyWideButton type="submit">Signup</MyWideButton>
      </form>
    </SignInContainer>
  );
};

export default RegisterForm;
