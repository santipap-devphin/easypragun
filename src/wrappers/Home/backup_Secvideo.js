import React, { Fragment } from 'react'
import {Container ,Stack , Typography , Grid , Box , Button , Paper , Card , CardActions , CardContent , CardMedia , Divider} from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useMediaQuery from '@mui/material/useMediaQuery';
const SecVideo = ({bgvideo}) => {

    const sizeXs = useMediaQuery('(max-width:599px)');

    const sizeSm = useMediaQuery('(max-width:899px)');

    const sizemid = useMediaQuery('(max-width:1024px)');

    const sizeMd = useMediaQuery('(max-width:1199px)');

    const sizeLg = useMediaQuery('(max-width:1535px)');

    //var clientHeight = document.querySelector('.bg-column').offsetHeight;

    //console.log(clientHeight)


    //const sizetab = useMediaQuery('(min-width:768px)');

  return (
    
            <>
             <section className="video-section">

             <div style={bgvideo} className="bg-column"></div>

     

         <Grid container spacing={4}>
                     <Grid item xs={12} sm={12} md={12} lg={6}>

                         <Box className='video-inner' style=
                                {sizeXs ? {marginTop:"20%" , marginLeft:"33.33%"} 
                                : sizeSm ? {marginTop:"30%" , marginLeft:"45%"} 
                                : sizemid ? {marginTop:"0%" , marginLeft:"45%"} 
                                : sizeMd ? {marginTop:"40%" , marginLeft:"45%"} 
                                : sizeLg ? {marginTop:"0%" , marginLeft:"45%"} 
                                : null}>
                                 <PlayCircleOutlineIcon sx={{fontSize:100}}/>
                         </Box>
                                 
                             
                         
                     </Grid>
                     <Grid item xs={12} sm={12} md={12} lg={6}>
                             <Box className='content-box' 
                             style={sizeXs ? {marginLeft:"0%", marginTop:"20%" , padding:"30px"} 
                             : sizeSm ? {marginTop:"20%" , marginLeft:"0%"} 
                             : sizeMd ? {marginTop:"20%" , marginLeft:"0%"} : null}>

                                     
                                             <Typography variant='h4'>เคียงข้างคุณทุกเงื่อนไขชีวิต</Typography>
                                             <Typography variant='p'>ไม่ว่าจะเงื่อนไขชีวิตเป็นอย่างไร เราพร้อมอยู่ข้างคุณ</Typography>
                                             <Typography variant='p'>- เราให้ความคุ้มครอง กรณีลูกค้าติดเชื้อและเข้ารับการรักษาเป็นผู้ป่วยใน ครอบคลุม โรงพยาบาลสนาม Hospitel, Home Isolation และ Community Isolation</Typography>
                                             <Typography variant='p'>- ลูกค้าจะได้รับเงินชดเชยรายวันสูงสุดถึง 14 วัน หากพบว่าติดเชื้อ</Typography>
                                             <Typography variant='p'>- ได้รับความคุ้มครองกรณีมีอาการแพ้จากการฉีดวัคซีน</Typography>
                                             <Typography variant='p'>- เราปรับลดการรอคอยให้ลูกค้าได้รับความคุ้มครองเร็วขึ้น</Typography>
                                             <Typography variant='p'>- ลูกค้าสามารถกู้และเสียดอกเบี้ยต่ำเพื่อนำไปใช้ในยามจำเป็น</Typography>
                                             <Typography variant='p'>*** อยากให้ลูกค้าได้เช็คกรมธรรม์ในมือ และนำผลประโยชน์เหล่านี้มาใช้เมื่อยามจำเป็นจริงๆ</Typography>
                                    

                             </Box>
                        
                         {/*<div className='content-box' style={sizetab ? {marginLeft:"0px" , marginTop:"100px" , padding:60} : sizeMobile ? {marginLeft:"0px" , marginTop:"100px" , padding:60} : null}>
                     
                             <Typography variant='h4'>เคียงข้างคุณทุกเงื่อนไขชีวิต</Typography>
                             <Typography variant='p'>ไม่ว่าจะเงื่อนไขชีวิตเป็นอย่างไร เราพร้อมอยู่ข้างคุณ</Typography>
                             <Typography variant='p'>- เราให้ความคุ้มครอง กรณีลูกค้าติดเชื้อและเข้ารับการรักษาเป็นผู้ป่วยใน ครอบคลุม โรงพยาบาลสนาม Hospitel, Home Isolation และ Community Isolation</Typography>
                             <Typography variant='p'>- ลูกค้าจะได้รับเงินชดเชยรายวันสูงสุดถึง 14 วัน หากพบว่าติดเชื้อ</Typography>
                             <Typography variant='p'>- ได้รับความคุ้มครองกรณีมีอาการแพ้จากการฉีดวัคซีน</Typography>
                             <Typography variant='p'>- เราปรับลดการรอคอยให้ลูกค้าได้รับความคุ้มครองเร็วขึ้น</Typography>
                             <Typography variant='p'>- ลูกค้าสามารถกู้และเสียดอกเบี้ยต่ำเพื่อนำไปใช้ในยามจำเป็น</Typography>
                             <Typography variant='p'>*** อยากให้ลูกค้าได้เช็คกรมธรรม์ในมือ และนำผลประโยชน์เหล่านี้มาใช้เมื่อยามจำเป็นจริงๆ</Typography>
                         </div>*/}
                         
                     </Grid>
         </Grid>

        </section>

            </>
            
         
        
 
  )
}

export default SecVideo