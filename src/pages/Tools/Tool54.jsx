import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";

import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";
const Tooll54 = (props) => {
  return (
    <>
      <header className="container">
        <div className="row my-2">
          <div className="col mt-2 col-lg-2 d-flex justify-content-start">
            <div className="" style={{ height: "80px", width: "150px" }}>
              <Link to="/home">
                {!props.logoDisplay ? <></> : <img src={logo} alt="logo" />}
              </Link>
            </div>
          </div>
          <div className="col col-lg-10 " style={{ marginLeft: "-50px" }}>
            <div
              className="d-flex justify-content-start"
              style={{ marginTop: "25px" }}
            >
              <h3>Category 3.7 - GOVERNANCE</h3>
            </div>
            <h4>
              3.7.4 | RIGHTHOLDER AND STAKEHOLDER ANALYSIS AND PARTICIPATION
            </h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height" style={{ height: "110px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 54
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GUIDANCE ON INTEGRATING HUMAN DIMENSIONS INTO MPA PLANNING AND
            MANAGEMENT
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2014
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Department of Environmental and Geographical Science University of
            Capetown, South Africa{" "}
          </div>
        </div>
        <div className="row fw-bold ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
            TYPE
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
            Purpose
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            Guideline including case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Providing an understanding of the human dimensions of MPAs as well
            as guidance on how human dimensions can be understood and integrated
            into MPA planning and management processes.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Section A: deals with understanding human dimensions and the steps
            and processes required for identifying, understanding and
            integrating human dimensions into various stages of the MPA planning
            and management cycle.
            <br />
            <br />
            Section B: provides supporting information and further reading
            <br />
            <br />
            The core guidelines consist of eight steps
            <ol>
              <li>Understand the context: initiate the planning process</li>
              <li>Engage stakeholders</li>
              <li>Identify the key values and attributes of the area</li>
              <li>Develop the vision, goals and draft objectives</li>
              <li>
                Gather further information and conduct in-depth assessments
              </li>
              <li>Identify and evaluate different management scenarios</li>
              <li>Develop or review the management plan</li>
              <li>Monitoring, evaluation and adaptation</li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Integration of human dimensions into MPA planning and management
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Assessment and evaluation of existing MPAs</li>
              <li>
                Development of system level guidance on human dimensions of MPAs
              </li>
              <li>CEPA</li>
              <li>Learning</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Typically individual MPAs</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Typical use requires the capacity (in terms of logistics,
            facilitation, equipment and financial resources) to conduct
            participatory consultation/planning workshops and integrate the
            results in PA management systems.
            <br />
            <br />
            Because of the interdependency of integrating human dimensions with
            the overall management system, sound knowledge, understanding and
            skills in PA management planning are usually also required.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col col-md-6 col-sm-6 col-lg-6 border ">
            STRENGTHS
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border ">
            WEAKNESSES
          </div>
        </div>
        <div className="row border-color">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Clear approach and eight-step methodology</li>
              <li>
                Good documentation and explanation, which helps to set out the
                rationale and justification of the approach
              </li>
              <li>High quality production and illustrations of guidelines</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Limited initial geographical focus (mainly South Africa)</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Sowman, M., S. Raemaekers, J. Sunde (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://awsassets.wwf.org.za/downloads/hd_of_mpa_guidelines_full.pdf">
                Guidelines for integrating human dimensions into MPA planning
                and management.
              </a>
            </span>
            Cape Town, South Africa: WWF Neobank Green Trust and University of
            Capetown. 140 pp. Accessed on 5 October 2018 at
            <a href="http://awsassets.wwf.org.za/downloads/hd_of_mpa_guidelines_full.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Main focus is on South Africa. Nine case studies included in
            guideline document, including from Fiji.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll54;
