import * as React from 'react';
import "./footer.scss";
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
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Footer() {

  
  
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
    <div className="row footerpage">
<div className='col-md-1'>

</div>
<div className='col-md-3 borderclass' >
    <div className='box-footer'>
    <h1>Shaping the future</h1>
<h6>
Our ultimate goal is to make better future in academic and industrial collaborations between Iranian and Russian scientists and scientific organizations by indicating how they can intensify and deepen the scientific activities, in their preferably specific subject areas of interest.</h6>
</div>
</div>
<div className='col-md-3 borderclass'>
    <div className='box-footer'>
    <h1>Creating a platform for shared activities</h1>
<h6>
This cooperation is going to tackle the challenges in academic collaborations between Iranian and Russian scientists and entrepreneurs by preparing a platform for face to face meetings of representatives of universities, scientific organizations from both sides, in bilateral chosen areas.
    </h6>
</div>
</div>
<div className='col-md-3 borderclass'>
    <div className='box-footer'>
    <h1>Industrial cooperation opportunities</h1>
<h6>
The cooperation between Iran university of science and technology and Saint Petersburg university is going to foster partnerships in industrial collaborations of Iranian and Russian participants from scientific organizations, academia and industry by providing opportunity for information exchange, sharing of the best practices among participants.
    </h6>
</div>
</div>

<div className='col-md-1 '>

</div>





</div>
 
  );
}

export default Footer;
