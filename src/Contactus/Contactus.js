import * as React from 'react';
import "./Contactus.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/swiper.scss";
import { makeStyles } from "@material-ui/core/styles";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import "swiper/components/navigation/navigation.scss";
import { useEffect, useState,useRef } from "react";
import Logo from "../images/iust.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import { get, responseValidator } from "../api";
import EmptyPic from "../images/empty.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Config } from '../config'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Input , Divider,Carousel} from 'antd';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import 'antd/dist/antd.css';
import Firstimg from '../images/i1.jpg'
import Secondimg from '../images/i2.jpg'
import Thirdimg from '../images/i3.jpg'
import Fourthimg from '../images/i4.jpg'
import Mapimg from '../images/map.png'
import Header from '../Component/Header'
import Footer from '../Component/footer'
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Contactus() {
  const [subject, setsubject] = useState(null)
  const [txt, settxt] = useState();
  useEffect(() => {

  }, []);

function sendmail(){
  const body= {
   
    "subject":subject,
 
    "text":txt
   
}
  var requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // "Authorization": "Basic " + window.localStorage.getItem('basic')

    },
    body:JSON.stringify(body)


};

fetch(Config()['api'] + "/user/sendmail", requestOptions)
    .then(response => {


if(response.status===200){
  toast.success('Successfully send')
}
        // response.json().then(rep => {
        //     console.log(rep)
        //     if(rep.code===200){
        //            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        //     }
       
        // })





    })
    .catch(error => console.log('error', error));

}

  return (
      <> 
       <Header/> 
    <div className="row contactUs">
      <div className='col-12' style={{height:'600px'}}>
<img src={Firstimg}></img>
      </div>

<div className='col-md-2'>
</div>
<div className='col-md-8 col-12 ' style={{height:'600px'}}>
  <div className='title'>
      <h3 >About Us</h3>
  </div>
  <div style={{display:'flex',flexDirection:'row-reverse'}}>
<div className='boxleft'>
      <h1>
    Iran University of Science & Technology
      </h1>
      <h6>
      Vice Chancellery for International Affairs
      </h6>
      <h6>
      Narmak, Tehran, 1684613114
      </h6>
      <h6>
      Iran
      </h6>
      <h6>
      Tel: +98 21 77240569
      </h6>
      <h6>
      Fax: +98 21 77240577
      </h6>
      <h6>
      Email: iscp@iust.ac.ir
      </h6>
  </div>
<div className='boxright'>
<img src={Mapimg}></img>
</div>
  </div>








  
    </div>
<div className='col-md-2'>

</div>



<div className='col-md-2'>
</div>
<div className='col-md-8 col-12 '>
  <div className='title'>
      <h3 >Contact Us</h3>
  </div>
  <div >
  
<div className='boxinp'>
<div className='inpbox'>
    <h6>Subject</h6>
    <input value={subject} onChange={(e)=>setsubject(e.target.value)}/>
    </div>
    <div className='inpbox'>
    <h6>Text</h6>
    <textarea value={txt} onChange={(e)=>settxt(e.target.value)}/>
    </div>
    <div className='btnbox'>
   <button onClick={sendmail}>Submit</button>
    </div>
  </div>

  </div>








  
    </div>
<div className='col-md-2'>

</div>
</div>
<Footer/>
      </>
   
 
  );
}

export default Contactus;
