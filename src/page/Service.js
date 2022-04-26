import React , {useContext , useEffect} from 'react';
import MenuTop from '../component/MenuTop';
import { ThemeProvider } from '@mui/material/styles';
import DataContext from '../context/DataContext';
import {Grid , Container , Typography ,Stack , IconButton} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import Brandcrumb from '../component/Brandcrumbs/Brandcrumb';
import SecProduct from '../wrappers/OurService/SecProduct';
import Footer from '../layout/Footer';

const Service = () => {
    const {theme , styles , locate
    } = useContext(DataContext)
  
    const sizeXs = useMediaQuery('(min-width:1200px)');

    return (
                <ThemeProvider theme={theme}>
                    <MenuTop textGold={styles.textGold} />
                        <Container>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: sizeXs ? 24 : 12 }} sx={{m:0.5}}>
                                    <Grid item xs={12} md={4}>
                                            <Stack direction="row" spacing={2} sx={{justifyContent:sizeXs ? "center" : "left"  , alignItems:"center" , textAlign:"left"}}>
                                                    <ApartmentIcon sx={{ fontSize: 60  , color:"#DFB163"}} />
                                                    <Typography> ออฟฟิคเรา <br/>123 Street, New York, USA </Typography>
                                                    
                                            </Stack>
                                        
                                        
                                    </Grid>  
                                    <Grid item xs={12} md={4} >
                                                    <Stack direction="row" spacing={2} sx={{justifyContent:sizeXs ? "center" : "left"  , alignItems:"center" , textAlign:"left"}}>
                                                            <MailOutlineIcon sx={{ fontSize: 60  , color:"#DFB163"}} />
                                                            <Typography> อีเมล์ <br/>info@example.com</Typography>
                                                    </Stack>
                                    </Grid> 
                                    <Grid item xs={12} md={4}>
                                                    <Stack direction="row" spacing={2} sx={{justifyContent:sizeXs ? "center" : "left"  , alignItems:"center" , textAlign:"left"}}>
                                                            <WifiCalling3Icon sx={{ fontSize: 60  , color:"#DFB163"}} />
                                                            <Typography> โทร <br/>+012 345 6789</Typography>
                                                    </Stack>
                                    </Grid> 
                                </Grid>  
                        </Container>
                        <Brandcrumb pagename={locate} />
                        <SecProduct />
                        <Footer />
                </ThemeProvider>
    )
}

export default Service