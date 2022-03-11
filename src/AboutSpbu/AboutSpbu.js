import * as React from 'react';
import "./AboutSpbu.scss";

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
import Firstimg from '../images/contacts.jpg'
import Secondimg from '../images/abousan.png'
import Header from '../Component/Header'
import Footer from '../Component/footer'
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function AboutSPbU() {

  
  
  const [imageUploader, setImageUploader] = useState(null)

  const [categorySelected, setCategorySelected] = useState();
  const [category, setpst] = useState([]);
  const [projectList, setprojectList] = useState([]);
  const [partnerdet,setpartnerdet]=useState({})
  const [Detailproject,setDetailproject]=useState({})
  const [activeStep, setActiveStep] = React.useState(0);
  const [projectid,setprojectid]=useState(null)
  const [partnerid,setpartnerid]=useState(null)
  const [skipped, setSkipped] = React.useState(new Set());
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setemail] = useState(null);
  const [degree, setdegree] = useState(null);
  const [workexp, setworkexp] = useState(null);
  const [supportdes, setsupportdes] = useState(null);
  const [expdes, setexpdes] = useState(null);
  const uploadRef = useRef(null)



  useEffect(() => {

  }, []);



  return (
      <> 
       <Header/> 
    <div className="row aboutSPbU">
      <div className='col-12' style={{height:'500px'}}>
<img src={Firstimg}></img>
      </div>

<div className='col-md-2'>
</div>
<div className='col-md-8 col-12 '>
  <div className='title'>
      <h3 >About San Petersburg </h3>
  </div>

    <h1>
    St Petersburg University is truly global. That means, every 6th student is international. Compared to last year, the international student number increased from 4640 by 14% even despite the global pandemic. Also, 3 new countries joined the international student body of SPbU this year.
  </h1>

<h2>
    international students from 117 countries following degree and non-degree students

</h2>
<h2>
According to Rossotrudnichestvo SPbU was named the most popular university in Russia among foreign applicants.

</h2>
<h2>
In 2021, the University is in even greater demand from applicants from abroad than before. A record number of foreign citizens have taken part in the competitive selection to enter St Petersburg University. Out of 21,000 applicants, 1,900 applicants from 74 countries have become students of St Petersburg University. 

</h2>
<h2>
The University makes it easy to connect with the whole world by Representative offices in China, Republic of Korea, Spain, Greece, Italy and Turkey shortly on the way.

</h2>

<h2>
Students coming from abroad are attracted by SPbU exceptional educational standards, an opportunity to study in Russian, English as well as other foreign languages, global research and career prospects. Spending student years in the cultural capital of Russia, which received the title of “Europe’s Leading City Destination” in World Travel Awards 2020, is also seen as a great advantage. 

</h2>

    <div style={{marginTop:'30px',marginBottom:'30px'}}>
   <img src={Secondimg} className='secondimg'></img>
    </div>
  






  
    </div>
<div className='col-md-2'>

</div>


</div>
<Footer/>
      </>
   
 
  );
}

export default AboutSPbU;
