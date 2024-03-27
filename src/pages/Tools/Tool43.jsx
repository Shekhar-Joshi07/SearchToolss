import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll43 = (props) => {
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
            <h4>3.6.4 | COSTS, BENEFITS AND SOCIAL IMPACTS</h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height" style={{ height: "80px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 43
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            SOCIAL ASSESSMENT FOR PROTECTED AREAS (SAPA)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2016
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            International Institute on Environment and Development (IIED), UN
            Environment-WCMC, World Conservation Society (WCS) and Fauna and
            Flora International (FFI){" "}
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
            Methodology Manual
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Structured assessment of the positive and negative social impacts of
            protected areas on the well-being of people living nearby. Method
            should help biodiversity conservation managers and other key
            stakeholder groups to increase and more equitably share benefits and
            reduce the costs of PAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The hands-on manual guides facilitators to organise and conduct
            SAPA. SAPA uses a combination of community workshops to identify
            significant social impacts, a short household survey to explore
            these impacts and related governance issues, and stakeholder
            workshops to discuss and validate survey results and to generate
            recommendations.
            <br />
            <br />
            The 72-page manual consists of two sections and annexes. Section A:
            Introduction (Key concepts, SAPA methodology) Section B: Step by
            step guidance (Phase I: Preparation, Phase II: Scoping, Phase III:
            Assessment; Phase IV: Activities) Annexes: Tools such as Terms of
            Reference for SAPA Facilitation Team, templates to be used for
            different steps, e.g. household survey, model workshop agendas
            <br />
            <br />
            Workflow:
            <br />
            <br />
            <ol>
              <li>Stakeholder analysis</li>
              <li>First community workshop</li>
              <li>First stakeholder workshop</li>
              <li>Household survey</li>
              <li>Second community workshop</li>
              <li>Second stakeholder workshop</li>
            </ol>
            <br />
            <br />
            SAPA standard assessment questions:
            <br />
            <br />
            <ul>
              <li>
                What is the overall contribution to human wellbeing of the PA
                and re-lated conservation and development activities
              </li>
              <li>
                What are the more significant negative impacts of the PA and
                related conservation and development activities?
              </li>
              <li>
                What are the more significant positive impacts of the PA and
                related conservation and development activities?
              </li>
              <li>
                To what extent are communities aware of key information on the
                PA and related conservation and development activities?
              </li>
              <li>
                To what extent is there community participation and influence in
                deci-sion-making regarding the PA and related conservation and
                develop-ment activities?
              </li>
              <li>How are relations between the PA and local communities?</li>
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
                Assessment of the social impact (benefits and costs) of PAs on
                neighbouring communities
              </li>
              <li>
                Generation of recommendations for concrete action by PA
                manag-ers and stakeholders how negative impacts of a PA can be
                re-duced or mitigated and positive impacts can be enhanced and
                benefits shared more equitably
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
              <li>
                Section A of the Manual for academic learning about governance,
                management and equity relating to PAs.
              </li>
              <li>
                Monitoring change in social impacts of a PA and perceptions of
                social impact through repeated assessment
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA-site level</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Cost estimates for conducting SAPA range from US$5,000 to
                US$15,000.
              </li>
              <li>
                The process takes about 4 months (see related resources) with
                intermittent activities.{" "}
              </li>
              <li>
                SAPA-Team consists of 3–6 facilitators, including state actors
                and non-state actors, supported by an expert with social
                research expertise.
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
              <li>Low cost application</li>
              <li>
                Applicable to any governance type, management category and
                ecological context
              </li>
              <li>Available in two languages</li>
              <li>
                Detailed Step by step guidance including pre-assessment of when
                and when not to do a SAPA
              </li>
              <li>
                Section A of the Manual provides background information on
                governance, management and equity in context of PA
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                SAPA should only be conducted in situations in which a
                reasonable level of trust or goodwill exists between local
                communities and PA management
              </li>
              <li>
                Undertaking the household survey may require external support
                e.g. from an NGO or local university with social research
                expertise
              </li>
              <li>
                The SAPA assessment takes a few months hence PA Team needs
                persistence and dedication for this project
              </li>
              <li>
                During SAPA, stakeholders and PA managers need to meet at least
                once. This may not be practical for very large PAs where travel
                within and around the PA is difficult and costly.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Franks, P and Small, R (2016)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://pubs.iied.org/pdfs/14659IIED.pdf">
                Social Assessment for Protected Areas (SAPA). Methodology Manual
                for SAPA Facilitators.
              </a>
            </span>
            IIED, London. Accessed on 6. September 2018 at
            <a href="http://pubs.iied.org/pdfs/14659IIED.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://pubs.iied.org/pdfs/14661IIED.pdf">
                Research report
              </a>
            </span>
            provides an overview of the Social Assessment for Protected Areas
            (SAPA) methodology and describes the results of SAPA’s application
            at four protected area sites in Uganda, Zambia, Gabon and Kenya:
            Phil Franks and Rob Small (2016){" "}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://pubs.iied.org/pdfs/14661IIED.pdf">
                Understanding the social impacts of protected areas: a community
                perspective.
              </a>
            </span>{" "}
            IIED Research Report. IIED, London
            <a href="http://pubs.iied.org/pdfs/14661IIED.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            White, S. C. (2009).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://researchportal.bath.ac.uk/en/publications/analyzing-wellbeing-a-framework-for-development-practice">
                {" "}
                Analyzing Wellbeing: A Framework for Development Practice.
                (Wellbeing in Developing Countries (WeD) Working Papers;
              </a>
            </span>
            No. WeD Working Paper 09/44). Bath: University of Bath/Wellbeing in
            De-velop-ing Countries Research Group. Accessed on 07 September 2018
            at
            <a href="https://researchportal.bath.ac.uk/en/publications/analyzing-wellbeing-a-framework-for-development-practice">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Franks, P., Roe, D., Small, R., Schneider, H. (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://pubs.iied.org/pdfs/14643IIED.pdf">
                Social Assessment of Protected Areas: Early Experience and
                Results of a Participatory, Rapid Approach.
              </a>
            </span>
            IIED Working Paper. IIED, London Accessed on 19 September 2018 at
            <a href="https://pubs.iied.org/pdfs/14643IIED.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Further resources available at
            <a href="https://www.iied.org/assessing-social-impacts-protected-areas">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll43;
