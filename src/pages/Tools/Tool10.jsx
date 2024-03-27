import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll10 = (props) => {
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
            TOOL 10
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GLOBAL FOREST WATCH (GFW)
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10"></div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Global Forest Watch (partnership convened by World Resources
            Institute)
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
            Interactive online platform
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Monitoring forest change with the help of a variety of data sets and
            tools and enhancing information transfer between different actors.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The user interface of the platform is divided into four categories:{" "}
            <br /> <br />
            MAP: actual tool with seven categories of data layers <br />
            DASHBOARD: statistics of the data sets <br />
            BLOG: news about places to watch, data, GFW community and updates{" "}
            <br /> ABOUT: background information on the partnership, impacts and
            history <br /> <br />
            GFW incorporates a wide range of data sets that can be overlaid and
            compared, including: <br /> <br />
            <ul>
              <li>
                Forest change data (global tree cover loss and gain data, near
                real-time FORMA alerts for the humid tropics, SAD alerts for the
                Brazilian Amazon, quarterly vegetation change data)
              </li>
              <li>
                Forest cover data (global tree cover data, intact forest
                landscapes, and pantropical carbon density)
              </li>
              <li>Forest fire data </li>
              <li>
                Forest use data (contextual information, such as concession
                areas for natural resource extraction or agricultural
                production)
              </li>
              <li>
                Conservation data (boundaries for PAs and biodiversity hotspots)
              </li>
              <li>Qualitative and anecdotal data (such as user-submitted)</li>
              <li>
                People data (community land boundaries and land tenure rights)
              </li>
            </ul>{" "}
            <br />
            The data on GFW comes from various sources. Most of the data sets
            have been developed by governments, NGOs, research institutions or
            companies
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
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Get email alerts as forest clearings happen</li>
              <li>Upload own data sets</li>
              <li>
                Use the GFW data in communication as an additional source to the
                FAO Global Forest Resources Assessment{" "}
                <a href="https://www.fao.org/forest-resources-assessment/en/">
                  <Icon as={LinkIcon} />
                </a>
              </li>
              <li>Supply chain monitoring</li>
              <li>Land use planning and zoning</li>
              <li>
                Use data to create customized web-based or mobile applications
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
              <li>Downloading data requires a fast internet connection.</li>
              <li>
                To use the full suite of functions an up-to-date browser version
                is required.
              </li>
              <li>
                Compared to analysing data with a GIS Programme (e.g. QGIS and
                ArcGIS) required computer literacy skills are lower
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
              <li>Easy and intuitive application</li>
              <li>Consistent approach to monitor forest change globally</li>
              <li>
                High transparency due to open source code and{" "}
                <span style={{ textDecoration: "underline", color: "green" }}>
                  <a href="https://developers.globalforestwatch.org/developer-tools/?tab=code">
                    Application Programming Inteface (API)
                    <Icon as={LinkIcon} />
                  </a>
                </span>
              </li>
              <li>
                Data is downloadable and some of the datasets can be directly
                exported to ArcGIS
              </li>
              <li>
                Data and forest monitoring and alert systems can be used offline
                and in the field on a mobile device:
                <span style={{ textDecoration: "underline", color: "green" }}>
                  <a href="https://forestwatcher.globalforestwatch.org/">
                    Forest Watcher mobile app
                    <Icon as={LinkIcon} />
                  </a>
                </span>
              </li>
              <li>
                Combines data from different databases (e.g. protected planet)
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                SearchThe accuracy of the data sets displayed on GFW varies.
                Check blogs and re- views for information on how to deal with
                low accuracy.
              </li>
              <li>
                Results for forest change of different data sets can be
                contradictory. Check the method used and underlying pre-
                sumptions. How did they define forest? Based on which method did
                they detect forest change?
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.globalforestwatch.org/">
                Global Forest Watch
              </a>
            </span>
            2014. World Resources Institute. Accessed on 23.10.2018 at{" "}
            <a href="http://www.natureserve.org/sites/default/files/vista_usermanual_102213_whole.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>

        <div className="row border-color">
          <div className="col">2014 launch of GFW 2.0 </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            A selection of reviews for the tree cover data set are listed below:{" "}
            <br />
            <br />
            Bellot, F.-F., Bertram, M., Navratil, P., Siegert, F., Dotzauer, H.
            (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.forclime.org/documents/press_release/FORCLIME_Overestimation%20of%20Deforestation.pdf">
                The high-resolution global map of 21st-century forest cover
                change from the University of Maryland (‘Hansen Map’) is hugely
                overestimating deforestation in Indonesia. Indonesian-German
                Forests and Climate Change Programme (FORCLIME),
              </a>
            </span>{" "}
            Jakarta, Indonesia. 4 pp. Accessed on 23.10.2018 at
            <a href="https://www.forclime.org/documents/press_release/FORCLIME_Overestimation%20of%20Deforestation.pdf">
              {" "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Tropek, R., Sedlácˇek, O., Beck, J., Keil, P., Musilová, Z., Šímová,
            I., Storch, D. (2014).
            <a href="https://science.sciencemag.org/content/344/6187/981.4.full">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Comment on “High-reso-lution global maps of 21st-century forest
                cover change”.
              </span>
              Science Vol. 344, Issue 6187, 981 pp. Accessed on 23.10.2018 at{" "}
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Scientific publications which used data from GFW in 2017 are
            available at{" "}
            <a href="https://blog.globalforestwatch.org/gfw-community/a-year-in-review-global-forest-watch-highlights-from-2017">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            For guidance how to visualize, analyse or download data, tutorials,
            trainings, webinars and FAQ visit{" "}
            <a href="https://www.globalforestwatch.org/howto">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll10;
