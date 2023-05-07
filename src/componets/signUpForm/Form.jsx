import React, { useState, useEffect } from "react";
import { Box, TextField, FormControl, Button } from "@mui/material";
import FormInput from "./FormInput";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneNumberInput from "./PhoneNumberInput";
import { isPhoneValid } from "../../utilities/isPhoneValid";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/formStepSlice";

const validationSchema = yup
  .object({
    name: yup.string().required("Name Validation Field is Required").min(2),
    telephone: yup.string().min(10).required("A phone number is required"),
    email: yup.string().email().required(),
  })
  .required();


const stepFormTitles = [
    "Your new here? Let's get some information. First your name.",
    "Second, your telephone number",
    "And lastily, your email address",
]

const Form = () => {
  const [phoneValid, setPhoneValid] = useState(true);
  const activeStep = useSelector(state => state.step.activeStep);
  const dispatch = useDispatch();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      telephone: "",
      email: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  function handleOnChangePhone(phone) {
    console.log(phone);
  }

  const onSubmit = (data) => {
    let { telephone } = data;
    telephone = telephone.substring(1);
    let isValid = isPhoneValid(telephone);
    isValid?setPhoneValid(true):setPhoneValid(false);
   
    console.log(data);

  };

  function nextHandler(){
    dispatch(increment());
  }

  function previousHandler(){
    dispatch(decrement());
  }

  return (
    <Box>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
         {activeStep===0 && <FormInput
            name="name"
            label="Name"
            required={true}
            errorobj={errors}
            sx={{margin:'1rem 0'}}
          />}

        {activeStep===1 && <PhoneNumberInput
           name="telephone"
            required={true}
            errorobj={errors}
            sx={{margin:'1rem 0'}}
          />}
         
          {/*<p style={{color:'red'}}>{phoneValid?'':'The telephone you have enter is not valid'}</p>*/}

         {activeStep===2 && <FormInput
            name="email"
            label="Enter your email"
            required={true}
            errorobj={errors}
            sx={{margin:'1rem 0'}}
          />}
            <Box>
                {activeStep>=1&&<button onClick={previousHandler}>
                    previous
                </button>}
                {(activeStep===2)&&<Button type="submit" variant="contained">
                    Submit
                </Button>}
                {activeStep<=1&&<button  onClick={nextHandler}>
                    next
                </button>}
            </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Form;
