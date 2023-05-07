import React from 'react'
import { Container, Box } from '@mui/material'
import { SignUpForm } from '../componets'

const SignUp = () => {
  return (
    <Container maxWidth='lg'>
        <Box sx={{padding:'1rem 0 0 0'}}>
           <SignUpForm/>
        </Box>
    </Container>
  )
}

export default SignUp