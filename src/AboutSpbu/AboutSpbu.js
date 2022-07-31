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
      <h3 >About  Peter the Great St.Petersburg Polytechnic University </h3>
  </div>

    <h1>
    Welcome to St. Petersburg and Peter the Great St. Petersburg Polytechnic University! Our University’s position as a world-class University is confirmed by world rankings: 11th among the top 100 Russia’s universities , 43rd THE Best universities in Europe, 5 stars in international QS ranking for online learning. SPbPU has always been among the leaders of higher education in Russia. For the recent years we take the TOP-3 position among Russian technical universities by number of international students.  </h1>

<h2>
Our university is a winner of the Research Leadership track of the Federal academic leadership program “Priority 2030”.
</h2>
<h2>
Our university is situated in one of the most beautiful cities in the world! The second largest city in Russia, St. Petersburg is rightfully called the cultural capital of Russia. A metropolitan city of five million people, it every year attracts nearly seven million tourists, of which about one half are foreign guests coming from all over the world. St. Petersburg was founded by the first Emperor of Russia, Tsar Peter the Great, as a multicultural city, always welcoming guests and specialists from other countries. Polytechnic University retains and strengthens this tradition which has become one of the essential features of our University. More than 8500 foreign students study at our university and this number keeps growing every year.


</h2>
<h2>
Peter the Great St. Petersburg Polytechnic University, more habitually known in Russia and abroad as the St. Petersburg Polytechnic Institute, was founded in 1899 on the wave of economic and political successes of Russia. It was built as a university campus to the northwest from the then city borders. While now the university is an integral part of St. Petersburg, it still is located in the greenest district of the city with good transportation connections to the historical center of St. Petersburg and other districts of the city.
</h2>


<h2>
For more than a century, the history and glory of Polytechnic University was created by the people who had taught and studied here, including Nobel Prize winners P.L. Kapitsa, N.N. Semyonov, Z.I. Alferov, famous physicists A.F. Ioffe, I.V. Kurchatov, A.A. Radzig, Y.B. Khariton, Constuctor General O.A. Antonov, and many other talented and famous scientists.
</h2>

<h2>
Polytechnic University has a very prominent place in the global academic community. The University is partner with many academic institutions and industrial companies. More than 320 partner universities from 70 countries, over 100 world's leading companies have direct contracts with Polytechnic University. Annually, the University hosts numerous high-level international symposiums and conferences, publishes tens of scientific magazines and scholarly books.


</h2>

    <div style={{marginTop:'30px',marginBottom:'30px'}}>
   {/* <img src={Secondimg} className='secondimg'></img> */}
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
