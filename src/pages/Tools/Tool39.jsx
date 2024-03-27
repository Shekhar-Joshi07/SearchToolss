import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll39 = (props) => {
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
              <h3>Category 3.6 - ASSESSMENT, MONITORING AND EVALUATION</h3>
            </div>
            <h4>3.6.3 | BIODIVERSITY MONITORING AND SURVEILLANCE TOOLS</h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height">
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 39
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            BIODIVERSITY MONITORING FOR NATURAL RESOURCE MANAGEMENT – AN
            INTRODUCTORY MANUAL{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2016
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            GIZ SNRD Asia
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
            Practical manual and resource book
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Providing practical guidance for planning biodiversity monitoring
            including for selecting indicators and engaging partners. It
            addresses some of the principal questions, issues and pitfalls in
            biodiversity monitoring and offers carefully selected references for
            further reading.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The manual is divided into seven chapters:
            <br />
            <br />
            <ol>
              <li>
                Introduction (definition and purpose of biodiversity monitoring;
                in-ternational commitments)
              </li>
              <li>
                Selecting suitable indicators (indicator categories and quality)
              </li>
              <li>
                Engaging partners (stakeholder engagement; participatory
                biodi-versity monitoring; other partners)
              </li>
              <li>
                Planning monitoring activities (monitoring types; data
                acquisition, management and analysis; usage of results)
              </li>
              <li>References cited </li>
              <li>
                Further resources (adaptive management and opportunistic
                moni-toring; participatory monitoring; selection of monitoring
                indicators; study design and data analysis; survey methods for
                specific organism groups; software for data management and
                analysis)
              </li>
              <li>Appendix</li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Search for overview information and an introduction into how to plan
            and implement biodiversity monitoring in practice
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            No specific skills required, manual serves as a first introduction
            to the topic
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
            Helps practitioners to get a brief overview of the topic against the
            background of the overwhelming amount of information available.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            The manual is only a starting point and doesn’t provide in depth
            information.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Werner, Florian A. & Gallo-Orsi, Umberto. 2016.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://snrd-asia.org/download/biodiversity/Biodiversity-Monitoring-for-Natural-Resource-Management.pdf">
                Biodiversity Monitoring for Natural Resource Managemen –An
                Introductory Manual.
              </a>
            </span>
            GIZ, Eschborn and Bonn, Germany. DOI: 10.13140/RG.2.1.3141.8488/1.
            35 pp. Accessed on 6 March 2019 at{" "}
            <a href="https://snrd-asia.org/download/biodiversity/Biodiversity-Monitoring-for-Natural-Resource-Management.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">RELATED RESOURCES</div>
        </div>

        <div className="row border-color">
          <div className="col">
            A broad collection of further resources (including tools and
            methodology) is listed in the document under chapter 6.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://wildlifeinsights.org/">Wildlife Insights</a>
            </span>{" "}
            <a href="https://wildlifeinsights.org/">
              <Icon as={LinkIcon} /> - a platform for sharing and analysing
              camera trap
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll39;
