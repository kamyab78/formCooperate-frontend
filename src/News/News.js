import * as React from 'react';
import "./News.scss";

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

import Header from '../Component/Header'
import Footer from '../Component/footer'
import FirstImg from '../images/firstimageevent.jpeg'
import SecondImg from '../images/secondimageevent.jpg'
import Fourthimg from '../images/fourthimg.jpg'
import Thirdimg from '../images/thirdimg.jpeg'
const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
function News() {

  
  
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
    <div className="row News">
    <div className='col-12' style={{height:'500px'}}>
<img src={Firstimg}></img>
      </div>
<div className='col-md-2'>
</div>
<div className='col-md-8 col-12'>
<div className='row'>


    <div className='col-xs-12 col-md-6'>
      <div className='box-item'>
  <img src={FirstImg}></img>
  <div className='text'>
<h1>
برگزاری نشست مشترک دانشگاه علم و صنعت ایران و  مرکز تعاملات بین المللی علم و فناوری معاونت علمی و فناوری ریاست جمهوری
</h1>
<h2>
این نشست در تاریخ 10 مرداد 1401 در محل مرکز تعاملات بین المللی علم و فناوری معاونت علمی و فناوری ریاست جمهوری با حضور  نمایندگان دو طرف برای برنامه ریزی برای همکاری های دانشگاهی با دانشگاه پلی تکنیک سن پتر بورگ برگزار شد ....
</h2>
  </div>

  </div>
    </div>


    <div className='col-xs-12 col-md-6'>
      
  <div className='box-item'>
    <img src={SecondImg}></img>
    <div className='text'>
<h1>
جلسه کمیته برنامه ریزی ارتباطات فناورانه دانشگاهبی دانشگاه های صنعتی و دانشگاه پلی تکنیک سن پترزبورگ
</h1>
<h2>
جلسه مشترک مدیران جلسه مشترک مرکز تعاملات بین المللی علم و فناوری معاونت علمی و فناوری ریاست جمهوری  و  دانشگاه علم  صنعت ایران در اریخ 7 مهر ماه 1401 در سالن کنفرانس معاونت یبن الملل دانشگاه برگزار شد
</h2>
</div>
  </div>
  </div>

  <div className='col-xs-12 col-md-6'>
      
      <div className='box-item'>
        <img src={Thirdimg}></img>
        <div className='text'>
    <h1>
    فراخوان همکاری اعضای هیات علمی علاقه مند به پشتیبانی بین المللی و علمی شرکت های دانش بنیان
    </h1>
    <h2>
   </h2>
    </div>
      </div>
      </div>


      <div className='col-xs-12 col-md-6'>
      
      <div className='box-item'>
        <img src={Fourthimg}></img>
        <div className='text'>
    <h1>
    راه‌اندازی مرکز مشترک فناوری ایران و روسیه؛ تولید محصولات مشترک توسعه می‌یابد
    </h1>
    <h2>
    در قالب این مرکز تاکنون  17 پروژه از طرف شرکت‌های دانش‌بنیان ایرانی و 5 پروژه از سوی شرکت‌های فناور روسی شناسایی و تناظریابی شد که در حال حاضر 7 پروژه از مجموع این پروژه‌ها در مرحله عقد قرارداد برای خرید، انتقال و صادرات فناوری و همچنین تولید مشترک در ایران است.

فعالیت‌های این مرکز محدود به دانشگاه پلی تکنیک سن‌پترزبورگ نیست و این دانشگاه نقش راهبری و معرفی ظرفیت‌های حوزه‌های مختلف فناوری و صنعتی روسیه را عهده‌دار اشت.    </h2>
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

export default News;
