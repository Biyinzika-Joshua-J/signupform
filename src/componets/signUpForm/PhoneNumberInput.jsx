import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number"; // https://www.npmjs.com/package/material-ui-phone-number

const PhoneNumberInput = (props) => {
  const { control } = useFormContext();
  const { name, label, required, errorobj, sx } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const fieldWithValueRemoved = delete field["value"]; // solves the error:  A component is changing an uncontrolled input to be controlled
        return (
          <MuiPhoneNumber
            defaultCountry={"ug"}
            variant="outlined"
            fullWidth={true}
            required
            {...field}
            sx={sx}
          
            InputLabelProps={{
              className: required ? "required-label" : "",
              required: required || false,
            }}
            error={isError}
            helperText={errorMessage}
            {...props}
          />
        );
      }}
    />
  );
};

export default PhoneNumberInput;
