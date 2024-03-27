import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll48 = (props) => {
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
            <h4>3.7.2 | COLLABORATIVE MANAGEMENT / SHARED GOVERNANCE</h4>
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
            TOOL 48
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            SHARING POWER – A GLOBAL GUIDE TO COLLABORATIVE MANAGEMENT OF
            NATURAL RESOURCES{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2004
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IIED, IUCN and partners{" "}
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
            Guideline including tool descriptions and case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Supporting co-management practitioners in understanding,
            establishing and further developing collaborative management of
            natural resources in a “learning by doing” approach. It includes
            practical guidance and tools on how to organise, negotiate and
            implement co-management agreements.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The guideline is divided into four parts and eleven chapters:
            <br />
            Part I. Towards a contextual framework
            <br />
            <ol>
              <li>
                Managing natural resources: a struggle between politics and
                culture (introduction of the different interests towards natural
                resource use)
              </li>
              <li>
                Actors, entitlements and equity in natural resource management
                (description of actors and associated rights)
              </li>
              <li>
                Co-management of natural resources (characteristics of
                co-management){" "}
              </li>
              <br />
              Part II. Towards effective processes
              <br />
              <li>
                A point of departure (identification of feasibility for
                collaboration)
              </li>
              <li>
                Preparing for the partnership (organisational aspects before the
                start of the negotiations)
              </li>
              <li>
                Negotiating the co-management agreement and organisation
                (agreeing rules and procedures and managing the negotiation
                process)
              </li>
              <br />
              Part III. Towards effective institutions
              <br />
              <li>
                Co-management agreements (forms and functions of agreements)
              </li>
              <li>
                Co-management organisations (types and characteristics of
                organ-isations)
              </li>
              <li>
                Learning-by-doing in co-management institutions (flexible
                procedures to ensure successful co-management)
              </li>
              <br />
              Part IV. Towards an enabling social context
              <li>
                Natural resource policy and instruments (features of a
                supportive policy environment)
              </li>
              <li>
                Empowering civil society for policy change (possibilities for
                civil participation)
              </li>
            </ol>
            <br />
            Each chapter encompasses multiple case studies, amounting to 121 in
            total both from the global South and North. Chapters 2, 4–7, 9–11
            also include 31 practical checklists on specific aspects of
            co-management.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Establishing new arrangements for co-management of natural
                resources
              </li>
              <li>
                Reviewing and adapting existing co-management arrangements
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
                Informing development of policy and legal frameworks on
                co-management of natural resources
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Not specific to PAs but can be applied to PAs at the site level
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Skills and resources required for applying the tools presented
                vary.
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
                Builds on vast practical knowledge on co-management processes
                (predominantly in PAs) around the world
              </li>
              <li>Offers a wealth of illustrative examples</li>
              <li>
                Provides guidance for stepwise processes and checklists for
                practitioners
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                The comprehensiveness and wealth of information can be
                overwhelmin
              </li>
              <li>
                Although the processes and approaches described are still
                pertinent to any co-management arrangement, they may not fully
                reflect more recent developments in conservation policy.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Borrini-Feyerabend, G., Pimbert, M., Taghi Farvar, M., Kothari, A.,
            Renard, Y. (2007).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://mia.giz.de/qlink/ID=180547000">
                Sharing Power. A global guide to collaborative management of
                natural resources. The International Institute for Environment
                and De-velopment (iied), The World Conservation Union (IUCN),
                The IUCN Commission on the Environmental, Economic and Social
                Policy (CEESP), The CEESP Collaborative Management Working Group
                (CMWG), Centre for Sustaina-ble Development (CENESTA).
              </a>
            </span>{" "}
            UK and USA: Earthscan. 473 pp.
            <a href="https://mia.giz.de/qlink/ID=180547000">
              <Icon as={LinkIcon} />
            </a>
            Accessed on 18 April 2019.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>First edition (2004)</li>
              <li>Second edition (2007) as Earthscan publication</li>
              <li>Published ebook (2013)</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            The majority of the 121 case studies are situated in PAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Beltrán, J. (2000).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/node/7806">
                Indigenous and traditional peoples and protected areas:
                principles, guidelines and case studies.
              </a>
            </span>
            Gland, Switzerland: IUCN, 2000. xi, 133pp. Accessed on 5 April 2019
            at
            <a href="https://portals.iucn.org/library/node/7806">
              <Icon as={LinkIcon} /> (2,17 MB)
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Borrini-Feyerabend, G., A. Kothari, G. Oviedo (2004).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://cmsdata.iucn.org/downloads/pag_011.pdf">
                Indigenous and Local Communities and Protected Areas: Towards
                Equity and Enhanced Conservation.
              </a>
            </span>
            Gland, Switzerland and Cambridge, UK: IUCN. xviii + 111 pp. Accessed
            on 5 October 2018 at
            <a href="https://www.iucn.org/content/indigenous-and-local-communities-and-protected-areas-towards-equity-and-enhanced-conservation">
              <Icon as={LinkIcon} />
            </a>
            (2,24 MB)
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll48;
