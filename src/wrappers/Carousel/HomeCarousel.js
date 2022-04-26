import React , {useContext} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Stack , Typography , Grid , Box , Button , Paper} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DataContext from '../../context/DataContext';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HomeCarousel = () => {

    const {styles} = useContext(DataContext);

    /*<Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: "100%",
                    height: 800,
                    backgroundColor: '#00000080',
                    '&:hover': {
                    backgroundColor: '#fff',
                    opacity: [0.9, 0.8, 0.7],
                    },
                   
                }}*/
    
  return (

        <Swiper
            style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "100",
            "--swiper-pagination-color": "#dfb163",
             }}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper">
        <SwiperSlide>
            
            
             <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    backgroundColor: '#00000080',
                }}
                >
                     <Paper elevation={0} style={styles.HomeContainer} variant="outlined"  component={Stack} direction="column" justifyContent="center">

                         <Typography variant="h4" component="div" sx={{color:"#dfb163"}}>ประกันสุขภาพ เฟิร์สคลาส @บีดีเอ็มเอส (HSMFCP_S/ HSMFCB_S)</Typography>
                         <Typography variant="h6" component="div" sx={{color:"#fff"}}>ป่วยหนักแค่ไหน สบายใจได้ เพราะเราจ่ายตามจริงค่ารักษาสูงสุดถึง 120 ล้าน</Typography>
                         <Stack
                            sx={{ pt: 3 }}
                            direction="row"
                            spacing={3}
                            justifyContent="center"
                            >
                            <Button size="large" className='font-kanit-light' variant="contained" style={{paddingLeft:60 , paddingRight:60 , backgroundColor:"#252531" , color:"#fff"}}> รายละเอียดเพิ่มเติม <ArrowForwardIcon sx={{fontSize:20 ,pl:0.5}} /></Button>
                    
                        </Stack>
                        

                     </Paper>
                    
                        
                        
                   
                   

              </Box>
     </SwiperSlide>
        <SwiperSlide>
            
                <Typography>Slider 2</Typography>
             
        </SwiperSlide>
       
       
    </Swiper>
  )
}

export default HomeCarousel