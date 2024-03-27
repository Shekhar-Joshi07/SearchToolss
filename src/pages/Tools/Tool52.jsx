import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll52 = (props) => {
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
            TOOL 52
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GUIDELINES FOR STAKEHOLDER INVOLVEMENT IN PA MANAGEMENT. IN:
            PARTICIPATORY MANAGEMENT OF PAs IN THE CARPATHIAN ECOREGION.{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2012
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            WWF Danube-Carpathian Programme{" "}
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
            Guideline, methodology and good practice standards, collection of
            existing methods and tools
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Guidance for stakeholder involvement by PA managers
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of a glossary, introduction, four core
            sections, two annexes, references and bibliography.
            <br />
            <br />
            Section
            <br />
            <br />
            <ol>
              <il>General recommendations for site-level decision makers</il>
              <il>
                Guidelines for planning stakeholder involvement in the
                management of protected areas (four-step planning methodology)
              </il>
              <il>Theoretical background</il>
              <il>
                Participatory management toolbox (tools and methodologies on
                preliminary analysis, planning, participatory processes, and
                monitoring/evaluation)
              </il>
            </ol>
            <br />
            Annex
            <ol>
              <il>
                Detailed methodology for analysis, assessment and planning of
                stakeholder involvement
              </il>
              <il>
                PA value categories, threat categories, important threats in the
                Carpathian ecoregion
              </il>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Development and implementation of stakeholder engagement activities
            in PAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            A BCP process:
            <ul>
              <li>Application at PA system level</li>
              <li>
                Basis for assessment and monitoring of existing stakeholder
                engagement projects
              </li>
              <li>
                Stakeholder engagement for local non-PA conservation projects
              </li>
              <li>Feasibility checks for new PAs</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Primarily site level</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            PDF downloadable free of charge. Application costs vary according to
            context.
            <br />
            <br />
            Typical use will require the capacity (in terms of networks,
            logistics, equipment and financial resources) to conduct
            participatory consultation /planning workshops and support the
            continued operation of stakeholder participation mechanisms in PAs.
            <br />
            <br />
            Several of the more specific methods described require sound
            facilitation and partly mediation skills.
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
                Combination of a sound approach and good practice principles,
                explanation of underlying concepts, and a detailed step-by-step
                guidance including some worksheet templates
              </li>
              <li>Compendium of methods and tools</li>
              <li>Strong tools for initial situation analysis</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Relatively recent, so limited experience from application
                available to date
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ionit‚a ̆, A., E. Stanciu (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://propark.ro/images/uploads/file/publicatii/Participatory%20management%20of%20protected%20area%20in%20the%20carpathian%20ecoregion.pdf">
                Participatory management of protected areas in the Carpathian
                ecoregion, Part II: Guidelines for stakeholder involvement in
                protected area management.
              </a>
            </span>
            Vienna: WWF Danube-Carpathian Programme. 148 pp. Accessed on 10 July
            2015 at
            <a href="http://propark.ro/images/uploads/file/publicatii/Participatory%20management%20of%20protected%20area%20in%20the%20carpathian%20ecoregion.pdf">
              <Icon as={LinkIcon} /> (3 MB)
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <a href="http://ccibis.org/carpathian-values/97-protected-areas-in-the-carpathians">
              <Icon as={LinkIcon} />
            </a>{" "}
            (including various language versions)
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll52;
