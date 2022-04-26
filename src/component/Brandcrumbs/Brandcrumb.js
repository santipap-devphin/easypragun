import React from 'react';
import Box from '@mui/material/Box';
import { Button, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Brandcrumb = ({pagename}) => {

    let newStr;
    let navigate = useNavigate();

   if(pagename.indexOf("/") > -1){

         newStr = pagename.split("/")

   } 
   const goTo = () => {

        navigate("/");
   }
  return (
            <Box className="container-fluid bg-secondary py-5">
                        <div className="container py-5">
                            <div className="row align-items-center py-4">
                                <div className="col-md-6 text-center text-md-left">
                                    <h1 className="mb-4 mb-md-0 text-primary text-uppercase">{newStr[1]}</h1>
                                </div>
                                <div className="col-md-6 text-center text-md-right">
                                    <div className="d-inline-flex align-items-center">
                                        
                                        <Button onClick={goTo} className="btn btn-outline-primary">Home</Button>
                                        <i className="fas fa-angle-double-right text-primary mx-2"></i>
                                        <a className="btn btn-outline-primary disabled" href="">{newStr[1].toUpperCase()}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
              </Box>
  )
}

export default Brandcrumb