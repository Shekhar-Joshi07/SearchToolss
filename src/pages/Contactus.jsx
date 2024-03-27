import { Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/pcalogo.png";
import { Link } from "react-router-dom";
const Contactus = () => {
  const logoStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    borderRadius: "100px",
    border: "3px solid #049ddb",
  };
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col ">
            <Heading>Get in Touch</Heading>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col ">
            <Text>How can we help you? We'd love to hear from you</Text>
          </div>
        </div>
        <div style={{ width: "500px", margin: "auto" }} className="mt-5">
          <div className="row text-center ">
            <div className="col col-lg-6 ">
              {/* <div className="card">
            <div className="card card-body"> */}
              <div className="row d-flex justify-content-center">
                <div className="col ">
                  <div
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#0BB3BF",
                      height: "30px",
                    }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i class="fas fa-envelope"></i> &nbsp;&nbsp;forest@mail.com
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center mt-5">
                <div className="col ">
                  <div
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#2CC27E",
                      height: "30px",
                    }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i class="fas fa-mobile"></i> &nbsp;&nbsp;+91 2823745552
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-5">
                <div className="col ">
                  <div
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#2C6AC2",
                      height: "30px",
                    }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i class="fas fa-globe"></i> &nbsp;&nbsp;www.forest.com
                  </div>
                </div>
              </div>

              {/* </div>
          </div> */}
            </div>
            <div className="col col-lg-6 d-flex align-items-center">
              <div
                className="sidebar-header mx-auto d-flex justify-content-center"
                // style={{ height: "150px", width: "150px" }}
              >
                <Link to="/home">
                  <img
                    src={logo}
                    className="bg-transparent"
                    alt="logo"
                    // style={logoStyle}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row d-flex justify-content-center align-items-center mt-5"  >
                <div className="col col-lg-4 " >
                <div className="sidebar-header d-flex d-flex justify-content-end">
                      <img src={logo} alt="logo" height={50} width={100}/>
                    </div>
                   
                </div>       
                <div className='col col-lg-8 mt-2' style={{color:"#2d735c"}}>
                <h6>Protected and Conserved Areas br Management and Governance</h6>
                  </div>                       
              </div> */}
      </div>
    </>
  );
};

export default Contactus;
