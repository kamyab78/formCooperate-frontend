import * as React from 'react';
import "./Header.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";
import { useEffect, useState,useRef } from "react";
import Logo from "../images/iust.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import 'antd/dist/antd.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Header() {




  useEffect(() => {

  }, []);



  return (
    <div className="row headerPage">
<div classsName='col-12'>
    <div className='row'>
  
    <div className='col-md-8 box-title'>
        <h1>
            Iran and Germany Science Day
        </h1>
    
    </div>
    <div className='col-md-4 col-emp'>
        
    </div>
    </div>
    <div className='row'>
  
  <div className='col-md-8 box-num'>
      <div className='box-data'>
 <LocalPhoneIcon className='iconClass'/> 
          <div className='col-title'>
<h1>Call Support</h1>
<h2>+982177240569</h2>
          </div>
      </div>
      <div className='box-data'>
 <MailOutlineIcon className='iconClass'/> 
          <div className='col-title'>
          <h1>Email Support</h1>
<h2>irde@iust.ac.ir</h2>
          </div>
      </div>
      <h1>
        
      </h1>
  
  </div>
  <div class="col-md-4 header-logo-container">
                    <a href="#" class="custom-logo-link" rel="home" aria-current="page">
                        <img width="315" height="136" src="https://ir-de.iust.ac.ir/storage/2018/01/cropped-cropped-Untitled-2.png" class="custom-logo" alt="Iran-Germany Science Day" srcset="https://ir-de.iust.ac.ir/storage/2018/01/cropped-cropped-Untitled-2.png 315w, https://ir-de.iust.ac.ir/storage/2018/01/cropped-cropped-Untitled-2-300x130.png 300w, https://ir-de.iust.ac.ir/storage/2018/01/cropped-cropped-Untitled-2-285x123.png 285w" sizes="(max-width: 315px) 100vw, 315px"/>
                        </a>       
                                 </div>
  </div>
    </div>


    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#08366C'}}>
  <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{width:'100%'}}>
  

 <Nav.Link style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}} href="#features"> CONTACT US</Nav.Link>
      <Nav.Link style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}} href="#features">NEWS</Nav.Link>
      <NavDropdown    title={
        <span style={{color:'white'}}>REGISTRATION</span>
    } color='white' style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}}id="collasible-nav-dropdown">
        <NavDropdown.Item href="/company?partnerid=1">Company User</NavDropdown.Item>
        <NavDropdown.Item href="/user?partnerid=1">Faculty Member</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      
      <Nav.Link style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}} href="#features">PARTICIPANT</Nav.Link>
      <Nav.Link style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}} href="#features">PROGRAM</Nav.Link>
      <Nav.Link style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}} href="/vision">VISION</Nav.Link>
      <Nav.Link style={{color:'white',borderStyle:'solid',borderWidth:'1px',width:'100%',borderTopColor:'transparent',borderBottomColor:'transparent',borderLeftColor:'transparent',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10px',marginBottom:'5px'}} href="/landing">Home</Nav.Link>
    </Nav>


  </Navbar.Collapse>
  </Container>
</Navbar>




</div>
 
  );
}

export default Header;
