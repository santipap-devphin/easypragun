import React  from 'react'
import {Typography , Grid , Button , Paper } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useMediaQuery from '@mui/material/useMediaQuery';
const SecVideo = ({bgvideo}) => {

    const sizeXs = useMediaQuery('(max-width:599px)');

    const sizeSm = useMediaQuery('(max-width:899px)');

    const sizeMd = useMediaQuery('(max-width:1199px)');

    const sizemid = useMediaQuery('(max-width:1024px)');

    const sizemLarge = useMediaQuery('(min-width:1200px)');

    /*const sizeLg = useMediaQuery('(max-width:1535px)');*/

    //var clientHeight = document.querySelector('.bg-column').offsetHeight;

    //console.log(clientHeight)
    //console.log(window.screen.width)

    const mLeft = window.screen.width * 0.25;

    const mTop = window.screen.height * 0.05;

    console.log(mLeft , mTop)

    const sizetab = useMediaQuery('(max-width:767px)');

  return (
    
            <Grid container spacing={2} sx={{mt:10 , mb:10}}>
                <Grid item xs={12} md={12} lg={6}>
                        <div className='video-inner' style={ 
                                sizeXs ? {position:'absolute' , marginTop:mTop , marginLeft:"40%"}
                                : sizeSm ? {position:'absolute' , marginTop:mTop*2 , marginLeft:"40%"}
                                : sizemid ? {position:'absolute' , marginTop:mTop*2.75 , marginLeft:"40%"}
                                :sizemLarge ? {position:'absolute' , marginTop:mTop*3.5 , marginLeft:"25%"}
                                :{position:'absolute' , marginTop:mTop , marginLeft:mLeft}
                            }>
                            <a href="https://top5insure.com/video/top5insure_insureheath.mp4" className="lightbox-image" data-caption="">
                                <PlayArrowIcon sx={{fontSize:100}} />
                            </a>
                        </div>
                        <img src='../../img/bgvideoinsureheath.png' style={sizetab ? {width:"100%"} : sizeSm ? {width:"100%"} : sizeMd ? {width:"100%"}: null} alt="bgvideoinsureheath" />
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Paper elevation={2} sx={{p:10 , borderTopLeftRadius:"50px" , borderBottomLeftRadius:"50px" , lineHeight:"30px"}}>
                                             <Typography variant='h4'>เคียงข้างคุณทุกเงื่อนไขชีวิต</Typography>
                                             <Typography variant='h6'>ไม่ว่าจะเงื่อนไขชีวิตเป็นอย่างไร เราพร้อมอยู่ข้างคุณ</Typography>
                                             <Typography variant='p' style={{marginTop:"20px"}}>
                                                <br/>
                                               
                                                 - เราให้ความคุ้มครอง กรณีลูกค้าติดเชื้อและเข้ารับการรักษาเป็นผู้ป่วยใน ครอบคลุม โรงพยาบาลสนาม Hospitel, Home Isolation และ Community Isolation
                                                <br/>
                                                - ลูกค้าจะได้รับเงินชดเชยรายวันสูงสุดถึง 14 วัน หากพบว่าติดเชื้อ
                                                <br/>
                                                - ได้รับความคุ้มครองกรณีมีอาการแพ้จากการฉีดวัคซีน
                                                <br/>
                                                - เราปรับลดการรอคอยให้ลูกค้าได้รับความคุ้มครองเร็วขึ้น
                                                <br/>
                                                - ลูกค้าสามารถกู้และเสียดอกเบี้ยต่ำเพื่อนำไปใช้ในยามจำเป็น
                                                <br/>
                                                *** อยากให้ลูกค้าได้เช็คกรมธรรม์ในมือ และนำผลประโยชน์เหล่านี้มาใช้เมื่อยามจำเป็นจริงๆ
                                                <br/>
                                                <Button variant="contained" sx={{mt:2 , pl:5 , pr:5}}>Play Video</Button>
                                             </Typography>
                     </Paper>
                </Grid>
            </Grid>
            
            
         
        
 
  )
}

export default SecVideo