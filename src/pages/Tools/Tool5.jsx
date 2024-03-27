import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";

import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll5 = (props) => {
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
              <h3>
                Category 3.2 - SPATIAL PLANNING FOR PROTECTED AREAS AND
                PROTECTED AREA SYSTEMS
              </h3>
            </div>
            <h4>
              3.2.2 | PROTECTED AREA SYSTEM PLANNING, INTEGRATED GAP ANALYSIS,
              ZONING
            </h4>
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
            TOOL 5
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            NATIONAL SYSTEM PLANNING FOR PROTECTED AREAS
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            1998
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN-WCPA, Cardiff University
          </div>
        </div>
        <div className="row fw-bold ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
            TYPE
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color bg-fill">
            PURPOSE
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            Guideline including case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            General guidance on national PA system planning.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            General guideline consisting of:
            <br />
            <ul>
              <li>
                Explanation of general rationale and policy basis for PA system
                planning
              </li>

              <li>
                Discussion of characteristics of PA systems:{" "}
                <ul>
                  <li>representativeness, comprehensiveness and balance, </li>
                  <li>adequacy</li>
                  <li>coherence and complementarity</li>
                  <li>consistency</li>
                  <li>cost-effectiveness, efficiency and equity</li>
                </ul>
              </li>
              <li>
                Scope, information needs and underlying concepts of PA system
                plans
              </li>
              <li>
                Requirements to implement system plans:
                <ul>
                  <li>community involvement and consultation </li>
                  <li>financing </li>
                  <li>commitment and political support </li>
                  <li>institutions</li>
                  <li>training</li>
                  <li>partnerships</li>
                </ul>
              </li>
              <li>
                Guidance on PA system planning process and product, as well as
                implementation and monitoring/ evaluation
              </li>
              <li>Appendices, references and useful contacts</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">National PA system planning</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Sub-national or eco-regional PA system planning</li>
              <li>Review, assessment and improvement of existing PA systems</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color">
          <div className="col">Typically PA system level</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>No particular prerequisites for some uses</li>
              <li>
                Need for national PA system development capacity and resources
                for core use
              </li>
              <li>Implementation costs vary widely</li>
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
              <li>Broad, general approach with wide applicability</li>
              <li>Endorsement by IUCN WCPA</li>
              <li>
                A solid and (to a large extent – see limitations under
                weaknesses) still valid piece of basics
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>No specific guidance included</li>
              <li>
                It pre-dates important developments in conservation policy and
                standard setting, such as distinguishing different governance
                types of protected areas and the requirement to diversify
                governance types in a PA system (e.g. laid down in{" "}
                <span style={{ textDecoration: "underline", color: "green" }}>
                  CBD’s Programme of Work on Pro- tected Areas of 2004, PoWPA{" "}
                  <a href="https://www.cbd.int/protected/pow/learnmore/intro/">
                    <Icon as={LinkIcon} />
                  </a>
                  ), the Aichi Biodiversity Target 11 of the CBD’s Strategic
                  Plan 2011–2020{" "}
                  <a href="https://www.cbd.int/protected/pow/learnmore/intro/">
                    <Icon as={LinkIcon} />
                  </a>
                </span>{" "}
                including the concept of other effective area-based conservation
                measures (OECMs), and require- ments relating to consultation of
                indigenous and local communities deriving from CBD decisions
                (e.g. PoWPA) and other international agreements and declarations
                (e.g.{" "}
                <span style={{ textDecoration: "underline", color: "green" }}>
                  UN Declaration on the Rights of Indigenous Peoples, UNDRIP
                  2008
                </span>{" "}
                <a href="https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html">
                  <Icon as={LinkIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Davey, A.G. (1998).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/PAG-001.pdf">
                National System Planning for Protected Areas.
              </a>
            </span>
            Gland, Switzerland and Cambridge, UK: IUCN. x + 71pp. Accessed 5
            October 2018 at{" "}
            <a href="https://portals.iucn.org/library/efiles/documents/PAG-001.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>
        <div className="row border-color">
          <div className="col">
            <li>Two case studies included in methodological guidelines</li>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Gombos, M., Atkinson, S., Green, A., & Flower, K. (Eds.). (2013).
            <a href="http://www.coraltriangleinitiative.org/sites/default/files/resources/11_Designing%20Effective%20Locally%20Managed%20Areas%20in%20Tropical%20Marine%20Environments%20Booklet%20(English).pdf">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Designing Effective Locally Managed Areas in Tropical Marine
                Environments: A Booklet to Help Sustain Community Benefits
                through Management for Fisheries, Ecosystems, and Climate
                Change.
              </span>
            </a>{" "}
            Jakarta, Indonesia: USAID Coral Triangle Support Partnership.{" "}
            <a href="https://www.coraltriangleinitiative.org/sites/default/files/resources/11_Designing%20Effective%20Locally%20Managed%20Areas%20in%20Tropical%20Marine%20Environments%20Booklet%20(English).pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            Accessed on 19 February 2019
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll5;
