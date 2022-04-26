import React , { useRef, useState } from 'react'
import {Container ,Stack , Typography , Grid , Box , Button , Paper , Card , CardActions , CardContent , CardMedia , Divider} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation } from "swiper";
import StarIcon from '@mui/icons-material/Star';


const SecTestimonial = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        console.log(className)
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
      

  return (
        <Grid container spacing={2} sx={{mb:15}}>

            <Grid item xs={12} md={12}>
               
                            <Swiper
                                    pagination={pagination}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>

                                                <Stack spacing={1}>

                                                    <Typography variant='h6' className='text-primary font-weight-normal text-uppercase mb-3' sx={{textAlign:"left"}}>ผลตอบรับลูกค้าของเรา</Typography>
                                                    <Typography variant='h4' className='mb-4 section-title' sx={{textAlign:"left" , backgroundColor:"#E6F4F6"}}>ข้อความประทับใจ</Typography>
                                            
                                                    <Typography variant='p'>ทำประกันสุขภาพกับที่นี้มา ปีที่5 แล้วครับ ตัวแทนใส่ใจบริการดี ปรึกษาอะไรได้ตลอดประทับใจมากครับ</Typography>
                                            
                                                
                                                    <Stack spacing={1} direction="row" justifyContent="left" sx={{color:"#dfb163"}}>
                                                            <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                                                    </Stack>
                                                    <Typography variant="body2" sx={{textAlign:"left"}}>
                                                            ภพธร เวชพาณิชย์
                                                    <br />
                                                        พนักงานบริษัทเอกชน
                                                    </Typography>
                                                    </Stack>

                                    </SwiperSlide>
                                    <SwiperSlide>Slide 2</SwiperSlide>
                                    <SwiperSlide>Slide 3</SwiperSlide>
                                    <SwiperSlide>Slide 4</SwiperSlide>
                                    <SwiperSlide>Slide 5</SwiperSlide>
                                    
                                
                </Swiper>

            </Grid>
           
        </Grid>
   )
}

export default SecTestimonial