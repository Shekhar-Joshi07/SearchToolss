import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll36 = (props) => {
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
            TOOL 36
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            HOW IS YOUR MPA DOING?
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2004
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN, WWF and US NOS/NOAA
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
            Guideline including a collection of indicators
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Design and planning of PAME evaluations for MPAs.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Broadly builds on IUCN PAME framework (Hockings et al. 2000)
              </li>
              <li>
                2 sections: (1) sequence of steps in PAME evaluation (2)
                indicators
              </li>
              <li>
                Steps in MPA PAME assessment: (1) indicator selection, (2)
                evaluation planning for selected indicators, (3) data collection
                and analysis, (4) communication of results and input into
                adaptive management
              </li>
              <li>
                Indicator set: 10 biophysical, 16 socio-economic, 16 on
                governance
              </li>
              <li>
                Each indicator discussed in detail (definition, purpose, data
                collection, analysis and interpretation, strengths and
                limitations, requirements and outputs, references)
              </li>
              <li>
                Guidance supported by flow charts of evaluation process and
                worksheet (checklist of steps to be completed)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Design and planning of marine MPA management effectiveness
                assessments
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Accountability, donor/treasury use, CEPA</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs (MPAs)</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <li>
              Understanding of site(s) and basic understanding of ecology and
              social sciences present within team
            </li>
            <li>
              MPA has existed for at least two years, has explicitly stated
              goals and objectives (e.g. in management plan)
            </li>
            <li>
              Evaluation costs depend on indicators chosen and assessment
              protocol (e.g. intensity of data collection). Some indicators
              require considerable expertise and equipment for their use. These
              are discussed in the indicator sections.
            </li>
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
              <li>Detailed instructions for indictor use and interpretation</li>
              <li>
                Designed for close integration with management goals and
                objectives of MPAs in question
              </li>
              <li>
                Wide range of indicators including biophysical, socio-economic
                and governance related
              </li>
              <li>
                High standardization of indicators and resulting replicability
                makes tool suitable for trend monitoring and inter-site
                comparison, as well as system level synthesis of findings
              </li>
              <li>
                Broad complementarity with IUCN PAME framework (Hockings et al.
                2006)
              </li>
              <li>Concise documentation and referencing of guide lines</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Relatively high skills, effort and costs of indicator based PAME
                evaluation - Sustained implementation (e.g. in a monitoring
                context) needs continued efforts and resource input
              </li>
              <li>
                Sustained implementation (e.g. in a monitoring context) needs
                continued efforts and resource input
              </li>
              <li>
                High number of possible indicators will lead to different
                choices by individual PA managers, and hence limited
                comparability between assessments of different sites
              </li>
              <li>Further standardisation needed for some indicators</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Pomeroy, R.S., J. E. Parks, L. M. Watson (2004).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/PAPS-012.pdf">
                How is your MPA doing? A Guidebook of Natural and Social
                Indicators for Evaluating Marine Protected Area Management
                Effectiveness.
              </a>
            </span>{" "}
            Gland, Switzerland and Cam-bridge, UK: IUCN. xvi + 216 pp. Accessed
            on 24 September 2018 at
            <a href="https://portals.iucn.org/library/efiles/documents/PAPS-012.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Pomeroy, R. S., L. M. Watson, J. E. Parks, G. A. Cid (2005). How is
            your MPA doing? A methodology for evaluating the management
            effectiveness of marine protected areas. Ocean & Coastal Management
            48 (7–8): 485–502
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Fox, H. E., Holtzman, J. L., Haisfield, K. M., McNally, C. G., Cid,
            G. A., Mascia, M. B., Parks, J. E., Pomeroy, R. S. (2014) How Are
            Our MPAs Doing? Challenges in Assessing Global Patterns in Marine
            Protected Area Performance, Coastal Management, 42:3, 207-22 pp.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Review of early global post-launch experience summarized by Parks,
            J. (2009).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://marineprotectedareas.noaa.gov/pdf/fac/09mtg_apr21-23/lessonslearned_parks.pdf">
                Lessons Learned from “How Is Your MPA Doing?” Considerations for
                evaluating networks of MPAs. The Nature Conservancy.
              </a>
            </span>
            62 pp. Ac-cessed on 24 September 2018 at
            <a href="http://marineprotectedareas.noaa.gov/pdf/fac/09mtg_apr21-23/lessonslearned_parks.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Lopez, A. C. (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://panorama.solutions/en/solutions/surveillance-and-enforcement-in-protected-areas">
                A holistic strategy for Protected Area management. Panorama –
                solutions for a healthy planet.
              </a>
            </span>
            Accessed on 24 September 2018 at
            <a href="https://panorama.solutions/en/solutions/surveillance-and-enforcement-in-protected-areas">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll36;
