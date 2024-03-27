import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll53 = (props) => {
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
            TOOL 53
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            STAKEHOLDER PARTICIPATION TOOLKIT FOR IDENTIFICATION, DESIGNATION
            AND MANAGEMENT OF MARINE PROTECTED AREAS
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2013
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UN Environment / Mediterranean Action Plan Regional Activity Centre
            for Specially Protected Areas IUCN-Mediterranean IUCN Environmental
            Law Center{" "}
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
            Resource Book
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Provide strategic orientations for stakeholders’ participation in
            MPA management and planning with view to improving good governance
            of MPAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Context and introduction describe the origins of the toolkit and the
            process of development.
            <br />
            <br />
            Part I: Stakeholders’ participation – some basic definitions as an
            introduction and useful classification,relevant for applying tools
            Part II: Typology of protected areas governance provides an overview
            of the IUCN typology. Part III: What are the main
            phases/actions/processes existing in MPA planning, identification,
            creation, and management? And where are the various categories of
            stakeholders usually involved for better planning, identification,
            creation, and management? Provides lists detailing different phases
            and recommended involvement of which stakeholders on which aspects
            of the process. Part IV: Participatory tools commonly used in the
            context of MPAs planning, identification, creation, management
            provides a short description of the most important tools.
            <br />
            <br />
            In the annexes details on certain processes are described in more
            detail and the toolkit ends with tips and links to make stakeholder
            engagement a success (including e.g. tips how to conduct meetings,
            or resources on conflict resolution)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Project planning and understanding options for stakeholder
            engagement. Introduction into the topic and overview of most
            important tools.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">A single MPA or MPA network</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">Depends on approach or tool chosen.</div>
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
              <li>
                Short and concise overview with well-structured lists and
                graphics.
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Level of detail is not sufficient to use the tools. </li>
              <li>No concrete examples of their application are provided.</li>
              <li>Limited geographical focus on Mediterranean</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://awsassets.wwf.org.za/downloads/hd_of_mpa_guidelines_full.pdf">
                Stakeholder Participation Toolkit for Identification,
                Designation and Management of Marine Protected Areas.
              </a>
            </span>
            RAC/SPA and IUCN-Med. Ed. RAC/SPA, Tunis. 30pp
            <a href="http://www.rac-spa.org/sites/default/files/mpa_stakeholder_toolkit.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll53;
