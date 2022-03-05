import * as React from 'react';
import "./Landing.scss";

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
import Firstimg from '../images/firstimg.png'
import Secondimg from '../images/i2.jpg'
import Thirdimg from '../images/i3.jpg'
import Fourthimg from '../images/i4.jpg'
import Header from '../Component/Header'
import Footer from '../Component/footer'
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function App() {

  
  
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
    <div className="row landingPage">



<Carousel autoplay >
  
        <img className='imgslider' src={Firstimg}></img>
    
 
   
    <img className='imgslider' src={Secondimg}></img>
   
   
    <img className='imgslider' src={Thirdimg}></img>
   
   
    <img className='imgslider' src={Fourthimg}></img>

  </Carousel>
  <div className='box-txt'>
<h1>
Iran University of Science and Technology (IUST)as one of the top 5 universities in Iran is going to organize the first Iran-Russian academic and industrial event through the collaboration with the highly-respected Saint-Petersburg university. This cooperation is a bilateral scientific and industrial event on the national level according to the signed agreement. As a commemorative event, this cooperation celebrates years of strong Science & Technology cooperation between Iran and Russia. This cooperation will provide an opportunity for the entrepreneurs, academics as well as representatives from Iranian and Russian governmental and private higher educational and industrial bodies, universities, research institutions, and Science and Technology Parks to exchange ideas on policies and best practices as well as participating in joint industrial and research projects. 

</h1>
  </div>
</div>
<Footer/>
      </>
   
 
  );
}

export default App;
