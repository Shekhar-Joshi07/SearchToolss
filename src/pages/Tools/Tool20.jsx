import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll22 = (props) => {
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
              <h3>Category 3.3 - MANAGEMENT PLANNING</h3>
            </div>
            <h4>3.3.2 | SPECIFIC PLANNING TO0LS</h4>
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
            TOOL 22
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            SUSTAINABLE TOURISM IN PROTECTED AREAS: GUIDELINES FOR PLANNING AND
            MANAGEMENT
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2002
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN WCPA
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
            Guideline including toolbox
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Support to PA managers and other stakeholders (including the tourism
            industry) in the planning and sustainable management of visitor
            recreation in and around PAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guidelines document covering the following key issues:
            <br />
            Issues that are specifically addressed in MARISCO, in contrast to
            the CMP Open Standards:
            <ul>
              <li>Principles for tourism in PAs</li>
              <li>Planning for tourism in PAs </li>
              <li>Sensitive development of infrastructure and services</li>
              <li>
                Principles of visitor management, health and safety management,
                and existing frameworks to these
              </li>
              <li>Visitor management “toolbox”</li>
              <li>Economics and financial aspects of tourism in PAs</li>
              <li>Human resources planning for tourism in PAs</li>
              <li>Monitoring</li>
              <li>
                Appendix D contains a comparison of five visitor management
                frameworks, including Limits of Acceptable Change (LAC), Visitor
                Impact Management (VIM), Visitor Experience and Resource
                Protection (VERP), Visitor Activity Management Process (VAMP),
                and The Recreation Opportunity Spectrum (ROS)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <li>
              Guidance to planning and development of tourism infrastructure and
              services in PAs
            </li>
            <li>
              Definition, measurement, management and use of park tourism data
            </li>
            <li>
              Initiatives to enhance the quality of the tourism experience in
              PAs
            </li>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Identification and use of opportunities through which tourism
                can effectively contribute to the conservation of natural and
                cultural diversity, as well as the development of nearby
                communities
              </li>
              <li>
                Decision making as to whether ecological restoration is a
                promising approach in a given situation
              </li>
              <li>Academic teaching</li>
              <li>
                Development and implementation of monitoring and evaluation
                programmes in protected areas
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs and PA systems</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>Depends on specific context of use.</ul>{" "}
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
                Broad, principles based approach which is applicable in many
                different settings{" "}
              </li>
              <li>
                Wide geographical range of examples and case studies from which
                good practice has been extracted{" "}
              </li>
              <li>
                Numerous step-by-step instructions on specific aspects of
                tourism planning and manag
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Impact of guidelines on PA tourism practice poorly documented
                and unclear
              </li>
              <li>
                While there is explicit discussion on PA tourism also in other
                governance types, the main focus of the guidelines appears to be
                on tourism in state-managed PAs. This may be increasingly narrow
                as the actual range of PAs diversifies further.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="col">
          Eagles, P. F. J., S. F. McCool, C. D. A. Haynes (2002).
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://portals.iucn.org/library/efiles/documents/PAG-008.pdf">
              Sustainable Tourism in Protected Areas: Guidelines for Planning
              and Management.
            </a>
          </span>
          Gland, Switzerland and Cambridge, UK: IUCN. xv + 183pp. Accessed on 8
          October 2018 at
          <a href="https://portals.iucn.org/library/efiles/documents/PAG-008.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            A wide range of – usually short - case studies and examples are
            interspersed with the guidelines text, including from Belize,
            Bolivia, Costa Rica, Ecuador, Ghana, Indonesia, the Maldives, Nepal,
            Rwanda, the Solomon Islands, St. Lucia, Tanzania and Zimbabwe.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Numerous additional resources on specific aspects of tourism in PAs
            are referenced in the guidelines. <br />
            <br />
            Leung, Y.-F., Spenceley, A., Hvenegaard, G., Buckley, R. (eds.)
            (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/node/47918">
                Tourism and visitor management in protected areas: Guidelines
                for sustainability. Best Practice Protected Area Guidelines
                Series No. 27,
              </a>
            </span>
            Gland, Switzerland: IUCN. xii + 120 pp. . Accessed on 21. February
            2019 at{" "}
            <a href="https://portals.iucn.org/library/node/47918">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll22;
