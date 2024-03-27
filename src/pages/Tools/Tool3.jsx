import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll3 = (props) => {
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
            <h4>3.2.1 | SITE PRIORITIZATION METHODS AND APPROACHES</h4>
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
            TOOL 3
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            BIODIVERSITY A-Z (SECTION: AREAS)
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2015
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UN-Environment-WCMC
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
            Compilation of approaches, methods and tools{" "}
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Overview over different types of areas of biodiversity importance
            and protected area categories and designations to support site
            prioritisation for conservation.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Alphabetically listed summaries of globally relevant systems to
            identify, prioritise and protect areas of importance for
            biodiversity. These fall into two main categories:
            <ol>
              <li>
                Protected areas are those under protected area frameworks, that
                have legal or other effective protection at the national level.
                Some have additional recognition through regional or
                international conventions and agreements (such as UNESCO World
                Heritage Sites).
              </li>
              <li>
                . Biodiversity designations (such as KBA, EBSA) are developed by
                governments, academics and NGOs in order to identify areas of
                biodiversity importance or areas where biodiversity is
                threatened, as a means to focus attention and resources on their
                conservation
              </li>
              <li>
                Each entry comprises the following:
                <ul>
                  <li>Map of current sites under the given type/designation</li>
                  <li>Description</li>
                  <li>vSupported by</li>
                  <li>Year of creation</li>
                  <li>Geographical coverage</li>
                  <li>Criteria for designation</li>
                  <li>Management obligations/requirements</li>
                  <li>
                    Business relevance (since this was originally linked to a
                    business and biodiversity initiative)
                  </li>
                </ul>
                Downloadable factsheets, hyperlinks to original documentation
                and references where appropriate are also provided.
              </li>
            </ol>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Overview over approaches, methods and tools for site
                prioritization in the context of conservation planning or PA
                system development
              </li>
              <li>
                Information of other actors (e.g. private sector) about the
                location of areas important for biodiversity
              </li>
              <li>
                Entry point for choosing methodologies for systematic
                conservation and PA system planning
              </li>
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
          <div className="col">Personal computer and internet access </div>
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
              <li>Good overview and relatively wide coverage</li>
              <li>
                Includes many of the important approaches and designations, such
                as Important Bird Areas (IBA), Important Plant Areas (IPA),
                Alliance of Zero Extinction (AZE) sites, biodiversity hotspots,
                etc.
              </li>
              <li>
                Comprehensive and consistent documentation of and links to each
                approach, method or tool documented
              </li>
              <li>Good presentation</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>The collection is comprehensive but not complete</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.biodiversitya-z.org/themes/areas?s=home-icons">
                UN-Environment-WCMC: About Biodiversity a-z.{" "}
              </a>
            </span>
            &nbsp; Accessed on 5 October 2018 at{" "}
            <a href="https://www.biodiversitya-z.org/themes/areas?s=home-icons">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Released in 2015. Since then successively updated – no distinct
            versions
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Examples of application of one of the area designation methodologies
            from the portal, namely Ecologically and Biologically Significant
            Marine Area (EBSA) include: <br />
            Hoyt, E. (2016).
            <a href="https://panorama.solutions/en/solution/getting-se-kamchatka-ebsa-and-candidate-imma-marine-mammal-data">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Getting SE Kamchatka as an EBSA and candidate IMMA from marine
                mammal data. PANORAMA – solutions for a healthy planet
              </span>
              Accessed on 10 September at 2018
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Hoyt, E. (2016)
            <a href="https://panorama.solutions/en/solution/getting-notice-rare-blue-whale-area-ebsa-road-be-mpa">
              <span style={{ textDecoration: "underline", color: "green" }}>
                . Getting notice for a rare blue whale area as an EBSA on road
                to be an MPA. PANORAMA– solutions for a healthy planet.
              </span>
              ,Accessed on 10 September 2018 at
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll3;
