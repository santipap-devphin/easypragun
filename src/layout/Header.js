import React , {Fragment , useContext , useEffect} from 'react';
import {Container , Grid , Typography , Box , Stack , Divider , IconButton} from "@mui/material";
import { useLocation } from 'react-router-dom';
import DataContext from '../context/DataContext';
import MenuDeskTop from '../component/MenuDeskTop';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = ({textGold}) => {

    const {myRef , setLocate} = useContext(DataContext);

    const location = useLocation();

    useEffect(() => {

        setLocate(location.pathname)

    },[])

    const ScreenXl = null;
    return (
            <>      
                    <Box className='sticky-bar' sx={{flexGrow:1 , ml:-1 , pt:1,pl:3 , pr:3, pb:5 , backgroundColor: "#181818 !important" , color:"#fff !important"}}>
                        <div ref={myRef}></div>
                        <Grid container spacing={1}>
                                <Grid item xs={12} md={6} sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}} align="center">
                                    
                                <Stack 
                                    direction="row"
                                    spacing={{ xs: 1, sm: 2, md: 2 }}
                                    sx={{justifyContent:"center",textAlign:"center",alignItems:"center" , pt:0.5}}
                                    >
                                    <Typography>คำถาม</Typography>
                                    <Typography>|</Typography>
                                    <Typography>ช่วยเหลือ</Typography>
                                    <Typography>|</Typography>
                                    <Typography>ฉุกเฉิน</Typography>
                                    
                                </Stack>
                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack 
                                        direction="row"
                                        spacing={{ xs: 1, sm: 1, md: 1 }}
                                        sx={{justifyContent:"center",textAlign:"center",alignItems:"center"}}
                                        >
                                         <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                                             <FacebookIcon />
                                        </IconButton>
                                        <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                                             <YouTubeIcon />
                                        </IconButton>
                                        <IconButton size="small" aria-label="show 4 new mails" color="inherit">
                                             <InstagramIcon />
                                        </IconButton>
                                       
                                        
                                    </Stack>
                                </Grid>
                        </Grid>
                        
                    </Box>
                       <Grid container spacing={1} sx={{mt:-4.5}}>
                            <Container>
                                    <MenuDeskTop textGold={textGold}/>
                            </Container>
                               
                        </Grid>
        </>
     )
}

export default Header