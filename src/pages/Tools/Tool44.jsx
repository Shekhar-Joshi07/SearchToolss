import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll44 = (props) => {
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
            <h4>3.6.5 | ECOSYSTEM SERVICES ASSESSMENT AND VALUATION</h4>
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
            TOOL 44
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            TOOLS FOR MEASURING, MODELLING, AND VALUING ECOSYSTEM SERVICES.
            GUIDANCE FOR KEY BIODIVERSITY AREAS, NATURAL WORLD HERITAGE SITES,
            AND PROTECTED AREAS{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN{" "}
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
            Guideline including case studies.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Overview and decision-support for selecting ecosystem services (ES)
            assessment and valuation methods
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The document provides guidance for practitioners on existing tools
            that can be applied to measure or model ecosystem services (ES)
            provided by important sites for biodiversity and nature
            conservation, including Key Biodiversity Areas (KBAs), natural World
            Heritage sites (WHS), and protected areas (PAs). It summarizes a
            range of possible reasons for ES assess-ment and introduces tools
            that can be used for each purpose. It contains a comparison of a set
            of nine ES assessment tools that are (a) most commonly applied, (b)
            available to practitioners at no cost, and (c) can be applied in new
            contexts (i.e. they are not restricted to specific countries or case
            studies). Tools include written step-by-step and computer-based
            modelling tools.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Preparation of ES assessments and valuations.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">Education and learning</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Various</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Skills needed and application costs depend on context and
                selected assessment tool (e.g. written vs. computer-based
                modelling).
              </li>
              <li>Basic data on ES will be needed in any case</li>
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
              <li>Up-to-date information on methods and tools presented.</li>
              <li>All tools are freely available.</li>
              <li>
                Comprehensive description and classification of the featured
                methods and tools.
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                The selection of an appropriate method or tool should always be
                guided by an expert – the information presented is not
                sufficient for new-comers to make decision on that basis (e.g.
                decision trees).
              </li>
              <li>
                Does not emphasize that ES assessments should be closely linked
                to policy questions.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Neugarten, R.A., Langhammer, P.F., Osipova, E., Bagstad, K.J.,
            Bhagabati, N., Butchart, S.H.M., Dudley, N., Elliott, V., Gerber,
            L.R., Gutierrez Arrellano, C., Ivanic ́, K.-Z., Kettunen, M., Mandle,
            L., Merriman, J.C., Mulligan, M., Peh, K.S.-H., Raudsepp-Hearne, C.,
            Semmens, D.J., Stolton, S., Willcock, S. (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-028-En.pdf">
                Tools for measuring, modelling, and valuing ecosystem services:
                Guidance for Key Biodiversity Areas, natural World Heritage
                Sites, and protected areas.
              </a>
            </span>{" "}
            Gland, Switzerland: IUCN. x + 70pp
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-028-En.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Comprehensive compilation of ES assessment tools and methods:{" "}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.aboutvalues.net/">Values Database</a>
            </span>{" "}
            <a href="http://www.aboutvalues.net/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll44;
