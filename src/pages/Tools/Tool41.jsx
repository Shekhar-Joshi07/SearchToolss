import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll41 = (props) => {
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
            <h4>3.6.3 | BIODIVERSITY MONITORING AND SURVEILLANCE TOOLS</h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row  fw-bold fs-5 height" style={{ height: "80px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 41
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            SPATIAL MONITORING AND REPORTING TOOL (SMART)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2017
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            SMART Partnership
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
            Guideline and software tool, supported by training resources and
            user platform
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Planning, measuring, evaluating and improving the effectiveness of
            law enforcement patrols and site-based conservation and monitoring
            activities
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The SMART approach combines a software to design, plan, manage,
            monitor, document, analyse and report on law enforcement activities
            (patrolling) of rangers, and observations made, with site based
            protection standards and capacity building
            <br />
            <br />
            Software features:
            <br />
            <br />
            <ul>
              <li>Includes full set of mapping functions</li>
              <li>Import of information from handheld GPS devices</li>
              <li>Training manuals to enable use of software</li>
              <li>
                Support function available through “superuser” organizations
              </li>
              <li>Central server setup possible with SMART Connect</li>
              <li>
                Various links to databases on enforcement, fixed poacher
                cameras, plug-ins for designing wildlife surveys (line
                transects, point counts), plug-ins are available for increased
                functionality.
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
                Monitoring of patrolling and law enforcement by PA rangers
              </li>
              <li>
                Data collection and monitoring of infractions and other
                information relevant to management (e.g. poached carcasses)
              </li>
              <li>
                Monitoring of state of biodiversity in support of PA management
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
              <li>Strategy development</li>
              <li>Capacity development planning</li>
              <li>
                Populating higher level indicators (e.g. for PAME monitoring or
                Open Standards based adaptive management)
              </li>
              <li>CEPA</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs (system wide application possible)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Methodological guidance, software and online training resources free
            of charge. Implementation costs depend on equipment needs and scale
            of use (e.g. area to be covered).
            <br />
            <br />
            <ul>
              <li>
                Handheld GPS sets and skills to use them (for typical use).
              </li>
              <li>
                Financial resources for maintenance and replacement of equipment
              </li>
              <li>
                SMART software: standard PC (Linux/Mac or Windows), google
                drive; - shapefiles for PA boundaries
              </li>
              <li>
                General patrol capacity (including trained staff, equipment and
                infrastructure) needed to conduct law enforcement
              </li>
              <li>
                Basic capacity in use of GPS, data management and processing
              </li>
              <li>
                Solid data: SMART data analysis can only be as good as the
                quality of input data and thus processes to ensure sufficient
                data quality (incl. integrity and standardization) – species
                identification skills/resources (for biodiversity monitoring
                applications)
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
                Integration of software, standards, training materials, planning
                and evaluation functions, analysis and reporting
              </li>
              <li>
                Standardization for all aspects of law enforcement monitoring
              </li>
              <li>
                Flexibility and adaptability to speciic needs at PAs, within the
                predetermined data framework
              </li>
              <li>Extensibility through plug-ins</li>
              <li>
                Able to import legacy data, some compatibility with other syste
              </li>
              <li>Community platform for mutual learning</li>
              <li>Does not require extensive IT/GIS expertise</li>
              <li>
                Possibility to teach not only PA staff but also community
                rangers how to use SMART
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Relatively narrow focus on law enforcement and monitoring</li>
              <li>
                Has not been in use for long – limited experience of routine
                application to date
              </li>
              <li>Only flexible within the predetermined framework design</li>
              <li>
                Changes on established data models without losing data can be
                challenging
              </li>
              <li>
                Batch upload of input data only easily possible with
                CyberTracker
              </li>
              <li>
                Integration of other GIS (e.g. QGIS) and statistical (e.g. R)
                software for more advanced analysis lacking
              </li>
              <li>
                Other OpenROSA- and XLSForm-based mobile data collection tools
                (e.g. KoBo Toolbox, (geo)ODK) not supported
              </li>
              <li>
                Data security not yet addressed in SMART in spite of sensitivity
                of many SMART results
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Smart Partnership (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://smartconservationtools.org/">
                SMART (Spatial Monitoring and Reporting Tool).
              </a>
            </span>
            Website accessed on 20 November 2019 at
            <a href="http://smartconservationtools.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Version 1.0.0 released in 2013, since then continuously updated.
            Current Version 5.0.0 (2017)
            <br />
            <br />
            There is also specific guidance on SMART use in marine environments:{" "}
            <a href="http://smartconservationtools.org/wp-content/uploads/2017/11/SMART_GettingStarted2017_Marine_English_sm.pdf">
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
              <a href="http://smartconservationtools.org/wp-content/uploads/2018/05/SMART_AnnualReport_2017_FINAL_sm.pdf">
                SMART Partnership 2017 Annual Report (including short case
                studies from Philippines, Belize, Bangladesh, Kenya and
                Nigeria).{" "}
              </a>
            </span>{" "}
            32 pp. Accessed on 24 September 2018 at
            <a href="http://smartconservationtools.org/wp-content/uploads/2018/05/SMART_AnnualReport_2017_FINAL_sm.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://smartconservationtools.org/wp-content/uploads/2016/01/SMART-case-study-MWCT-Full.pdf">
                A SMART Case Study Successfully and Sustainably Implementing
                SMART in a Community Conservancy where Rangers are
                semi-illiterate (Kenya){" "}
              </a>
            </span>
            10 pp. Accessed on 24 September 2018 at
            <a href="https://panorama.solutions/en/solution/getting-se-kamchatka-ebsa-and-candidate-imma-marine-mammal-data">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Dobbelsteijn, R. (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://panorama.solutions/en/solution/integration-local-knowledge-park-management">
                Integration of local knowledge in park management. PANORAMA
                –solutions for a healthy planet.
              </a>
            </span>
            Accessed on 9 October 2018 at
            <a href="https://smartconservationtools.org/wp-content/uploads/2016/01/SMART-case-study-MWCT-Full.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Bangladesh Forest Department (2018). Report on a Seminar and
            Strategy Workshop with Senior Officials from the Bangladesh Forest
            Department on Law Enforcement Monitoring Using a SMART Approach in
            Pro-tected Areas. Dhaka (Bangladesh): Bangladesh Forest Department.
            37 PP.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Phung Ngoc Khanh (2015). Assessment of the Status Quo of SMART
            Implementation of Pilot Sites. Report. Ha Noi: Ministry of
            Agriculture and Rural Development and GIZ. 51 pp.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Phong Bui Dang, Khanh Ngoc Phung, Nguyen Ngoc Quang (2016). Pilot
            the Spatial Monitoring and Reporting Tool (SMART) in three Pilot
            Sites. Report. Ha Noi: Department of Nature Conservation, Viet Nam
            Administra-tion of Forestry and GIZ. 15 pp.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            SMART Partnership (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://drive.google.com/file/d/0B_YGOPfLceXXRVRiaWE3LVFYWWs/view">
                {" "}
                Technical Training Manual SMART 5.0.
              </a>
            </span>
            305 pp. Accessed on 8 October 2018 at
            <a href="https://drive.google.com/file/d/0B_YGOPfLceXXRVRiaWE3LVFYWWs/view">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Handbook specifically for South Asia and Southeast Asia: Bangladesh
            Forest Department, Wildlife Conser-vation Society and Deutsche
            Gesellschaft für Internationale Zusammenarbeit (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.snrd-asia.org/download/management_of_the_sundarbans_mangrove_forests_for_biodiversity_conservation_and_increased_adaptation_to_climate_change_smp/2017_12_11_Handbook_FINAL.pdf">
                Handbook for SMART Patrols in the Sundarbans Mangrove Forest of
                Bangladesh.
              </a>
            </span>
            Published by the Wildlife Conservation Society, Dhaka, Bangladesh.
            205 pp. Accessed on 1 November 2018 at
            <a href="https://www.snrd-asia.org/download/management_of_the_sundarbans_mangrove_forests_for_biodiversity_conservation_and_increased_adaptation_to_climate_change_smp/2017_12_11_Handbook_FINAL.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Example of language conversion (to Vietnamese): Noi The Nghiep
            2016). Language converting and updating list of of faunal and floral
            species in SMART software. Report. Ha Noi: VNForest and GIZ. 18 pp.
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://smartconservationtools.org/materials/">
                Further materials
              </a>
            </span>
            (Guides, Brochures,) in different languages (English, Spanish,
            French, and some in Mongo-lian, Farsi) are available a
            <a href="http://smartconservationtools.org/materials/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll41;
