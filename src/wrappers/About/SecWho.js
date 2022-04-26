import React from 'react'
import {Container ,Stack , Typography , Grid , Box , Button} from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const SecWho = () => {
    
        return <Container>
                    <Grid container rowSpacing={1} sx={{mb:10}}>
                            <Grid item xs={12} md={6}>
                                    <Stack spacing={1} sx={{p:2}}>
                                            <Typography variant='h6' className='text-primary font-weight-normal text-uppercase mb-3'> เราคือใคร ?</Typography>
                                            <Typography variant='h4' className='section-title'> 25+ Years Experience In The Work</Typography>
                                            <Typography variant='p' component="div"> Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</Typography>
                                            <Stack>
                                                <Typography variant='p' component="div"> 
                                                        <CheckBoxIcon sx={{color:"#DFB163"}} />  25+ Years Experience
                                                </Typography>
                                                <Typography variant='p' component="div"> 
                                                        <CheckBoxIcon sx={{color:"#DFB163"}}/>  Best To Subport
                                                </Typography>
                                                <Typography variant='p' component="div"> 
                                                        <CheckBoxIcon sx={{color:"#DFB163"}}/>  Contact 24 Hrs.
                                                </Typography>
                                                <Typography component="div"> 
                                                        <Button variant="contained"  sx={{mt:2 , pl:5 , pr:5}}>View More ..</Button>
                                                </Typography>
                                            </Stack>
                                          
                                            
                                    </Stack>
                                    
                            </Grid>
                            <Grid item xs={12} md={6} >
                                    <Stack alignItems="center">
                                                <Box><img src='../../img/imgabout.jpg' style={{maxWidth:"100%"}} alt="imgabout" /></Box>
                                    </Stack>
                                   
                            </Grid>
                    </Grid>

               </Container>

}


export default SecWho;