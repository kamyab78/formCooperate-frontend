import * as React from 'react';
import "./enCompany.scss";

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
import Header from './Component/Header'
import Footer from './Component/footer'
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
function EnCompanyApp() {

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
  const [name, setname] = useState(null);
  const [address, setaddress] = useState(null);
  const [contactnumber, setcontactnumber] = useState(null);
  const [email, setemail] = useState(null);
  const [website, setwebsite] = useState(null);
  const [domain, setdomain] = useState(null);
  const [expertise, setexpertise] = useState(null);
  const [consultinghours, setconsultinghours] = useState(null);
  const [researchinfrastructure, setresearchinfrastructure] = useState(null);
  const uploadRef = useRef(null)
  const handleNext = () => {
    if(activeStep === 0){
      if(name === null){
        toast.error('fill name')
        return
      }
      if(address === null){
        toast.error('fill address')
        return
      }
      if(contactnumber === null){
        toast.error('fill contactnumber')
        return
      }
      if(email === null){
        toast.error('fill email')
        return
      }
      if(website === null){
        toast.error('fill website')
        return
      }
      if(domain === null){
        toast.error('fill domain')
        return
      }
    }
    // if(projectid===null){
    //   toast.error('Choose a project')
    // return
    // }
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
  if(expertise===null){
    toast.error('fill expertise')
    return
  }

  if(consultinghours===null){
    toast.error('fill consultingHours')
    return
  }
  if(researchinfrastructure===null){
    toast.error('fill researchInfrastructure')
    return
  }
  if(projectid===null){
    toast.error('select project')
    return
  }
  const body= {
   
    "name":name,
 
    "address":address,
    "email":email,

    "contactNumber":contactnumber,
    "website":website,
    "domain":domain,
    "expertise":expertise,
    "consultingHours":consultinghours,
    "researchInfrastructure":researchinfrastructure
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

fetch(Config()['api'] + "/user/companyuser?partnerId=" + partnerid+"&projectid="+projectid, requestOptions)
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

  return (
    <>
    <Header/>
       <div className="form-iust row">
     
  <div className='col-md-12 col-xs-12 col-left'>
  <div style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
          <input  type="radio" id="persian" name="fav_language" value="persian" onClick={()=>window.location.replace('/company?partnerid=1')}/>
<label for="persian" style={{marginLeft:'10px',color:'black',marginRight:'10px'}}>فارسی</label>
<input checked type="radio" id="en" name="fav_language" value="en" />
<label for="en" style={{marginLeft:'10px',color:'black',marginRight:'10px'}}>English</label>
          </div>
<div className='row'>
  <div className='col-md-1'></div>
  <div className='col-md-10 col-xs-12 coldata'>
  <h6>{partnerdet.description}</h6>
    <div className='box-data'>
    <Box sx={{ width: '100%' ,marginTop:'20px',marginBottom:'20px'}}>
      <Stepper activeStep={activeStep} style={{direction:'ltr'}}>

            <Step key='yek' >
              <StepLabel>General information</StepLabel>
            </Step>
            <Step key='do'>
              <StepLabel >Requirements</StepLabel>
            </Step>
            <Step key='char' >
              <StepLabel >Status</StepLabel>
            </Step>
      </Stepper>
      { activeStep ===2 ?(
        <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>
         <div className='finishBox'>
           <img src={Success}></img>
           <h1>Thanks for your registration</h1>
           <h6>Your information was successfully registered</h6>
         </div>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
        
        </Box>
      </React.Fragment>
      ):activeStep ===1?(
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
          <Typography sx={{ mt: 2, mb: 1 }}>
     <div className='box-enter-data row'>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Needed Expertise</h6>
                    <input required value={expertise}  onChange={(e)=>setexpertise(e.target.value)}/>
              </div>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left',direction:'ltr'}}>
<h6>How many consultancy hours do you need per week?</h6>
                    <input value={consultinghours}  onChange={(e)=>setconsultinghours(e.target.value)} />
              </div>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left',direction:'ltr'}}>
<h6> Do you have existing research infrastructure or facilities?</h6>
                    <input value={researchinfrastructure}  onChange={(e)=>setresearchinfrastructure(e.target.value)} />
              </div>
              <div className='each-box col-md-12 col-xs-12' style={{textAlign:'left'}}>
              <FormControl className='formbox' style={{direction:'ltr'}}>
      <FormLabel id="demo-radio-buttons-group-label">List of projects</FormLabel>
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
              </div>
            </div>
            
            
            
            </Typography>
            
            
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button onClick={submit}>
            Submit
            </Button>
         
            <Box sx={{ flex: '1 1 auto' }} />
  
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
      
          </Box>
        </React.Fragment>
      ):(
        <React.Fragment>
     <Typography sx={{ mt: 2, mb: 1 }}>
     <div className='box-enter-data row'>
     <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Contact Number</h6>
                    <input value={contactnumber}  onChange={(e)=>setcontactnumber(e.target.value)} />
              </div>
      
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Address</h6>
                    <input value={address}  onChange={(e)=>setaddress(e.target.value)} />
              </div>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Name</h6>
                    <input required value={name}  onChange={(e)=>setname(e.target.value)}/>
              </div>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Email</h6>
                    <input value={email}  onChange={(e)=>setemail(e.target.value)} />
              </div>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Website</h6>
                    <input value={website}  onChange={(e)=>setwebsite(e.target.value)} />
              </div>
              <div className='each-box col-md-4 col-xs-12' style={{textAlign:'left'}}>
<h6>Domain of activity</h6>
                    <input  value={domain}  onChange={(e)=>setdomain(e.target.value)}/>
              </div>
        
            </div>
            
            
            
            </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button onClick={handleNext}>
          Continues
          </Button>
      


          <Box sx={{ flex: '1 1 auto' }} />
  
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
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
   {/* <div className='col-md-2 col-right'>

          <div className='box-logo'> 
            <img src={Logo}></img>
          </div>
          
          <h6>معاونت بین الملل</h6>
        
        </div> */}
    </div>
    <Footer/>
    </>
 
  );
}

export default EnCompanyApp;
