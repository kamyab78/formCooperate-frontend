import * as React from 'react';
import "./CompanyApp.scss";
import Header from "./images/header.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/swiper.scss";
import { makeStyles } from "@material-ui/core/styles";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import "swiper/components/navigation/navigation.scss";
import { useEffect, useState ,useRef} from "react";
import Logo from "./images/iust.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import { get, responseValidator } from "./api";
import EmptyPic from "./images/empty.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Config } from './config'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Input } from 'antd';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Success from './images/success.png'
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    width: 300,
    "& .MuiInputBase-root": {
      color: theme.palette.primary.main,
      height: 60,
      "& input": {
        textAlign: "right"
      }
    }
  }
}));
function CompanyApp() {

  SwiperCore.use([EffectCoverflow, Navigation]);
  const classes = useStyles();
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

  const [phone, setphone] = useState(null);
  const [email, setemail] = useState(null);

  const [workexp, setworkexp] = useState(null);
  const [supportdes, setsupportdes] = useState(null);
  const [expdes, setexpdes] = useState(null);
  const uploadRef = useRef(null)
  const handleNext = () => {
    if(projectid===null){
      toast.error('یک پروژه را انتخاب کنید')
    return
    }
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  useEffect(() => {
 var loc = window.location.href
 var partnerid=loc.split("partnerid=")
 console.log(partnerid[1])
 getpartnerDetail(partnerid[1])
 setpartnerid(partnerid[1])
 getProject(partnerid[1])
  }, []);
function getProject(partnerid){

  var requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // "Authorization": "Basic " + window.localStorage.getItem('basic')

    }


};

fetch(Config()['api'] + "/user/projectlist?partnerId=" + partnerid, requestOptions)
    .then(response => {



        response.json().then(rep => {
            console.log(rep)
            setprojectList(rep)
        })





    })
    .catch(error => console.log('error', error));
}
function getpartnerDetail(partnerid){
  var requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // "Authorization": "Basic " + window.localStorage.getItem('basic')

    }


};

fetch(Config()['api'] + "/user/partnerdes?partnerId=" + partnerid, requestOptions)
    .then(response => {



        response.json().then(rep => {
            console.log(rep)
            setpartnerdet(rep)
        })





    })
    .catch(error => console.log('error', error));
}
useEffect(() => {
  var requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        // "Authorization": "Basic " + window.localStorage.getItem('basic')

    }


};

fetch(Config()['api'] + "/user/projectdetail?partnerId=" + partnerid+"&projectId="+projectid, requestOptions)
    .then(response => {



        response.json().then(rep => {
            console.log(rep)
            setDetailproject(rep)
        })





    })
    .catch(error => console.log('error', error));
   }, [projectid]);
