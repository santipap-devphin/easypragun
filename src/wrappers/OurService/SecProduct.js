import React from 'react';
import {Container ,Stack , Typography , Grid , Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Navigation } from "swiper";
import CardBox from '../../component/Card/CardBox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const SecProduct = () => {

    const sizeXs = useMediaQuery('(min-width:1200px)');

    const sizelaptop = useMediaQuery('(min-width:1024px)');

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#252531",
          color: "#DFB163",
          fontSize: 18,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
     
      const rows = [
        createData(`ค่ารักษาพยาบาล – ผู้ป่วยใน (มีการจำกัดวงเงินผลประโยชน์ เช่น ค่าห้อง ค่าอาหาร ค่าบริการในโรงพยาบาลต่อวัน ค่าใช้จ่ายรายวันเพื่อการดูแล กรณีผู้เอาประกันภัยมีอายุต่ำกว่า 16 ปี ค่ารักษาโรคทางจิตเวช เป็นต้น)`,'จ่ายตามจริง','จ่ายตามจริง'),
        createData('ค่ารักษาพยาบาล – ผู้ป่วยนอก (สูงสุด 30 ครั้งต่อรอบปีกรมธรรม์)','จ่ายตามจริง','จ่ายตามจริง'),
        createData('ค่าฉีดวัคซีน*','80,000 บาท','50,000 บาท'),
        createData('ค่าตรวจสุขภาพประจำปี* (สูงสุด 1 ครั้งต่อรอบปีกรมธรรม์)','30,000 บาท	','15,000 บาท'),
        createData('าทันตกรรม (ชดเชย 80% ของค่ารักษาพยาบาล)','100,000 บาท','45,000 บาท (เพิ่มเติมจากผลประโยชน์ 60 ล้านบาท)'),
      ];

      const contactPromise = [
        createData(`สมัครได้ตั้งแต่อายุ	`,' 6 – 70 ปี ต่ออายุสัญญาได้ถึงอายุ 84 ปี คุ้มครองถึงอายุ 85 ปี','1 เดือน 1 วัน – 70 ปี ต่ออายุสัญญาได้ถึงอายุ 84 ปี คุ้มครองถึงอายุ 85 ปี'),
        createData('สัญญาหลักที่สามารถแนบได้','',''),
        createData('อยุธยาชั่วระยะเวลา','จำนวนเงินเอาประกันภัย 100,000 บาท','จำนวนเงินเอาประกันภัย  50,000 บาท '),
        createData('มาย โฮล ไลฟ์ A90/21','มีกฎเกณฑ์ดังนี้  ','จำนวนเงินเอาประกันภัยขั้นต่ำ 200,000 บาท หรือ เบี้ยประกันภัยรายปีขั้นต่ำ 6,000 บาท โดยจำนวนเงินเอาประกันภัยต้องไม่น้อยกว่า 100,000 บาท'),
        createData('สัญญาหลักอื่นๆ ที่สามารถแนบสัญญาเพิ่มเติมคุ้มครองสุขภาพได้ตามที่บริษัทกำหนด ','จำนวนเงินเอาประกันภัยตั้งแต่ 100,000 บาทขึ้นไป ',''),
      ];

      const [expanded, setExpanded] = React.useState(false);

      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

      

  return (
            <>
             <Box sx={{backgroundColor:"#E6F4F6" , p:5}}>
                <Container>
                    <Grid container spacing={4}>
                            
                            <Grid item xs={12} md={6} sx={{mb:7.5}}>
                                <Typography variant='h6'>ผลิตภัณฑ์ของเรา</Typography>
                                <Typography variant='h4' className='mb-4 section-title'>Awesome Interior Designing Services For Your Home</Typography>
                                <Typography variant='p'>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</Typography>
                            </Grid>
                            
                            <Grid item xs={12} md={6} sx={{mb:7.5}}>
                            <Swiper
                                key={"sw0"}
                                style={{
                                "--swiper-navigation-color": "#000",
                                "--swiper-navigation-size": "5",
                            
                                }}
                                slidesPerView={sizelaptop ? 2 : 1}
                                spaceBetween={20}
                                slidesPerGroup={sizelaptop ? 2 : 1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                         >
                                     
                                      {
                                          ['1', '2'].map((val , index) => {

                                                    
                                                        return ( <SwiperSlide key={index.toString()} style={{ background:"transparent" , borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px"}}>
                                                                        <CardBox  title={`${index}`} />
                                                                    </SwiperSlide>
                                                                )
                                                    

                                          })
                                      }
                                      
                                     

                            </Swiper>
                            
                            </Grid>
                    </Grid>
                </Container>

            </Box>
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} sx={{mt:5,mb:5}}>

                    <Container>
                        <Stack textAlign="center">
                            <Typography variant='h4'>รายละเอียดแบบประกันสุขภาพ</Typography>
                        </Stack>
                        <Stack textAlign="left">
                            <Typography variant='h5'>จุดเด่นแผนประกัน</Typography>
                            <Typography variant='p'>ดูแลค่ารักษาพยาบาลเมื่อเจ็บป่วยต้องนอน หรือไม่นอน รพ. แบบเหมาจ่ายตามจริงค่ารักษาพยาบาลสูงสุดถึง 120 ล้านบาทต่อรอบปีกรมธรรม์ ที่โรงพยาบาลเครือบีดีเอ็มเอส กว่า 44 โรงพยาบาลทั่วประเทศไทยและกัมพูชา</Typography>
                             < br/>
                            <Typography variant='p'>มีให้เลือก 2 แผนความคุ้มครอง แผนบียอนด์ แพลทินัม (วงเงินผลประโยชน์ 120 ล้านบาทต่อรอบปีกรมธรรม์) และ แผนแพลทินัม (วงเงินผลประโยชน์ 60 ล้านบาทต่อรอบปีกรมธรรม์)</Typography>
                            < br/>
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                        <TableRow>
                                            <StyledTableCell className='font-kanit-light' align="center">จุดเด่น <br /> ผลประโยชน์และความคุ้มครอง ต่อรอบปีกรมธรรม์	</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"> แผนบียอนด์ แพลทินัม <br /> สูงสุด 120 ล้านบาท</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"> แผนแพลทินัม <br /> สูงสุด 60 ล้านบาท</StyledTableCell>
                                            
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                           
                                            </StyledTableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                             </TableContainer>
                        </Stack>
                    </Container>
                </Grid>

                    
                </Grid>
             </Box>
             <Box sx={{backgroundColor:"#e6f4f6"}}>
                    <Stack sx={{textAlign:"center" , pt:5 , pb:10}}>
                        <Typography variant='h3'> ความคุ้มครองและผลประโยชน์ </Typography>
                    </Stack>
             </Box>
             <Box sx={{backgroundColor:"#f5f0e0"}}>

                     <Container>

                     <Grid container spacing={4}>

                        
                         <Grid item xs={8} md={8}>

                            <Typography variant='h5' textAlign="right"> แผนบียอนด์ แพลทินัม </Typography>

                         </Grid>
                         <Grid item xs={4} md={4}>

                            <Typography variant='h5' textAlign="center"> แผนแพลทินัม </Typography>

                         </Grid>
                         <Grid item xs={12} md={12} sx={{mb:5}}>
 
                         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon />}
                                 aria-controls="panel1bh-content"
                                 id="panel1bh-header"
                                 >
                                 <Typography variant="h4">
                                     
                                    1. ผลประโยชน์กรณีเป็นผู้ป่วยใน
                                 </Typography>
                                </AccordionSummary>
                                 <AccordionDetails>
                                     {
                                         sizeXs ? 
                                         <>
                                         <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.1 ค่าห้อง ค่าอาหาร และค่าบริการในโรงพยาบาล
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                20,000 บาทต่อวัน
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                9,000 บาทต่อวัน
                                            </Typography>   
                                            </Grid>
                                     </Grid>
                                     <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.2 ค่าบริการทางการพยาบาล
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                             </Typography>   
                                            </Grid>
                                     </Grid>
                                     <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.3 ค่าห้อง ค่าอาหาร ค่าบริการในโรงพยาบาล และค่าบริการทางการพยาบาลในห้อง ICU
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                             </Typography>   
                                            </Grid>
                                     </Grid>
                                     </> 
                                         :
                                      <>
                                      <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead style={{backgroundColor:"#fff"}}>
                                                <TableRow>
                                                    <StyledTableCell className='font-kanit-light' align="center">จุดเด่น </StyledTableCell>
                                                    <StyledTableCell className='font-kanit-light' align="center"> แผนบียอนด์ แพลทินัม</StyledTableCell>
                                                    <StyledTableCell className='font-kanit-light' align="center"> แผนแพลทินัม </StyledTableCell>
                                                    
                                                </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                            1.1 ค่าห้อง ค่าอาหาร และค่าบริการในโรงพยาบาล
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">20,000 บาทต่อวัน</StyledTableCell>
                                                        <StyledTableCell align="center">9,000 บาทต่อวัน</StyledTableCell>
                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                            1.2 ค่าบริการทางการพยาบาล
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                            1.3 ค่าห้อง ค่าอาหาร ค่าบริการในโรงพยาบาล และค่าบริการทางการพยาบาลในห้อง ICU
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                    </StyledTableRow>
                                                 </TableBody>
                                            </Table>
                                    </TableContainer>
                                      </>
                                         
                                     }
                                     
                                    
                                     
                                 </AccordionDetails>
                             </Accordion>
                             <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon />}
                                 aria-controls="panel2bh-content"
                                 id="panel2bh-header"
                                 >
                                 <Typography sx={{ width: '100%'}} variant="h4"> 2. ผลประโยชน์กรณีไม่ต้องเข้าพักรักษาตัวเป็นผู้ป่วยใน <br/> ซึ่งมีตัวอย่างรายการดังต่อไปนี้</Typography>
                                 
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 <Typography>
                                     Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                     varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                     laoreet.
                                 </Typography>
                                 </AccordionDetails>
                             </Accordion>
                             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon />}
                                 aria-controls="panel3bh-content"
                                 id="panel3bh-header"
                                 >
                                 <Typography sx={{ width: '100%'}} variant="h4">
                                    3. ผลประโยชน์เพิ่มเติมอื่นๆ ในกรณีเป็นผู้ป่วยในและ <br />กรณีไม่ต้องเข้าพักรักษาตัวเป็นผู้ป่วยใน ซึ่งมีตัวอย่างรายการดังต่อไปนี้
                                 </Typography>
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 <Typography>
                                     Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                     amet egestas eros, vitae egestas augue. Duis vel est augue.
                                 </Typography>
                                 </AccordionDetails>
                             </Accordion>
                             <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon />}
                                 aria-controls="panel4bh-content"
                                 id="panel4bh-header"
                                 >
                                 <Typography sx={{ width: '100%'}} variant="h4">4. ระดับการจ่ายผลประโยชน์</Typography>
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 <Typography>
                                     Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                     amet egestas eros, vitae egestas augue. Duis vel est augue.
                                 </Typography>
                                 </AccordionDetails>
                             </Accordion>
                             
                         </Grid>
 
                     </Grid>

                     </Container>
                   
             </Box>
             <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} sx={{mt:5,mb:5}}>

                    <Container>
                        <Stack textAlign="left" sx={{mb:5}}>
                            <Typography variant='h4'>เงื่อนไขการรับประกัน</Typography>
                        </Stack>
                        <Stack textAlign="left">
                            
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                        <TableRow>
                                            <StyledTableCell className='font-kanit-light' align="center">การพิจารณารับประกันภัย <br /> ประกันสุขภาพ เฟิร์สคลาส @บีดีเอ็มเอส	</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"> แผนบียอนด์ แพลทินัม <br /> 120 ล้านบาท</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"> แผนแพลทินัม <br /> 60 ล้านบาท</StyledTableCell>
                                            
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {contactPromise.map((row) => (
                                            <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row" sx={{width:"50%"}}>
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{width:"25%"}}>{row.calories}</StyledTableCell>
                                            <StyledTableCell align="center" sx={{width:"25%"}}>{row.fat}</StyledTableCell>
                                           
                                            </StyledTableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    </TableContainer>
                        </Stack>
                    </Container>
                </Grid>

                    
                </Grid>
             </Box>
             <Box sx={{mb:10}}>
                 <Container>
                        <Divider>
                            <Chip label="สิทธิประโยชน์ทางภาษี" sx={{fontSize:24}} />
                        </Divider>        
                        <Stack spacing={1} sx={{mt:1}}>
                        <Typography variant='p'>ผู้เอาประกันภัยสามารถนำเบี้ยประกันภัยสุขภาพสูงสุดไม่เกิน 25,000 บาทต่อปี (ถ้ามี) รวมกับเบี้ยประกันภัยคุ้มครองชีวิตมาใช้สิทธิหักลดหย่อนภาษีเงินได้บุคคลธรรมดา แต่ทั้งนี้รวมกันสูงสุดไม่เกิน 100,000 บาทต่อปี
                        </Typography>  
                        </Stack>
                         
                 </Container>
             </Box>
             

            </>
           
            

        
  )
}

export default SecProduct