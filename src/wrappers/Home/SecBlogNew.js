import React from 'react'
import {Container ,Stack , Typography , Grid , Box , Button , Card , CardActions , CardContent , CardMedia} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';

const SecBlogNew = () => {
  return (
     <Box className='bg-light pb-2'>

     
    <Container>
            <Stack spacing={2}>
                    <Typography variant='h3' textAlign="center" sx={{mt:5 , mb:5}}>OUR BLOG</Typography>
            </Stack>
        <Grid container spacing={4} sx={{mb:15}}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image="../../img/newblank.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                             <Stack spacing={1} direction="row" sx={{pt:1}}>
                                <Typography variant="body2" component="div"><PersonIcon sx={{fontSize:18 , color:"#dfb163"}} /> Admin</Typography>
                                <Typography variant="body2" component="div"> <DateRangeIcon sx={{fontSize:18 , color:"#dfb163"}} /> Date</Typography>
                             </Stack>
                        </CardContent>
                        <CardActions>
                            
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image="../../img/newblank.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Stack spacing={1} direction="row" sx={{pt:1}}>
                                        <Typography variant="body2" component="div"><PersonIcon sx={{fontSize:18 , color:"#dfb163"}} /> Admin</Typography>
                                        <Typography variant="body2" component="div"> <DateRangeIcon sx={{fontSize:18 , color:"#dfb163"}} /> Date</Typography>
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image="../../img/newblank.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                                <Stack spacing={1} direction="row" sx={{pt:1}}>
                                    <Typography variant="body2" component="div"><PersonIcon sx={{fontSize:18 , color:"#dfb163"}} /> Admin</Typography>
                                    <Typography variant="body2" component="div"> <DateRangeIcon sx={{fontSize:18 , color:"#dfb163"}} /> Date</Typography>
                                </Stack>   
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                    </Card>
                </Grid>
        </Grid>
    </Container>
    </Box>
  )
}

export default SecBlogNew