function submit(){
  if(fname===null){
    toast.error('نام را پر کنید')
    return
  }

  if(phone===null){
    toast.error('تلفن را پر کنید')
    return
  }
  if(email===null){
    toast.error('ایمیل را پر کنید')
    return
  }
  if(workexp===null){
    toast.error('سابقه کاری را پر کنید')
    return
  }
  if(supportdes===null){
    toast.error('نحوه پشتیبانی را پر کنید')
    return
  }
  if(expdes===null){
    toast.error('سوابق کاری را پر کنید')
    return
  }
  const body= {
   
    "name":fname,
 
    "phone":phone,
    "email":email,

    "workexp":workexp,
    "supportdes":supportdes,
    "hourdes":expdes,
    "path":imageUploader
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

fetch(Config()['api'] + "/user/instituteuser?partnerId=" + partnerid+"&projectid="+projectid, requestOptions)
    .then(response => {



        response.json().then(rep => {
            console.log(rep)
            if(rep.code===200){
                   setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
       
        })





    })
    .catch(error => console.log('error', error));
}
function changeUploaderHandler(e) {
 
  const FILE = e.target.files[0];
  const form = new FormData();
  form.append('file', FILE);
  var requestOptions = {
      method: 'POST',
      headers: {

      },
      body: form


  };

  fetch(Config()['api'] + "/utility/image", requestOptions)
      .then(response => {


if(response.status===200){
          response.json().then(rep => {
toast.success('با موفقیت آپلود شد')
           console.log(rep)
              setImageUploader(rep.path)

          })
}
  





      })
      .catch(error => console.log('error', error));

}
// function just_persian(str){

//   var p = /^[\u0600-\u06FF\s]+$/;

//   if (!p.test(str)) {
//       alert("not format");
//       toast.error('لطفا فارسی وارد کنید')
//       setfname(null)
//       return
//   }
//   else{
//     console.log(213123)
//     setfname(str)
//   }
//   (e)=>setfname(e.target.value)
// }
  return (
    <div className="form-iust row">
        <div className='col-md-2 col-right'>
          <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
          <input checked type="radio" id="persian" name="fav_language" value="persian" />
<label for="persian" style={{marginLeft:'10px',color:'white',marginRight:'10px'}}>فارسی</label>
<input type="radio" id="en" name="fav_language" value="en" onClick={()=>window.location.replace('/encompany?partnerid=1')}/>
<label for="en" style={{marginLeft:'10px',color:'white',marginRight:'10px'}}>English</label>
          </div>
       
          <div className='box-logo'> 
            <img src={Logo}></img>
          </div>
          
          <h6>معاونت بین الملل</h6>
        
        </div>
  <div className='col-md-10 col-xs-12 col-left'>
<div className='row'>
  <div className='col-md-1'></div>
  <div className='col-md-10 col-xs-12 coldata'>
  <h6>{partnerdet.description}</h6>
    <div className='box-data'>
    <Box sx={{ width: '100%' ,marginTop:'20px',marginBottom:'20px'}}>
      <Stepper activeStep={activeStep}>

            <Step key='yek' >
              <StepLabel>انتخاب پروژه</StepLabel>
            </Step>
            <Step key='do'>
              <StepLabel >جزییات پروژه</StepLabel>
            </Step>
            <Step key='se' >
              <StepLabel >وارد کردن اطلاعات</StepLabel>
            </Step>
            <Step key='char' >
              <StepLabel >وضعیت</StepLabel>
            </Step>
      </Stepper>
      {activeStep === 3 ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
           <div className='finishBox'>
             <img src={Success}></img>
             <h1>با تشکر از ثبت شما</h1>
             <h6>اطلاعات شما با موفقیت ثبت شد</h6>
           </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          
          </Box>
        </React.Fragment>
      ) : activeStep ===2 ?(
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <div className='box-enter-data row'>
              <div className='each-box col-md-4 col-xs-12'>
<h6>نام شرکت</h6>
                    <input  value={fname}  onChange={(e)=>setfname(e.target.value)}/>
              </div>
   
              <div className='each-box col-md-4 col-xs-12'>
<h6>تلفن</h6>
                    <input value={phone}  onChange={(e)=>setphone(e.target.value)} />
              </div>
              <div className='each-box col-md-4 col-xs-12'>
<h6>ایمیل</h6>
                    <input value={email}  onChange={(e)=>setemail(e.target.value)} />
              </div>

              <div className='each-box col-md-4 col-xs-12'>
<h6>سابقه کار(سال)</h6>
                    <input  value={workexp}  onChange={(e)=>setworkexp(e.target.value)}/>
              </div>
              <div className='each-box col-md-12 col-xs-12'>
<h6>سوابق کاری</h6>
                    <textarea  value={expdes}  onChange={(e)=>setexpdes(e.target.value)}/>
              </div>
              <div className='each-box col-md-12 col-xs-12'>
<h6>نحوه پشتیبانی پروژه</h6>
                    <textarea  value={supportdes}  onChange={(e)=>setsupportdes(e.target.value)}/>
              </div>
              <div className='resumeup'>
              <input accept="*" onChange={changeUploaderHandler} ref={uploadRef} className='uploader' type='file' />
                                        <div onClick={() => uploadRef.current.click()} className='change-mode'>
                                            <p>جهت آپلود روزمه کلیک کنید </p>
                                        </div>
              </div>
            </div>
            
            
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              بازگشت
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
  

            <Button onClick={submit}>
            ثبت
            </Button>
          </Box>
        </React.Fragment>
      ):activeStep ===1?(
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <div className='boxdetail'>


              <div className='box'>
                <h6>
                  عنوان پروژه
                  </h6>
<div  className='inp'>
{Detailproject.title}
</div>
                
              </div>
     
              <div className='box'>
                <h6>
                 حوزه تخصصی
                  </h6>
<div  className='inp'>
{Detailproject.activitydomain}
</div>
                
              </div>
              <div className='box'>
                <h6>
               توضیحات
                  </h6>
<div  className='inp'>
{Detailproject.description}
</div>
                
              </div>
            </div>
            
            
            
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              بازگشت
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
  

            <Button onClick={handleNext}>
       ادامه
            </Button>
          </Box>
        </React.Fragment>
      ):(
        <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>
        <FormControl className='formbox'>
      <FormLabel id="demo-radio-buttons-group-label">لیست پروژه ها</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e)=>setprojectid(e.target.value)}
      >
        {projectList.map((index)=>(
                  <FormControlLabel value={index.id} control={<Radio />} label={index.title} />
        ))}
      </RadioGroup>
    </FormControl>
          </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
       <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            بازگشت
          </Button>


          <Box sx={{ flex: '1 1 auto' }} />
    <Button onClick={handleNext}>
          ادامه
          </Button>
   
      
        </Box>
      </React.Fragment>
      )}
    </Box>
    </div>
  </div>
  <div className='col-md-1'></div>
</div>

</div>
    </div>
  );
}

export default CompanyApp;
