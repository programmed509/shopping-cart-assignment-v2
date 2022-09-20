import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <Group>
      <Input id={name} {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor={name}>
          {label} <span aria-hidden="true">*</span>
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
