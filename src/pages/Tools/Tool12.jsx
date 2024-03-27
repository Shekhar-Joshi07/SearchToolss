import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll12 = (props) => {
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
            TOOL 12
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            MARXAN /MARXAN WITH ZONES / ZONAE COGITO /MARXANIO
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2008
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            University of Queensland
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
            Set of software tools
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Spatial optimization for systematic PA design.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Software uses stochastic optimization routines (“simulated
                annealing”) to generate optimised land use (including PA)
                configurations for given biodiversity representations
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
                Calculation of spatial land use (including PA) configurations to
                meet conservation objectives for mul- tiple conservation
                features (e.g. species, ecosystems), aimed at finding the best
                configuration of PAs and other conservation areas with the least
                costs (in terms of opportunity costs for other land uses, costs
                for threat management, etc.
              </li>
              <li>
                Site prioritization for conservation of species/ecosystems{" "}
              </li>
              <li>
                Estimation of comprehensiveness/effectiveness of PA and land use
                configurations
              </li>
              <li>
                Exploration of trade-offs in PA system design and their impacts
                on various stakeholders
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
                Assessment of effectiveness of current PA system configuration
                in meeting national/international conservation goals
              </li>
              <li>CEPA</li>
              <li>Potentially many others</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA systems</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                PC with Microsoft OS, at least powerful enough to run Arc9 or
                other GIS (better more powerful)
              </li>
              <li>
                Solid understanding of PA system planning, systematic
                conservation planning and the need for spatial optimization in
                this context
              </li>
              <li>Advanced GIS (e.g. ArcGIS) and general IT competence</li>{" "}
              <li>
                Advanced competence in data management and dataset preparation
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
                Comprehensiveness and ability to provide spatial solutions to
                complex conservation problems
              </li>
              <li>Rigour, transparency and repeatability</li>
              <li>Applicable in all ecosystems</li>
              <li>
                Extensive experience from application and community of practice
              </li>
              <li>
                Compatibility with other planning (particu- larly GIS) tools
              </li>
              <li>Can incorporate multiple interests into problem solution</li>
              <li>Freely available</li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Output quality depends on input quality, including a sound
                rationale agreed among stakeholders of how much of a
                species/ecosystem needs to be protected
              </li>
              <li>
                Outputs need to be interpreted, discussed and some- times
                adapted to be turned into on-the-ground solu- tions (in spite of
                their often "nice" visual impression)
              </li>

              <li>
                Weak in dealing with demographic interconnectedness of planning
                units
              </li>
              <li>
                Serves as a decision support tool, but does not in itself
                resolve conflicts of interest regarding land use
              </li>
              <li>
                Data hungry; preparation of datasets requires time and
                relatively high competence
              </li>
              <li>
                oes not show how an area/zone needs to be man- aged to conserve
                its features
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            {/*
             */}
            See Marxan Manual for further technical specifications: Game, E. T.,
            H. S. Grantham (2008).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://marxan.net/downloads/documents/Marxan_User_Manual_2008.pdf">
                Marxan User Ma-nual: For Marxan version 1.8.10.
              </a>
            </span>
            University of Queensland, St. Lucia, Queensland, Australia, and
            Pacific Marine Analysis and Research Association, Vancouver, British
            Columbia, Canada.
            <a href="https://pacmara.org/marxan-user-manual-for-marxan-version-1-8-10">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            The documentation for Marxan provided on the website includes
            technical information about how Marxan works, how to use Marxan, and
            how to troubleshoot when faced with common problems.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Several versions of the core tool since 1999 - current version
                is V2.43.
              </li>
              <li>
                Marxan with Zones is an extension of Marxan aimed to include
                zonation into spatial PA solutions (Version 1.0.1 2008)
              </li>
              <li>
                Zonae Cogito is a decision support system and database
                management software system (on zonation issues) for the family
                of Marxan software (release 2011)
              </li>
              <li>Marxanio is a web-based App that is based on Marxan</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Applied Environmental Decision Analysis (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://marxan.net/downloads/documents/DPoint_Marxan_special.pdf">
                Making sense with Marxan. Decision Point Special Marxan Issue.
              </a>
            </span>
            16 pp. Accessed at 20 October 2018
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Possingham, H., L. Fernandes, K., Walls, M., Weatherhead, J., Ardron
            (2004).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://mpanews.openchannels.org/news/mpa-news/using-computer-software-design-marine-reserve-networks-planners-discuss-their-use">
                Using computer software to design marine reserve networks:
                Planners discuss their use of Marxan. MPA News 6(4).
              </a>
            </span>
            Accessed on 12 Sep-tember 2018
            <a href="https://mpanews.openchannels.org/news/mpa-news/using-computer-software-design-marine-reserve-networks-planners-discuss-their-use">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Marxan has been used by 6,708 users in 184 countries. <br />
            <br />
            Case Studies, published examples of its use and further support are
            available at
            <a href="http://marxan.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Course Materials available at
            <a href="https://marxansolutions.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll12;
