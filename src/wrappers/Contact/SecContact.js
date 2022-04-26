import React from 'react';
import {Container ,Stack , Typography , Grid , Box ,  FormControl , TextField, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { minHeight } from '@mui/system';

const SecContact = () => {

const sizeXs = useMediaQuery('(min-width:1200px)');

  return ( <Container>
                <Grid container spacing={4} sx={{mb:4}}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{backgroundColor:"#DFB163" , p:5 , height:"100%"}}>
                                <Stack spacing={8}>
                                        <Box sx={{borderColor:"#fff" , border:1 , p:2}}>
                                            <Stack direction="row" spacing={2}>
                                                    <ApartmentIcon sx={{ fontSize: 60  , color:"#000"}} />
                                                    <Typography> ออฟฟิคเรา <br/>123 Street, New York, USA </Typography>
                                                 
                                            </Stack>
                                               
                                        </Box>
                                        <Box sx={{borderColor:"#fff" , border:1 , p:2}}> 

                                        <Stack direction="row" spacing={2}>
                                                        <MailOutlineIcon sx={{ fontSize: 60  , color:"#000"}} />
                                                        <Typography> อีเมล์ <br/>info@example.com</Typography>
                                         </Stack>

                                        </Box>
                                        <Box sx={{borderColor:"#fff" , border:1, p:2}}>
                                                <Stack direction="row" spacing={2}>
                                                        <WifiCalling3Icon sx={{ fontSize: 60  , color:"#000"}} />
                                                        <Typography> โทร <br/>+012 345 6789</Typography>
                                                 </Stack>
                                        </Box>
                                </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                     <Typography variant='h4' sx={{pt:2}}>ติดต่อเรา</Typography>
                    <FormControl  fullWidth >
                            <Stack 
                                /*direction={{ xs: 'column', sm: 'row' }}*/
                                direction="column"
                                spacing={{ xs: 1, sm: 2, md: 3 }}
                                sx={{ mt: 1 , mb: 1}}
                                >
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                                    <TextField  id="filled-basic" label="ชื่อ" variant="filled" fullWidth />
                                    <TextField id="filled-basic2" label="นามสกุล" variant="filled" fullWidth />
                                </Stack>
                               
                                <TextField id="filled-basic3" label="อีเมล์" variant="filled" fullWidth />
                                
                                <TextField id="filled-basic4" label="ติดต่อเรื่อง" variant="filled" rows={4} fullWidth />

                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="ข้อความ"
                                    style={
                                        {
                                            height:"100px" , 
                                            backgroundColor:"#0000000f" , 
                                            borderTopLeftRadius: "4px" , 
                                            borderTopRightRadius: "4px",
                                            border: "none",
                                            borderBottomColor: "#000",
                                            

                                        }
                                    }
                                     />
                                <Button variant='contained'> ส่งข้อความ</Button>
                                
                            </Stack>
                    </FormControl>
                    </Grid>
                </Grid>    
            </Container>
        )
}

export default SecContact