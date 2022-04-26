import React  , {useState} from 'react'
import {Container ,Stack , Typography , Grid , Box , Button , Card , CardActions , CardContent , FormControl , TextField , Select , MenuItem , InputLabel , Checkbox} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Navigation } from "swiper";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SecProduct = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const sizelaptop = useMediaQuery('(min-width:1024px)');
  
    
  return (
      <>
     <Box sx={{backgroundColor:"#E6F4F6"}}>

        <Container>
        <Grid container spacing={4} sx={{mt:0 , mb:0 , pt:5 , pb:5}}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6'>ผลิตภัณฑ์ของเรา</Typography>
                    <Typography variant='h4' className='mb-4 section-title'>Awesome Interior Designing Services For Your Home</Typography>
                    <Typography variant='p'>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</Typography>
                    
                    <div style={{marginTop:20 , marginBottom:10}}>
                        <Button className='font-kanit-light' size="large" variant="outlined" sx={{color:"#dfb163" , borderColor:"#dfb163"}}>ดูรายละเอียดเพิ่มเติม</Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>

                <Swiper
                        style={{
                            "--swiper-navigation-color": "#000",
                            "--swiper-navigation-size": "5",
                            
                           
                          }}
                          slidesPerView={sizelaptop === true ? 2 : 1}
                          spaceBetween={20}
                          slidesPerGroup={sizelaptop === true ? 2 : 1}
                          loop={true}
                          loopFillGroupWithBlank={true}
                          navigation={true}
                          modules={[Navigation]}
                          className="mySwiper"
                    >
                        <SwiperSlide style={{ borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px" , background:"transparent"}}>

                            <Box>
                                    <Box sx={{backgroundColor:"#006192" , color:"#fff" ,  borderTopLeftRadius: "30px"}}>
                                            <Typography className='font-kanit-light' gutterBottom variant="h5" component="div">
                                                Beyond Platinum
                                            </Typography>

                                    </Box>

                                    <Card sx={{backgroundColor: '#fff',  borderBottomRightRadius: "30px" , boxShadow: "0px 2px 2px 0px rgb(0 0 0 / 25%)" , mt:-1}}>
                                   
                                    <CardContent>
                                      
                                       
                                        
                                        <Typography style={{textAlign:"left" , lineHeight:2.2}} > <CheckCircleIcon sx={{color:"#2e7d32"}} /> วงเงินสูงสุดถึง 100 ล้านบาทต่อปี</Typography>
                                        <Typography style={{textAlign:"left" , lineHeight:2.2}}> <CheckCircleIcon sx={{color:"#2e7d32"}} /> ครอบคลุมทุกการรักษาพยาบาล</Typography>
                                        <Typography style={{textAlign:"left" , lineHeight:2.2}}> <CheckCircleIcon sx={{color:"#2e7d32"}} /> ค่าตรวจสุขภาพ สูงสุดถึง 20,000 บาท/ปี</Typography>
                                       
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
                                
                                 
                                 {/*<Paper elevation={0} variant="outlined"  component={Stack} justifyContent="center">

                                        <RoomPreferencesIcon />
                                        Slider 1 
                                    </Paper>*/}

                                 
                            </Box>

                        </SwiperSlide>
                        <SwiperSlide style={{ borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px" , background:"transparent"}}>
                                <Box>   
                                    <Box sx={{backgroundColor:"#006192" , color:"#fff" ,  borderTopLeftRadius: "30px"}}>
                                            <Typography className='font-kanit-light' gutterBottom variant="h5" component="div">
                                                 Platinum
                                            </Typography>

                                    </Box>
                                     <Card sx={{borderBottomRightRadius: "30px" , boxShadow: "0px 2px 2px 0px rgb(0 0 0 / 25%)" , mt:-1}}>
                                    
                                        <CardContent>
                                           
                                            <Typography style={{textAlign:"left" , lineHeight:2.2}} > <CheckCircleIcon sx={{color:"#2e7d32"}} /> วงเงินสูงสุดถึง 80 ล้านบาทต่อปี</Typography>
                                            <Typography style={{textAlign:"left" , lineHeight:2.2}}> <CheckCircleIcon sx={{color:"#2e7d32"}} /> ครอบคลุมทุกการรักษาพยาบาล</Typography>
                                            <Typography style={{textAlign:"left" , lineHeight:2.2}}> <CheckCircleIcon sx={{color:"#2e7d32"}} /> ค่าตรวจสุขภาพ สูงสุดถึง 15,000 บาท/ปี</Typography>
                                        </CardContent>
                                      
                                        <CardActions sx={{justifyContent:"center" , mb:1}}>
                                            <Button className='font-kanit-light' size="large" variant='outlined' 
                                            sx={{color:"#007ab3" , borderColor:"#007ab3" , '&:hover': {
                                            backgroundColor: '#006192',
                                            color:"#fff"
                                            },}}>สนใจ</Button>
                                            <Button className='font-kanit-light' size="large" variant='outlined'
                                            sx={{color:"#007ab3" , borderColor:"#007ab3" , '&:hover': {
                                                backgroundColor: '#006192',
                                                color:"#fff"
                                                },}}
                                            >รายละเอียด</Button>
                                        </CardActions>
                                        </Card>
                                </Box>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px" , background:"transparent"}}>
                                    <Card sx={{ maxWidth: 300 , backgroundColor: '#f9f9f9'  ,borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px" , boxShadow: "0px 5px 5px 0px rgb(0 0 0 / 10%)"  }}>
                                    
                                    <CardContent>
                                        <RoomPreferencesIcon sx={{fontSize: 60 , color:"#dfb163"}} />
                                        <Typography gutterBottom variant="h5" component="div">
                                        ผลิตภัณฑ์ 3
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{justifyContent:"center"}}>
                                        <Button size="small" variant='outlined'>Buy</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                    </Card>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px" , background:"transparent"}}>

                            <Card sx={{ maxWidth: 300 , backgroundColor: '#f9f9f9' , borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px" , boxShadow: "0px 5px 5px 0px rgb(0 0 0 / 10%)"  }}>
                                    
                                    <CardContent>
                                        <RoomPreferencesIcon sx={{fontSize: 60 , color:"#dfb163"}} />
                                        <Typography gutterBottom variant="h5" component="div">
                                        ผลิตภัณฑ์ 4
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{justifyContent:"center"}}>
                                        <Button size="small">Buy</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                    </Card>
                        </SwiperSlide>
                        
                    </Swiper>

                </Grid>
        </Grid>

    </Container>
    </Box>
    <Container>
        <Stack spacing={1} sx={{mt:0 , mb:0 , pt:5 , pb:5 , textAlign:"center"}}>
                 <Typography variant='h3'>ติดต่อเรา</Typography>
        </Stack>
        <Grid container spacing={4}>

        <Grid item xs={12} md={12}>


                <FormControl  fullWidth >
                    
                         <Stack spacing={1}>
                         <FormControl variant="filled" sx={{ mt: 1 , mb: 1 }} fullWidth>

                                <InputLabel id="demo-simple-select-filled-label">เลือกแผนที่สนใจ</InputLabel>
                                <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                                </FormControl>
                         </Stack>
                         <Stack 
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            sx={{ mt: 1 , mb: 1}}
                            >
                            <TextField  id="filled-basic" label="ชื่อ" variant="filled" fullWidth />
                            <TextField id="filled-basic" label="นามสกุล" variant="filled" fullWidth />
                        </Stack>
                        <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        sx={{ mt: 1 , mb: 1}}
                        >
                            <TextField id="filled-basic" label="เบอร์โทรศัพท์" variant="filled" fullWidth />
                            <TextField id="filled-basic" label="อีเมล์" variant="filled" fullWidth />

                        </Stack>      
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                            <FormControl variant="filled" sx={{ mt: 1 , mb: 1 }} fullWidth>

                                        <InputLabel id="demo-simple-select-filled-label">จังหวัด</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={age}
                                        onChange={handleChange}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>

                                        </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <FormControl variant="filled" sx={{ mt: 1 , mb: 1}} fullWidth>

                                        <InputLabel id="demo-simple-select-filled-label">โรงพยาบาล</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={age}
                                        onChange={handleChange}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                
                            </FormControl>
                            </Grid>
                        </Grid>
                        <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            <Checkbox {...label} defaultChecked color="success" />
                            <Typography variant='p'>ข้าพเจ้าตกลงและรับทราบว่าข้อมูลของข้าพเจ้าได้ถูกจัดเก็บ ใช้ หรือเปิดเผย ภายในหรือนอกประเทศไทย เพื่อการวิเคราะห์ทางการตลาด ติดต่อ หรือให้ข้อมูลต่างๆ ที่เกี่ยวข้องกับบริษัท และอื่นๆ ใน คำชี้แจงเกี่ยวกับข้อมูลส่วนบุคคล </Typography>
                        </Stack>    
                        <Stack spacing={1} alignItems="center" sx={{mt:5}}>
                                <Button className='font-kanit-light' variant="contained" sx={{width:"25ch" , backgroundColor:"#075994" , color:"#fff",fontSize:20}} size="large">ยืนยันข้อมูล</Button>
                        </Stack>                 
                        
                    
                    

                </FormControl>
        </Grid>

        </Grid>
    </Container>
    
    </>
    
  )
}

export default SecProduct