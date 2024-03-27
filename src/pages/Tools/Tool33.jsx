import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll33 = (props) => {
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
            <h4>3.6.1 | PA MANAGEMENT EFFECTIVENESS ASSESSMENT</h4>
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
            TOOL 33
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            EVALUATING EFFECTIVENESS – IUCN FRAMEWORK FOR ASSESSING MANAGEMENT
            EFFECTIVENESS OF PAS{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2006
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN WCPA
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
            Broad conceptual framework for PA management effectiveness
            assessment
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                General framework around assessment of six main elements:
                context and vision for site management (within the context of
                existing status and pressures), progress through planning,
                allocation of resources (inputs), management actions (process),
                goods and services (outputs), and impacts/outcomes.
              </li>
              <li>
                Distinction of four key phases of designing and implementing
                PAME assessments: (1) defining assessment objectives, scope and
                resourcing, (2) choosing/developing a methodology, including
                establishment of team and defining indicators (3) implementation
                of assessment, (4) interpretation, communication and use of
                results.
              </li>
              <li>
                Further general recommendations: (1) integrate PAME assessment
                into management routine, (2) improve data coordination and
                rationalization, (3) develop cost-effective, meaningful
                monitoring systems and indicators, particularly on ecological
                integrity assessment and indicators for social, cultural and
                economic factors, (4) find better ways to engage with managers
                and communities, (5) integrate data from various assessments to
                find trends, themes and lessons across regions, and (6) ensure
                results are interpreted, communicated and used.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Familiarization with general conceptual framework and approach for
            PA management effectiveness assessments – implemented through more
            specific methods such as METT or RAPPAM
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs or PA systems</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            No specific skills and resources can be identified, as this is a
            general framework.
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
              <li>General character and broad scope</li>
              <li>Wide applicability and use</li>
              <li>
                Complementarity with several more specific PAME assessment
                methods (e.g. METT, RAPPAM)
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Lack of specific guidance on how to conduct PAME assessments
              </li>
              <li>
                Gives relatively little attention to outcomes, although these
                are key for adaptive management
              </li>
              <li>
                Possible lack of integration with strategic management
                frameworks of sites appraised
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Hockings, M., S. Stolton, F. Leverington, N. Dudley, J. Courrau
            (2006).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/pag-014.pdf">
                Evaluating Effectiveness: A framework for assessing management
                effectiveness of protected areas. 2nd edition.
              </a>
            </span>
            Gland, Switzerland and Cambridge, UK: IUCN. xiv + 105 pp
            <a href="https://portals.iucn.org/library/efiles/documents/pag-014.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            First edition 2000, second edition 2006, no further modifications as
            of May 2015
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Hockings, M., F. Leverington, C. Cook (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://press.anu.edu.au/titles/protected-area-governance-and-management-2/">
                Protected area management effectiveness.
              </a>
            </span>
            In G. L. Worboys, M. Lockwood, A. Kothari, S. Feary and I. Pulsford
            (eds.):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://press.anu.edu.au/titles/protected-area-governance-and-management-2/">
                Protected Area Governance and Management,
              </a>
            </span>{" "}
            pp. 889–928. Canberra: ANU Press. Accessed on 24 September 2018 at
            <a href="https://press.anu.edu.au/publications/protected-area-governance-and-management">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Leverington, F., K. L. Costa, J. Courrau, H. Pavese, C. Nolte, M.
            Marr, L. Coad, N. Burgess, B. Bomhard, M. Hockings (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/2008-089.pdf">
                Management effectiveness evaluation in protected areas – a
                global study. Second edition 2010.
              </a>
            </span>
            Brisbane: The University of Queensland. Accessed on 24 September
            2018 at
            <a href="https://portals.iucn.org/library/efiles/documents/2008-089.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Seven case studies - some of them from a development cooperation
            context - included in Hockings et al. (2006).
            <br />
            <br />
            Experience with more specific PAME assessment tools (e.g. METT,
            RAPPAM) is also relevant to this general IUCN framework, as these
            methods implement the approach.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">See profiles of METT, RAPPAM etc. below</div>
        </div>
      </div>
    </>
  );
};

export default Tooll33;
