import React from 'react';
import {Container ,Stack , Typography , Grid , Box , Button , Paper , Card , CardActions , CardContent , CardMedia} from "@mui/material";

const SecAgent = () => {
  return (
        <Box sx={{backgroundColor:"#EFF6EE"}}>
            <Container>
            <Stack spacing={2}>
                    <Typography variant='h4' textAlign="center" sx={{mt:5 , mb:5}}>ให้เราเป็นผู้ดูแลคุณ</Typography>
            </Stack>
            <Grid container spacing={4} sx={{mb:15}}>
                <Grid item xs={12} md={6} sx={{mb:7.5}}>
                    <img src='../../img/agentcontact.jpg'  style={{boxShadow: "0 0px 20px 0px rgb(0 0 0 / 10%)" , maxWidth:"100%"}} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='p' textAlign="left">เพราะเรารู้ว่าคุณอยากคุยกับตัวแทนที่รู้ใจ และเข้าใจความต้องการของคุณ และจะดีกว่าถ้ามีไลฟ์สไตล์แบบเดียวกัน</Typography>
                    <br/>
                    <br/>
                    <Typography variant='p' textAlign="left">ลองค้นหาตัวแทน แค่เลือกพื้นที่ ความเชี่ยวชาญ รวมถึงความสนใจของเขาที่ตรงกับคุณ</Typography>
                    <Button className='font-kanit-light' size="large" variant='contained'
                                            sx={{color:"#fff" , backgroundColor: '#006192' , borderColor:"#007ab3" , '&:hover': {
                                                backgroundColor: '#fff',
                                                color:"#000",
                                                borderColor:"#007ab3"
                                                },
                                            mt:5,mb:5}}
                     >ติดต่อตัวแทน</Button>
                </Grid>
            </Grid>

            </Container>
            
        </Box>
  )
}

export default SecAgent