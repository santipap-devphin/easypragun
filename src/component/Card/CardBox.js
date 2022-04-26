import React from 'react';
import {Typography , Box , Button , Card , CardActions , CardContent} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CardBox = ({title}) => {
  return (
            <Box sx={{
                width: 300,
                pb:0.2
            }}
            >
                <Box sx={{backgroundColor:"#006192" , color:"#fff" ,  borderTopLeftRadius: "30px"}}>
                        <Typography className='font-kanit-light' gutterBottom variant="h5" component="div">
                            Beyond Platinum {title}
                        </Typography>
                </Box>    
                <Card sx={{ maxWidth: 300 , backgroundColor: '#fff',   borderBottomRightRadius: "30px" , boxShadow: "0px 3px 3px 0px rgb(0 0 0 / 20%)",mt:-1 }}>
                    <CardContent>
                        <Typography style={{textAlign:"left" , lineHeight:2.5}} > <CheckCircleIcon sx={{color:"#2e7d32"}} /> วงเงินสูงสุดถึง 100 ล้านบาทต่อปี</Typography>
                        <Typography style={{textAlign:"left" , lineHeight:2.5}}> <CheckCircleIcon sx={{color:"#2e7d32"}} /> ครอบคลุมทุกการรักษาพยาบาล</Typography>
                        <Typography style={{textAlign:"left" , lineHeight:2.5}}> <CheckCircleIcon sx={{color:"#2e7d32"}} /> ค่าตรวจสุขภาพ สูงสุดถึง 20,000 บาท/ปี</Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:"center", mb:1}}>
                            <Button className='font-kanit-light' size="large" 
                            variant='outlined'
                            sx={{color:"#007ab3" , borderColor:"#007ab3" , '&:hover': {
                                backgroundColor: '#006192',
                                color:"#fff"
                                },}}
                            >สนใจ</Button>
                            <Button className='font-kanit-light' size="large" variant='outlined'
                            sx={{color:"#007ab3" , borderColor:"#007ab3" , '&:hover': {
                                backgroundColor: '#006192',
                                color:"#fff"
                                },}}
                            >รายละเอียด</Button>
                        </CardActions>
                </Card>
            </Box>
  )
}

export default CardBox