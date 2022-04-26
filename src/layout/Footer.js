import React from 'react';
import { Link } from 'react-router-dom';
import {Container , Grid , Typography , Box , Stack , Divider , IconButton , TextField , Button } from "@mui/material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Footer = () => {
  return (
    

       <div>
       <Grid container spacing={4} className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
            <Grid item xs={12} md={6} lg={3}>
                <Stack spacing={1}>
                    <Typography variant='h4' className='text-primary mb-4'>Get In Touch</Typography>
                    <Typography variant='p'> <AddLocationAltIcon className='mr-2' /> 123 Street, New York, USA</Typography>
                    <Typography variant='p'> <CallIcon className='mr-2' /> +012 345 67890</Typography>
                    <Typography variant='p'> <ForwardToInboxIcon className='mr-2' /> info@example.com</Typography>
                    <div className='d-flex justify-content-start mt-4'>
                            <a className='btn btn-outline-light rounded-circle text-center mr-2 px-0' style={{width:"38px" , height:"38px"}}>
                                <FacebookIcon />
                            </a>
                            <a className='btn btn-outline-light rounded-circle text-center mr-2 px-0' style={{width:"38px" , height:"38px"}}>
                                <YouTubeIcon />
                            </a>
                            <a className='btn btn-outline-light rounded-circle text-center mr-2 px-0' style={{width:"38px" , height:"38px"}}>
                                <InstagramIcon />
                            </a>
                            <a className='btn btn-outline-light rounded-circle text-center mr-2 px-0' style={{width:"38px" , height:"38px"}}>
                                <TelegramIcon />
                            </a>

                    </div>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Stack spacing={1}>
                        <Typography variant='h4' className='text-primary mb-4'>Quick Links</Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/" style={{color:"#fff"}}>Home</Link></Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/about" style={{color:"#fff"}}>About</Link></Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/Service" style={{color:"#fff"}}>Service</Link></Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/Contact" style={{color:"#fff"}}>Contact</Link></Typography>
                </Stack>

            </Grid>
            <Grid item xs={12} md={6} lg={3}>

                <Stack spacing={1}>
                        <Typography variant='h4' className='text-primary mb-4'>Popular Links</Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/" style={{color:"#fff"}}>Home</Link></Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/about" style={{color:"#fff"}}>About</Link></Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/Service" style={{color:"#fff"}}>Service</Link></Typography>
                        <Typography variant='p'><ArrowForwardIosIcon className='mr-2' sx={{fontSize:15}} />  <Link to="/Contact" style={{color:"#fff"}}>Contact</Link></Typography>
                </Stack>

            </Grid>
            <Grid item xs={12} md={6} lg={3}>

                <Stack spacing={1}>
                    <Typography variant='h4' className='text-primary mb-4'>Newsletter</Typography>
                        <TextField id="filled-basic" label="Your Name" variant="filled" sx={{backgroundColor:"#F3F6FF"}} />
                        <TextField id="filled-basic" label="Your Email" variant="filled" sx={{backgroundColor:"#F3F6FF"}} />
                        <Button variant="contained" sx={{pt:2,pb:2}}>Submit Now</Button>

                </Stack>

            </Grid>
            

        </Grid>
        <Stack spacing={1} className="bg-secondary pt-3" sx={{textAlign:"center"}}>
                <Typography variant='h5' className='text-primary mb-4'>Your Site Name</Typography>
        </Stack>
       </div>
        
        

  )
}

export default Footer