import React from "react"
import './App.css';
import StepperApp from "./stepper";
import HorizontalLinearStepper from "./horizontalStepper";
import DataTable from "./Datatable";
import AnimateImage from "./AnimateImage";
import SignIn from "./Signin";
import YoutubeClone from "./youtube/main"

function App() {
  return (
    <React.Fragment>
        <h2 style={{fontFamily: "'Gentium Basic', serif",backgroundColor:'#eef0f5',marginLeft:'1rem'}}>Steppers</h2>
        <div className="row">
            <div className="column1" >
                <StepperApp/>
            </div>
            <div className="column2">
                <HorizontalLinearStepper/>
            </div>
        </div>
        <h2 style={{fontFamily: "'Gentium Basic', serif",backgroundColor:'#eef0f5',marginLeft:'1rem'}}>Data Grid</h2>
        <div className="row" style={{backgroundColor: '#ffffff',marginLeft:'1rem',marginRight:'1rem'}}>
            <DataTable/>
        </div>
        <h2 style={{fontFamily: "'Gentium Basic', serif",backgroundColor:'#eef0f5',marginLeft:'1rem'}}>Login</h2>
        <div className="row" style={{marginLeft:'1rem'}}>
            <div className="column1"  style={{height:'80vh',boxShadow:'none'}}>
                <AnimateImage/>
            </div>

            <div className="column2" style={{height:'80vh',marginLeft:'0rem',boxShadow:'none'}}>
                <SignIn/>
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'column',backgroundColor: '#d9e4f5',backgroundImage: 'linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)'}}>
            <div style={{display:'flex'}}>
                <img src="youtube.svg" style={{height:'6vh',width:'6vw',marginTop:'3vh'}}/><h2 style={{fontFamily: "'Gentium Basic', serif",marginLeft:'-1rem',fontWeight:'bolder'}}>Youtube</h2>
            </div>
            <YoutubeClone/>
        </div>
        <div style={{height:'2vh'}}>

        </div>
    </React.Fragment>
  );
}

export default App;
