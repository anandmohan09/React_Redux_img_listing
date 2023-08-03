// import React from 'react';
import {useState} from 'react';
import {BsFillPersonFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './modal';
import {useSelector} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Examples from './viewModal';
import '../components/imageListing.css';




const ImageListing =()=>{
    
    const list = useSelector((state) => state.imageListingReducers.list);
    console.log(list,'list');

   




    return(
        <>
        <div className='container'>
            <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'10px'}}>
            <h2><BsFillPersonFill
              style={{
                fontSize: "45px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            />Add New Employee Image:</h2>
            <Example/>
            </div>
            <Row>
     {
       list.map((ele,id)=>ele.data.map((x)=>
       
       

          {
         return (
           <Col md={3} style={{marginTop:"20px"}}>
           <Card style={{ width: "19rem",height:'300px' }}  className='image'  >
         <img src={x.imagePreview.name} alt={ele.name} style={{width:'100%',height:'100%',position:"relative"}} />
         <div className="button" style={{position:'absolute',bottom:'0px',left:'119px'}}>
           <Examples x={x}/>
           
          
         </div>
       </Card>
       </Col>

         )
       } ))
       
     }
     </Row>
            
        </div>
        </>
    )
}
export default ImageListing