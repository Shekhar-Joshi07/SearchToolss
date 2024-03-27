import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";

import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll6 = (props) => {
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
            TOOL 6
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            PROTECTED PLANET
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10"></div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UN-Environment-WCMC, IUCN WCPA
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
            Online portal and database
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Informing decision-making and enhancing action on PAs through
            provision of a comprehensive source of information on protected
            areas worldwide including data on their status and trends.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Protected Planet is an online interface to access the World Database
            on Protected Areas (WDPA), and to retrieve from there data and
            information about PAs in various formats <br />
            The database is updated monthly with submissions from governments,
            non-governmental organizations, landowners and communities <br />
            Supported data query and retrieval formats: <br />
            <ul>
              <li>
                PAs accessible via map view or name search (including country
                statistics search)
              </li>
              <li>Download of WDPA GIS datasets</li>
              <li>
                Global and regional Protected Planet Reports summarizing data
                and information are published every two years
              </li>
              <li>
                Access to statistics and other information on specific
                countries, and comparison between countries.
              </li>
              <li>Statistical reports</li>
            </ul>{" "}
            <br />
            Specific data and information is also offered for thematic areas{" "}
            <br /> <br />
            <ul>
              <li>Marine PAs</li>
              <li>Indigenous and Community Conserved Areas</li>
              <li>PA management effectiveness information</li>
              <li>
                PARCC (Protected Areas Resilient to Climate Change in Western
                Africa)
              </li>
              <li>Connectivity conservation</li>
              <li>IUCN Green List of Protected Areas</li>
              <li>Equity and Protected Areas</li>
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
                Spatial overview and collection of information on PAs and PA
                systems
              </li>
              <li>
                Download of datasets for in-depth analysis of individual PAs or
                regions
              </li>
              <li>
                Visualization in the context of PA system planning and
                connectivity planning
              </li>
              <li>
                Access to statistics and other information on specific PAs and
                countries, and comparison between countries
              </li>
              <li>
                Monitoring of global progress towards PA related policy goals
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs, PA systems, countries or larger geographical regions
            (including global)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            PC with internet access <br /> <br />
            Accessing and using the database requires only minimal skills and
            equipment. However, using some of the output formats supported (e.g.
            GIS datasets) is only possible with more advanced specialist skills
            and stronger computational power.
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
              <li>Comprehensiveness and global coverage</li>
              <li>
                Semi-official character and authority of WDPA (several CBD
                Decisions have encouraged are encouraged Parties to the CBD to
                share and update relevant information on their protected areas
                system with the World Database on Protected Areas)
              </li>
              <li>
                Allows access to multiple resources of information on many PAs
              </li>
              <li>Map-view</li>
              <li>Possibility to download geographical data sets</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Not always complete and up to date</li>
              <li>
                Sometimes incorrect information is entered –e.g. on overlapping
                PAs
              </li>
              <li>Limited search function (no keyword search)</li>
              <li>Some small PAs only represented by point data</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.protectedplanet.net/">Protected Planet.</a>
            </span>
            Cambridge, UK: UN Environment-WCMC. Accessed on 19 October 2018 at
            <a href="http://www.protectedplanet.net/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Being a data resource, use of Protected Planet and WDPA is usually
            not documented. However, there are some relevant examples: <br />
            <br />
            Gap analysis of natural/mixed World Heritage sites: <br />
            Bertzky, B., Shi, Y., Hughes, A., Engels, B., Ali, M.K. and Badman,
            T. (2013)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/2013-016.pdf">
                Terrestrial Biodiversity and the World Heritage List:
                Identifying broad gaps and potential candidate sites for
                inclusion in the natural World Heritage network.
              </a>
            </span>
            Gland, Switzerland and Cambridge, UK: IUCN and UN-Environment-WCMC.
            xiv + 70p. Ac-cessed on 8 October 2018 at{" "}
            <a href="https://portals.iucn.org/library/sites/library/files/documents/2013-016.pdf">
              {" "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Abdulla, A., Obura, D., Bertzky, B., Shi, Y. (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/2013-033.pdf">
                Marine Natural Heritage and the World Heritage List:
                Inter-pretation of World Heritage criteria in marine systems,
                analysis of biogeographic representation of sites, and a roadmap
                for addressing gaps.
              </a>
            </span>
            Gland, Switzerland: IUCN. xii + 52 pp. Accessed on 8 October 2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/2013-033.pdf">
              {"  "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            UN Environment-WCMC and IUCN (2016).
            <a href="https://portals.iucn.org/library/sites/library/files/documents/2013-033.pdf">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Protected Planet Report 2016.
              </span>{" "}
              Cambridge UK and Gland, Switzer-land. Accessed on 11 September
              2018 at <Icon as={LinkIcon} />
            </a>
            <br />
            (Also{" "}
            <a href="https://www.protectedplanet.net/en/resources">
              French, Spanish and Korean Version accessible at ){" "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            UN-Environment-WCMC (2017).
            <a href="http://wcmc.io/WDPA_Manual">
              <span style={{ textDecoration: "underline", color: "green" }}>
                World Database on Protected Areas User Manual 1.5.
              </span>
            </a>
            UN-Environment-WCMC: Cambridge, UK. 72 pp. Available at
            <a href="http://wcmc.io/WDPA_Manual">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Webinar Materials in English, French and Spanish:
            <a href="https://www.protectedplanet.net/c/webinar-materials">
              {" "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            The following two resources also use data from the WDPA: <br />
            <br />
            Global Forest Watch. Accessed on 12 October 2018 at{" "}
            <a href="https://www.globalforestwatch.org/">
              {" "}
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            DOPA{" "}
            <a href="http://dopa.jrc.ec.europa.eu/en">
              {" "}
              <Icon as={LinkIcon} />
            </a>{" "}
            and DOPA explorer{" "}
            <a href="https://dopa-explorer.jrc.ec.europa.eu/dopa_explorer">
              {" "}
              <Icon as={LinkIcon} />
            </a>{" "}
            (see separate factsheet)
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll6;
