import * as React from 'react';
import "./Event.scss";

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
import Header from '../Component/Header'
import Footer from '../Component/footer'
import FirstImgEvent from '../images/firstimageevent.jpeg'
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function Event() {

  
  
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
    <div className="row participant">
    <div className='col-12' style={{height:'500px'}}>
<img src={Firstimg}></img>
      </div>
<div className='col-md-2'>
</div>
<div className='col-md-8 col-12' >
  <div className='row'>
    <div className='col-xs-12 col-md-6'>
      <div className='box-item'>
  <img src={FirstImgEvent}></img>
  <div className='text'>
<h1>
نشست برنامه ریزی گروه 5 دانشگاه صنعتی کشور (یو تی فایو) برای همکاری با دانشگاه سنت پترزبورگ
</h1>
<h2>
در این نشست که نمایندگان دانشگاه های علم وصنعت ایران صنهتی شریف صنهتعتی امیر کبیر صنعتی اصفهان و صنعتی خواجه نصیرالدین طوسی و رییس محترم کارگروه همکاریهای فناوری دانشگاهی با فدراسیون روسیه مرکز تعاملات بین المللی علم و فناوری معاونت علمی و فناوری ریاست جمهوری  برگزار شد در خصوص نحوه همکاری دانشگا های کشور با دانشگاه های صنعتی سن پترزبورگ بحث شد.
</h2>
  </div>

  </div>
    </div>
    <div className='col-xs-12 col-md-6'>
      
  <div className='box-item'>
    <img src={FirstImgEvent}></img>
    <div className='text'>
<h1>
برنامه ریزی بین دو دانشگاه
IUST-SPbPU
</h1>
<h2>
این رخداد در حال برگزاری می باشد
</h2>
</div>
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

export default Event;
