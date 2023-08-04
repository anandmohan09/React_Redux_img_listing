// import React from 'react';
// import {useState} from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Example from "./modal";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Examples from "./viewModal";
import "../components/imageListing.css";
import Example1 from "./delete";
import {BsPersonCircle} from 'react-icons/bs';
//----------
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const ImageListing = () => {
  const list = useSelector((state) => state.imageListingReducers.list);
  console.log(list, "list");
  return (
    <>
      <Navbar expand="lg" className="" style={{ background: "#0433BF" }}>
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ color: "aliceblue", fontSize: "35px", margin: "0px 66px" }}
          >
            <i>
                <BsPersonCircle style={{fontSize:'51px'}}/>
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/659px-Apple_Computer_Logo_rainbow.svg.png"
                style={{ width: "50px", height: "50px" }}
                alt=""
              ></img> */}
              {" "}
              Images.com
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              {/* <Modals/> */}
              <Example />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        {/* <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'10px'}}>
            <h2><BsFillPersonFill
              style={{
                fontSize: "45px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            />Add New Employee Image:</h2>
            <Example/>
            </div> */}
        <Row>
          {/* {
       list.map((ele)=>ele.data.map((x,id)=>
      
       

          {
            // console.log('mapid',id);
         return (
           <Col md={3} style={{marginTop:"20px"}} key={x.id} >
           <Card style={{ width: "19rem",height:'300px' }}  className='image'  >
         <img src={x.imagePreview.name} alt={ele.name} style={{width:'100%',height:'100%',position:"relative"}} />
         <div className="button" style={{position:'absolute',bottom:'0px',left:'80px',display:'flex'}}>
           <Examples x={x}/>
           <Example1 x={x} id={id} ele={ele}/>
          
         </div>
       </Card>
       </Col>

         )
       } ))
       
     } */}
          {list.map((ele, id) => {
            return (
              <Col md={3} style={{ marginTop: "20px" }} key={ele.id}>
                <Card
                  style={{ width: "19rem", height: "300px" }}
                  className="image"
                >
                  <img
                    src={ele.imagePreview.name}
                    alt={ele.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  />
                  <div
                    className="button"
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      left: "80px",
                      display: "flex",
                    }}
                  >
                    <Examples ele={ele} />
                    <Example1 id={id} ele={ele} />
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default ImageListing;
