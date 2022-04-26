import React , {useState , useContext} from 'react'
import {AppBar , Box , Grid , Container , Typography ,IconButton , Toolbar , Button , Stack} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Avatar from '@mui/material/Avatar';
import StarBorder from '@mui/icons-material/StarBorder';
const MenuDeskTop = ({textGold}) => {

    const {locate}  = useContext(DataContext);

    
  
    const pages = 
                [
                  {
                    en:"",
                    th:"หน้าแรก",
                    path:"/"
                    
                  },
                  {
                    en:"about",
                    th:"เกี่ยวกับ",
                    path:"/about"
                  },
                  {
                    en:"service",
                    th:"บริการ",
                    path:"/service"
                  },
                  {
                    en:"contact",
                    th:"ติดต่อเรา",
                    path:"/contact"
                  },
                ];

   

    const [anchorElNav, setAnchorElNav] = useState(null);

    const [dense, setDense] = useState(false);

    const [open, setOpen] = useState(true);
    
    const handleOpenNavMenu = (event) => {
        console.log(event.currentTarget)
        setAnchorElNav(event.currentTarget);
        setOpen(!open);
      };
     const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const handleClick = () => {
        setOpen(!open);
      };

      function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }

      
      
    
      //sx={{justifyContent:"left",textAlign:"left",alignItems:"left"}} align="left"
  return (
                  <AppBar position="static" className='bg-secondary' sx={{p: 0.5}}>
                      <Container maxWidth="xl">

                      <Toolbar>
                      <Grid container spacing={1}>
                            <Grid item xs={4}>

                            <Typography 
                                variant="h4" 
                                component="div" 
                                sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex' } , justifyContent:"left" , alignItems:"center" , mt:1.5}}
                                style={textGold}
                                >
                                    LOGO
                                   
                            </Typography>
                            <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } , justifyContent:"left" , alignItems:"center" , mt:1 }}
                                >
                                    LOGO
                            </Typography>
                                
                            </Grid>
                            <Grid item xs={8} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } , justifyContent:"right" , alignItems:"center" }}>

                                         <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                        >
                                        <MenuIcon />
                                        </IconButton>

                                        

                                       
                                     </Grid>       
                                    
                                    <Grid item xs={8} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,  justifyContent:"right" , alignItems:"center" }}>
                                        {pages.map((page , index) => (
                                        <Button
                                            className='font-kanit-light'
                                            key={index}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 1.5, display: 'block' , fontSize:16 }}
                                        >
                                            <Link key={index} to={`/${page.en}`} style={{ color: locate === page.path ? '#DFB163' : 'white'}}>{page.th}</Link>
                                        </Button>
                                        ))}
                                    </Grid>
                                  {
                                      open !== true ? 
                                      <Grid item xs={12} sx={{display: { xs: 'flex', md: 'none' },justifyContent:"center" , alignItems:"center" , textAlign:"center"}}>
                                            <Stack spacing={2}>
                                            <Button
                                            sx={{color: 'white'}}
                                            >
                                                 หน้าแรก
                                            </Button>
                                            <Button
                                            sx={{color: 'white'}}
                                            >
                                                 เกี่ยวกับ
                                            </Button>
                                            <Button
                                            sx={{color: 'white'}}
                                            >
                                                 บริการ
                                            </Button>
                                            </Stack>
                                           
                                           
                                     </Grid>
                                     :null
                                  }
                                    
                                
                            </Grid>
                      </Toolbar>
                        

                      </Container>
                    </AppBar>
               
      
        
        
  )
}

export default MenuDeskTop