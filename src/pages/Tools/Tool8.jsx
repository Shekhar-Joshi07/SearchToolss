import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

// import too7img from "./tool7img.png";

const Tooll8 = (props) => {
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
      </header>{" "}
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height">
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 8
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            SATELLITE REMOTE SENSING
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            WWF-UK
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
            OnlineGuideline including case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Getting familiar with Satellite Remote Sensing (SRS) technology, its
            applications in conservation and the resources needed for using SRS
            data
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>Introduction to SRS (key concepts, terminologies) </li>
              <li>
                Review of available SRS data, (focus open-access datasets)
              </li>
              <li>Selecting and processing SRS data </li>
              <li>Applications of SRS imagery in ecology and conservation</li>
              <li>
                Advanced SRS data types & analysis techniques (e.g. LiDAR)
              </li>
              <li>
                Limitations of SRS (data resolution, availability &
                accessibility)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Gaining an overview of current SRS technology and its potential use
            for conservation, in particular SRS-based opportunities for mapping
            and monitoring ecosystem and habitat extent and condition, species
            distri-butions, and threats to biodiversity (see Chapter 5)
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
            To use SRS for a spatial analysis, GIS expertise and interpretation
            skills are mandatory. <br />
            Technical requirements to use SRS: <br />
            <br />
            <ul>
              <li>
                Reasonably fast internet speed for downloading raw data, high
                pro-cessing power, and sufficient data storage for raw imagery
                and interme-diate and final data products.
              </li>
              <li>
                Hardware and software requirements typically increase with study
                area size, resolution and the com- plexity of analysis. Average
                scenes have file sizes of 500 MB to 1.62 GB
              </li>
              <li>
                Processing large time series of multi-scene mosaics requires
                more pro-cessing power, and in some cases may require the use of
                cloud compu-ting services (e.g. Google Earth Engine)
              </li>
              <li>
                GIS Software: commercial (e.g. ArcGIS) or open-access (e.g. QGIS
                SAGA GIS, GRASS GIS)
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
                Very detailed overview of SRS technology and its usage in
                conservation
              </li>
              <li>
                Starts with explaining basic principles e.g. those un- derlying
                remote sensing, so accessibe for every level of prior knowledge
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                The guideline is only a starting point. If one wants to use SRS
                for conservation further guidance and in some cases external
                help is needed
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col"> {/*    */}</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Pettorelli, N., Schulte to Bühne, H., Shapiro, A. C., Glover-Kapfer,
            P. (2018)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.researchgate.net/publication/324537528_Conservation_Technology_Series_Issue_4_SATELLITE_REMOTE_SENSING_FOR_CONSERVATION">
                Satellite Remote Sensing for Con-servation. WWF Conservation
                Technology Series 1(4).
              </a>
            </span>
            WWF. Accessed on 23.11.2018 at
            <a href="https://www.researchgate.net/publication/324537528_Conservation_Technology_Series_Issue_4_SATELLITE_REMOTE_SENSING_FOR_CONSERVATION">
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
            The Guideline includes case studies from Mozambique, Indonesia, the
            Arctic and the Kavango Zambezi Transfrontier Conservation Area
            (Angola, Botswana, Namibia, Zambia and Zimbabwe) and from different
            ecosystems.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Melin, M., Shapiro, A. C., Glover-Kapfer. P. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.wwf.org.uk/conservationtechnology/documents/Lidar-WWF-guidelines.pdf">
                LIDAR for ecology and conservation. WWF Conservation Technology
                Series 1(3).
              </a>
            </span>
            WWF-UK, Woking, United Kingdom. Accessed on 26.11.2018 at
            <a href="https://www.researchgate.net/publication/320347018_LiDAR_for_ecology_and_conservation_-_WWF_Conservation_Technology_Series_3">
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

export default Tooll8;
