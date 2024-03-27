import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll11 = (props) => {
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
            TOOL 11
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            NATURESERVE VISTA
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            NatureServe network
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
            Set of assessment methods and software tool (ArcGIS extension)
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Supporting assessment of impacts (e.g. from planned developments) on
            a variety of natural, cultural, and development objectives and
            creation of options for sites, or entire landscapes and seascapes.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>Scenario-based assessment and planning tool</li>
              <li>
                Designed to support non-GIS and non-conservation experts to
                assist integration of conservation with assessment and planning
                activities
              </li>
              <li>
                Software is comprised of spatial analytical functions automated
                through a geographic information system and both spatial and
                non-spatial databases for managing inputs and Vista outputs
              </li>
              <li>
                Based on setting quantitative retention goals for elements of
                interest, assessing how well different scenarios meet those
                goals, and then using the tool to mitigate problems or create
                alternative scenarios for implementation.
              </li>
              <li>
                Supports project level implementation, ongoing monitoring, and
                adaptive planning and management.
              </li>
              <li>
                Two-part process: (1) expertise of element experts (biologists,
                ecologists, and experts in other non-biological conservation
                features) is utilized to populate the database with the data as
                well as expert knowledge, (2) assessment how well current and
                future scenarios will meet their goals, where conflicts are, and
                how to mitigate conflicts or build new alternative scenarios.
              </li>
              <li>
                Component planning analyses possible with NatureServe Vista: (1)
                relative value of areas for individual conservation features,
                (2) landscape condition modelling, (3) summarizing conservation
                value across multiple targets, (4) scenario maps & evaluations,
                (5) synthesis of the above (“site explorations”)
              </li>
              <li>
                Can be linked to Marxan to produce target based site solutions
              </li>
              <li>
                Additional information on structure and function in the user
                manual (see reference)
              </li>
              <li>
                NatureServe Vista maintenance, development and user support are
                supported by an Endowment (trust fund)
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
              <li>Monitor forest change, fires and illegal activities </li>
              <li>Share information about threats but also success stories </li>
              <li>
                Do spatial analysis and download data via open data portal{" "}
                <a href="http://data.globalforestwatch.org/">
                  <Icon as={LinkIcon} />
                </a>
              </li>
              <li>Build own maps and add information </li>
              <li>Track forest change over time</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            By conservation organizations or development cooperation
            organizations involved in conservation: <br />
            <br />
            <ul>
              <li>
                Evaluation of existing government policies to identify
                conservation gaps
              </li>
              <li>
                Evaluation of existing plans or land holdings to identify
                strategic goals
              </li>
              <li>
                Evaluation of new scenarios for conservation to see how they
                meet goals
              </li>
              <li>
                Interchange of plans and databases developed with Vista with
                other implementers to facilitate their adoption
              </li>
            </ul>{" "}
            <br />
            By local or regional government land use & infrastructure planning:{" "}
            <br />
            <br />
            <ul>
              <li>
                Evaluation of current plans, existing land use, and PAs to
                identify gaps in meeting conservation goals
              </li>
              <li>
                Evaluation of conservation impacts of large development projects
                and identification of mitigation needs on-site or off-site
              </li>
              <li>
                Modification of the general plan and zoning to be more
                compatible with conservation goals and identification of areas
                of low conflict for more intensive land use
              </li>
              <li>
                Evaluation of plans provided by conservation organizations to
                see how they fit the community’s conservation goals.
              </li>
            </ul>
            <br />
            By resource user organizations, resource management agencies or
            industry: <br />
            <br />
            <ul>
              <li>
                Evaluation of current resource management plans to identify gaps
                in meeting conservation goals.{" "}
              </li>
              <li>
                Identification of locations for resource use that may be free of
                biodiversity conflicts
              </li>
              <li>
                Identification of areas of likely conservation value but low
                data confidence that require field inventory
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
                Reportedly any spatial planning challenge involving biodiversity
                and/or PAs
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA or PA system level</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Expertise: suitable for GIS experts as well as planners and
                managers with basic GIS experience with a minimum of training
                and support.
              </li>
              <li>
                System requirements: GIS - ESRI ArcGIS with Spatial Analyst; OS
                - Microsoft Windows XP or newer, Access, and .Net 4; 8GB of RAM
                recommended
              </li>
              <li>
                Data and information requirements: spatial distribution for
                conservation elements (additional requirerments in some cases,
                e.g. for scenario planning)
              </li>{" "}
              <li>
                Data preparation and output interpretation costs vary depending
                on scale of project.
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
                Automates functions that would take days to weeks to figure out
                and then implement manually on a step-by-step basis, using GIS
              </li>
              <li>Inter-operationality with other systems (e.g. Marxan)</li>
              <li>Extensive documentation and reporting features</li>
              <li>
                Capability of scenario development and evaluation, analysis and
                optimization of solutions for multiple development objec- tives,
                evaluation of conflicts
              </li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Database preparation and output interpretation require
                considerable skill and time
              </li>
              <li>
                Output quality depends on input quality, including a sound
                rationale for the selection of conservation fea- tures and other
                goals/objectives to take into account during the planning
                process, and sound judgement on the data quality needs to run
                the application
              </li>
              <li>
                Outputs need to be interpreted, discussed and adapted to be
                turned into on-the-ground solutions
              </li>
              <li>
                Does not show how an area/zone needs to be man- aged to conserve
                its features
              </li>
              <li>
                Additional information on limitations and weaknesses in the User
                Manual, pp. 495 –499
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            {/* REFERENCE
             */}
            <a href="http://www.natureserve.org/sites/default/files/vista_usermanual_102213_whole.pdf">
              NatureServe (2013).
              <span style={{ textDecoration: "underline", color: "green" }}>
                NatureServe Vista. Decision-support software for land use and
                conservation planning: user's manual.
              </span>
              Arlington, Virginia: NatureServe. 548 pp. Accessed on 8 October
              2018 at
              <Icon as={LinkIcon} />
            </a>
            2014. World Resources Institute. Accessed on 23.10.2018 at{" "}
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <a href="https://www.natureserve.org/sites/default/files/products/files/ns_fact_sheet_-_natureserve_vista.pdf">
              {" "}
              Factsheet :
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Several updates since first release in 2005. Current version is
            Version 3.3.3 (2018). Vista 4.0 is expected to be released in Summer
            2019.{" "}
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Review from a specific planning context in the US: <br /> <br />
            Crist, P., C. Casper, R. Scherzinger (2014).
            {/*   */}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.natureserve.org/conservation-tools/projects/long-range-transportation-planning-pikes-peak">
                Applying conservation planning tools. Case study: Pikes Peak
                Regional Transportation Plan.
              </a>
            </span>
            Ap Washington, D.C.: American Planning Association. Accessed on 21
            April 2015 at
            <a href="http://www.natureserve.org/conservation-tools/projects/long-range-transportation-planning-pikes-peak">
              {" "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            NatureServe (2010).{" "}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.natureserve.org/sites/default/files/projects/files/land-use_planning_and_the_interoceanic_highway_in_southern_peru_final_report_natureserve_2010.pdf">
                Catalyzing Effective Land-use Planning in Southern Peru. Final
                Report to the Blue Moon Fund.
              </a>
            </span>
            Arlington, Virginia: NatureServe. 23 pp. Accessed on 21 April 2015
            at{" "}
            <a href="https://www.natureserve.org/sites/default/files/projects/files/land-use_planning_and_the_interoceanic_highway_in_southern_peru_final_report_natureserve_2010.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            (relevant to integration/trade-offs between PAs and other land uses
            in a region)
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            User Manual, related Publications available at
            <a href="http://www.natureserve.org/conservation-tools/natureserve-vista">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll11;
