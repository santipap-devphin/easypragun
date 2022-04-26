import React from 'react'
import {Container ,Stack , Typography , Grid , Box} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import TimelineIcon from '@mui/icons-material/Timeline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import HouseIcon from '@mui/icons-material/House';
const SecAboutUs = () => {

  const sizeMobile = useMediaQuery('(max-width:767px)');


return (
    <Box
    sx={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#00000080',
        height:"auto"
        
    }}
    className="bg-light"
    >
          <Container>
              <Grid container rowSpacing={1} style={{height: '100%'}}>
                    <Grid item xs={12} md={5} sx={{background:"#f5f0e0"}}>
                          <Stack justifyContent="center" alignItems="center" spacing={2} sx={{textAlign:"center" , pt: sizeMobile ? 5 : 20 , pl:5 , pr:5 , pb:sizeMobile ? 5 : 20}}>
                                      <Typography><TimelineIcon sx={{fontSize: 60 , color:"#252531"}} /></Typography>
                                      <Typography variant="h1" component="div" sx={{color:"#252531"}}>25+</Typography>
                                      <Typography variant="h3" component="div" sx={{color:"#252531"}}>Years Experience</Typography>
                          </Stack>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{mt:10,p:5}}>
                            <Stack spacing={2} sx={{textAlign:"left" , mb:3}}>
                                <Typography>LEARN ABOUT US</Typography>
                                <Typography variant="h4" className='mb-4 section-title'> We Are The Best Interior Designing Firm In Your City</Typography>
                                <Typography>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</Typography>
                            </Stack>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography> <HouseIcon sx={{fontSize: 60 , color:"#dfb163"}}/>  Lorem Ipsum </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography> <PsychologyIcon sx={{fontSize: 60 , color:"#dfb163"}}/>  Lorem Ipsum </Typography>
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography> <WarehouseIcon sx={{fontSize: 60 , color:"#dfb163"}}/> Lorem Ipsum </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography> <HourglassTopIcon sx={{fontSize: 60 , color:"#dfb163"}}/> Lorem Ipsum </Typography>
                                </Grid>
                            </Grid>
                    </Grid>
                </Grid>
            </Container>
    </Box>
      
  )
}

export default SecAboutUs