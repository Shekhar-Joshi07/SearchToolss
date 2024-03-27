import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll55 = (props) => {
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
            TOOL 55
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            AUDUBON TOOLS FOR ENGAGEMENT
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2011
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Audubon Society (publisher - BirdLife USA), in cooperation with the
            U.S. Fish and Wildlife Service, the Environmental Education and
            Training Partnership (EETAP) and TogetherGreen{" "}
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
            Methodology and collection of specific tools/methods
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Guidance on how best to engage people in any type of nature
            conservation work, including PAs.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of an introduction, a 20-step guide to
            successful engagement of people (organized in eight chapters within
            four sections), a collection of 34 more specific approaches, methods
            and tools, and an appendix including a glossary and a list of
            further resources and case studies
            <br />
            <br />
            Eight core chapters:
            <ol>
              <li>Getting started</li>
              <li>What are you trying to do?</li>
              <li>What’s causing the problems?</li>
              <li>Who do you need to engage and why?</li>
              <li>Getting to know your audience</li>
              <li>Getting to know your audience</li>
              <li>Exploring the social strategies</li>
              <li>Moving from planning to action</li>
            </ol>
            <br />
            <br />
            The guidelines are meant as an open framework that can be adapted to
            the context of each individual planning process. They are meant to
            be used in conjunction with general conservation planning
            approaches, such as the Open Standards for the Practice of
            Conservation
            <br />
            <br />
            As of 2018, the guideline has been complemented by two additional
            modules (see related resources). Two more are in preparation.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Developing strategies and plans to engage stakeholders in any type
            of conservation project or activity, including PAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Assessment and evaluation of outreach elements of existing
                conservation projects
              </li>
              <li>Learning</li>
              <li>Application to non-biodiversity related projects</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Applicable at all levels, from individual PAs to international
            policy
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Toolkit document and additional modules downloadable free of charge.
            Required skills and resources vary depending on tools chosen and
            context.
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
              <li>General nature of approach and wide applicability</li>
              <li>
                Wide range of specific methods for stakeholder engagement
                included
              </li>
              <li>
                Compatibility with Open Standards for Practice of Conservation
                and other planning frameworks
              </li>
              <li>
                High quality publication and website, including effective
                graphics
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Relatively complex structure</li>
              <li>Not PA specific (but widely applicable to PAs) </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Braus, J. (Editor) (2011).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://web4.audubon.org/educate/toolkit/pdf/the-toolkit.pdf">
                Tools of Engagement: A Toolkit for Engaging People in
                Conservation.
              </a>
            </span>
            Washington, D.C.: Audubon Society. 215 pp. Accessed on 15 June 2015
            at
            <a href="http://web4.audubon.org/educate/toolkit/pdf/the-toolkit.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            (16,5 MB)
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES / FURTHER READING </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Related resources are available at
            <a href="https://www.audubon.org/conservation/education">
              <Icon as={LinkIcon} />
            </a>
            Two resources have been published already:
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Bonta, M., T. DeFalco, C. Taylor Smith (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://web4.audubon.org/educate/toolkit/pdf/DM2015.pdf">
                Diversity and the Conservation Movement.
              </a>
            </span>
            New York: The Nation-al Audubon Society. 44 pp. Accessed on 13
            November 2018 at
            <a href="https://cdn.naaee.org/sites/default/files/eepro/resource/files/diversity_module.9.22.15.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ardoin, N., J. Heimlich, J. Braus, C. Merrick (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://web4.audubon.org/educate/toolkit/pdf/Influencing%20Conservation%20Outcomes%20Module%202013_National%20Audubon%20Society.pdf">
                Influencing Conservation Action: What the Research Says About
                Environmental Literacy, Behavior, and Conservation.
              </a>
            </span>
            New York: The National Audubon Society. 87 pp. Accessed on 13
            November 2018 at
            <a href="https://cdn.naaee.org/sites/default/files/eepro/resource/files/influencingconservationaction_3.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            Additional resources are in preparation.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll55;
