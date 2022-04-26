import { createContext , useState , useEffect , useRef } from "react";
import { createTheme } from '@mui/material/styles';
import { fontSize } from "@mui/system";
const DataContext = createContext({});

export const DataProvider = ({children}) => { 

    const [menuBar, setMenuBar] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
     });

    
     const [locate , setLocate] = useState('/');
      
     const [pos , setPos] = useState(false);

     const [headerTop, setHeaderTop] = useState(0);

     const [scroll, setScroll] = useState(0);

     const myRef = useRef(null);

     const handleTop = () => {
      
      window.scrollTo({top:myRef.current.scroll , behavior: 'smooth'}) 
      setPos(false);

    };

    useEffect(() => {
      const header = document.querySelector(".sticky-bar");
      setHeaderTop(header.offsetTop);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleScroll = () => {
  
      //console.log(window.scrollY)
      if (window.scrollY > 700) {
              setPos(true);
      } else {
              setPos(false);
      }
  
      setScroll(window.scrollY);
      };

     const theme = createTheme({
        root: {
          margin: "0px",
          padding: "0px"
        }
      ,  palette: {
          primary: {
            main: "#dfb163",
            
          }
          
        },
        typography: {
          fontFamily: "Kanit"
          }
         
      });

      const styles = {
          HomeContainer: {
            backgroundImage: `url(${'../../img/bannerhome2.jpg'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        },VideoBg:{
           backgroundImage: `url(${'../../img/bgvideoinsureheath.png'})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           width: '100vw',
           /*height: '100vh'*/
        },
        textGold:{
            color:"#DFB163",
            fontSize:32
        }
        
      };
     

   return (
            <DataContext.Provider value={{menuBar ,theme ,styles ,myRef, pos ,setPos , handleTop , headerTop, setHeaderTop , scroll, setScroll , locate , setLocate
            }}>
                {children}
            </DataContext.Provider>
       )

}



export default DataContext;