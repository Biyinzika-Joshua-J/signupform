import React from 'react'
import { Box, Typography } from '@mui/material'
import Form from './Form';
import FormStepper from '../stepper/FormStepper';
import Typer from '../typeWriter/Typer';

const SignUpForm = () => {
  return (
    <Box>
        <Box>
           <Typer/>
        </Box>
        <FormStepper/>
        <Form/>
    </Box>
  )
}

export default SignUpForm