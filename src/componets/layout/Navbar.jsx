import React from 'react'
import { AppBar, Toolbar, Stack, Box, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <>
        <AppBar sx={{backgroundColor:'#000'}} position='static'>
            <Toolbar>
                <Box sx={{width:'100%', textAlign:'center'}}>
                    <Typography variant='h5' sx={{color:'#fff'}}>
                        PinniTAGS
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar