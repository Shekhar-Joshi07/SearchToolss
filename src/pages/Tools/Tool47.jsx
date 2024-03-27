import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll47 = (props) => {
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
            <h4>3.7.1 | GENERAL</h4>
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
            TOOL 47
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GOVERNANCE ASSESSMENT OF PROTECTED AREAS (GAPA){" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            International Institute for Environment and Development (IIED){" "}
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
            Methodology manual for process facilitators
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Multi-stakeholder-led methodology for assessing the effectiveness,
            equity and sustainability of governance within protected areas and
            other conserved areas (CAs)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Collection of methods and tools consisting of two main sections and
            an extensive list of annexes.
            <br />
            <br />
            Section A serves as an introduction to GAPA and contains background
            information on governance and key concepts that underpin the
            methodology
            <br />
            <br />
            Section B is a step-by-step guidance which outlines the different
            phases of GAPA: Preparation (I), Scoping (II), Information Gathering
            (III), Assessing (IV), Taking Action (V).
            <br />
            <br />
            Based on IUCN’s framework of governance principles and
            considerations GAPA presents 11 principles of good PA/ CA governance
            which encompass the core principles of participation, transparency,
            accountability as well as mitigation of negative impacts and benefit
            sharing.
            <br />
            <br />
            The GAPA methodology uses a combination of i) key informant
            interviews and focus group discussions to identify the governance
            strengths and chal-lenges and ideas for action and ii) stakeholder
            workshops to discuss and validate the results and review the ideas
            for action to improve the situation. There is an optional extra:
            iii) a site-level governance scorecard to provide a quantitative
            assessment of PA/CA-related governance issues and the diversity of
            views on these issues within and across communities.
            <br />
            <br />A variety of tools can be found in the annex, including
            assessment plans, workshop agendas, templates for stakeholder
            analysis, communications strategy, action planning and progress
            monitoring as well as resources for information gathering and
            reporting
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            GAPA can be used
            <ul>
              <li>
                as a health check to determine governance strengths and
                challenges and identify issues that need attention,
              </li>
              <li>
                as a diagnostic to understand the underlying causes of
                challenges and identify actions that could improve the situation
              </li>
              <li>
                and to establish a baseline for monitoring changes in governance
                over time.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Preparation for achieving Green List standards (and certification)
            in the governance dimension.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            PAs and other CAs: Focused on site level, but able to contribute to
            system-level governance assessment.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Prior experience of facilitating group discussions and
                conducting interviews.
              </li>
              <li>
                Third party technical support such as an in-country NGO,
                university or consulting firm with some social research
                expertise will be beneficial.
              </li>
            </ul>
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
              <li>
                Universally applicable to PAs of any governance type and
                management category
              </li>
              <li>
                Multi-stakeholder: engaging all key actors determined by stakeh
              </li>
              <li>
                Self-assessed: conducted by stakeholders, not external experts
              </li>
              <li>
                Socially differentiated and able to capture different social
                groups’ perspecti
              </li>
              <li>
                Action-oriented: generating ideas for action to address
                identified challenges
              </li>
              <li>
                Standardised, yet adaptable: using the same process, good
                governance principles and methods, yet able to focus on a site’s
                specific priorities
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Due to its recency, GAPA remains work in progress. At the time of
            publishing the toolkit, the final action phase which provides a
            structured approach to applying results and reviewing progress is
            still being tested and developed at different sites.
            <br />
            <br />
            Furthermore, a multi-stakeholder approach like GAPA will only work
            under certain conditions and needs strong, impartial facilitation.
            In situations where in-depth governance assessment is neither
            advisable nor feasible, IIED’s Social Assessment for Protected and
            Conserved Areas methodology (SAPA) could be more adequate (cf.
            Related resources).
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Booker F and Franks P (2019).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://pubs.iied.org/pdfs/17655IIED.pdf">
                Governance Assessment for Protected and Conserved Areas (GAPA).
                Methodo-logy manual for GAPA facilitators.
              </a>
            </span>{" "}
            IIED, London. Accessed on 20 January 2020 at
            <a href="https://pubs.iied.org/pdfs/17655IIED.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Six case-studies from Bangladesh, Kenya, Philippines and Uganda are
            documented in the IIED Working Paper on the same subject (cf.
            Related resources)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Franks, P and Booker, F (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://pubs.iied.org/17632IIED/">
                Governance Assessment for Protected and Conserved Areas (GAPA):
                Early experience of a multi-stakeholder methodology for
                enhancing equity and effectiveness.
              </a>
            </span>
            IIED Working Paper, IIED, London
            <a href="https://pubs.iied.org/17632IIED/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Franks P, Small R, and Booker F (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://pubs.iied.org/14659IIED/">
                Social Assessment for Protected and Conserved Areas (SAPA).
                Meth-odology Manual for SAPA Facilitators.
              </a>
            </span>
            IIED, London
            <a href="https://pubs.iied.org/14659IIED/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll47;
