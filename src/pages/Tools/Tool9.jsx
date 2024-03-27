import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll9 = (props) => {
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
            TOOL 9
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            EARTHEXPLORER (EE){" "}
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10"></div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            US Geological Survey
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
            Online data platform
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Search, download, and order satellite images (particularly from
            Land-sat-9 and Sentinel-2), aerial photographs, and cartographic
            products.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Searchable repository of imagery from Landsat and Sentinel missions
            and a variety of other data providers, MODIS land data products from
            the NASA Terra and Aqua missions, and ASTER level-1B data products
            over territories from the NASA ASTER mission. <br />
            <br />
            Registered users of EE have access to more features than guest
            users. <br />
            <br />
            Searchable based on map, coordinates or place names. Metadata about
            the sources listed are also provided
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Acquiring maps to get a general overview of an area</li>
              <li>
                Sourcing base layers for GIS mapping in PA system planning, gap
                analysis etc.
              </li>
              <li>
                Identifying pressures from infrastructure development etc.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PA or PA system level</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                For details on requirements for using Satellite imagery and for
                guidance on its use in conservation see Satellite remote sensing
                for conservation.
              </li>
              <li>
                Skills and resources required for acquiring maps are modest:
                Only moderate computer literacy and a personal computer with
                internet access is needed.
              </li>
              <li>
                More specialist skills (GIS, spatial conservation planning
                tools, processing and interpretation of satellite images) are
                needed to make the most of the available resources in the
                context of PA system planning and gap analysis
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
                Largest openly accessible repository of free satellite and
                aerial imagery worldwide
              </li>
              <li>
                Comes with extensive help documentation (see related resources)
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Search function is not fully self-explanatory</li>
              <li>Uneven geographical coverage of the imagery available</li>
              <li>
                Process for ordering free imagery complicated in some cases
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <a href="https://earthexplorer.usgs.gov/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>

        <div className="row border-color">
          <div className="col">Continually updated</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            USGS (2013):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://earthexplorer.usgs.gov/documents/helptutorial.pdf">
                Earth Explorer Help Documentation.
              </a>
            </span>
            Accessed on 1 October 2018
            <a href="https://earthexplorer.usgs.gov/documents/helptutorial.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            {/*    */}
            Brink, A., J. Martínez-López, Z. Szantoi, P. Moreno-Atencia, A.
            Lupi, L. Bastin, G. Dubois (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://dx.doi.org/10.3390/rs8100862">
                Indicators for assessing habitat values, pressures and threats
                for protected areas – an integrated habitat and land cover
                change approach for the Udzungwa Mountains National Park in
                Tanzania. Remote Sensing 8(10):
              </a>
            </span>
            862. Accessed on 2 October 2018 at
            <a href="http://dx.doi.org/10.3390/rs8100862">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Online information and help desk:{" "}
            <a href="https://ec.europa.eu/jrc/en/contact/form?t=1036">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Information on the Indicators used in DOPA Explorer 3.0 visit{" "}
            <a href="https://dopa.jrc.ec.europa.eu/en/factsheets">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            eConservation is a spatial database of conservation (and related
            projects) which is based on DOPA. It is currently available as beta
            version. URL:{" "}
            <a href="https://dopa.jrc.ec.europa.eu/en/applications?qt-applications_qt=1#qt-applications_qt">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll9;
