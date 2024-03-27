import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll19 = (props) => {
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
            TOOL 19
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            ECOLOGICAL RESTORATION FOR PROTECTED AREAS (IUCN GUIDELINES)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2012
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
            Guideline including case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Guidance for terrestrial, marine, and freshwater protected area
            managers at both system and site levels on the restoration of
            natural and associated values of PAs.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline including the following core chapters
            <br />
            Issues that are specifically addressed in MARISCO, in contrast to
            the CMP Open Standards:
            <ul>
              <li>Instructions how to use guidelines</li>
              <li>
                Introduction to key concepts relating to restoration and
                protected area management and explanation of when and where
                restoration might be the best option
              </li>
              <li>
                Principles and guidelines for restoration to help in setting
                restoration policies, goals, and objectives, and in
                implementation. The aim is to encourage consistency with
                underlying principles, while allowing for biome-, site- or
                issue-specific variation in implementation.
              </li>
              <li>
                Analysis of global experience to identify best practice methods
                and techniques for restoration projects
              </li>
              <li>
                Seven-phase framework/approach for ecological restoration for
                protected areas
              </li>
              <li>Case studies</li>
            </ul>
            References, bibliography (further reading), glossary, and an
            appendix listing “best practices” provided at the end of the
            document
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Design and planning of ecological restoration projects/activities at
            the individual PA or PA system level
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Evaluation of ongoing ecological restoration projects</li>
              <li>
                Decision making as to whether ecological restoration is a
                promising approach in a given situation
              </li>
              <li>Academic learning</li>
              <li>Academic learning</li>
              <li>CEPA</li>
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
            <ul>
              <li>
                Implementation costs for concrete restoration projects vary
                depending on scale and nature of project, but in many
                restoration projects can be considerable
              </li>
            </ul>{" "}
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
                Well-founded general principles and broad approach with wide
                applicability across systems and geographic areas
              </li>
              <li>
                ludes a stepwise approach to ecological restoration projects
              </li>
              <li>Good documentation and bibliographic information</li>
              <li>Wide range of case studies</li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                elatively general nature of guidelines, which means that
                typically there will be a need to consult extensive additional
                guidance on appropriate restoration approaches, methods and
                tools in each individual case
              </li>
              <li>
                Relatively new and its usefulness in practice not fully proven
                yet
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Keenleyside, K. A., N. Dudley, S. Cairns, C. M. Hall, S. Stolton
            (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/PAG-018.pdf">
                {" "}
                Ecological Restoration for Protected Areas: Principles,
                Guidelines and Best Practices
              </a>
            </span>{" "}
            Gland, Switzerland: IUCN. x + 120pp. Accessed on 10 Octo-ber 2018 at
            <a href="https://portals.iucn.org/library/efiles/documents/PAG-018.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Chapter 6 of the guidelines includes 12 case studies, including from
            Madagascar, Mexico, Mauritania, Brazil and Iraq
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            A list of Related resources (further reading) is included in the
            guidelines document. <br />
            <br />
            Beatty, C.R., Cox, N. A., and M. E. Kuzee (2018)
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              <a href="https://portals.iucn.org/library/node/47713">
                Biodiversity guidelines for forest landscape restoration
                oppor-tunities assessments. First edition.
              </a>
            </span>{" "}
            Gland, Switzerland: IUCN. v + 43pp. Accessed on 24.10.2018 at{"  "}
            <a href="https://portals.iucn.org/library/node/47713">
              <Icon as={LinkIcon} /> (available in English, French, Spanish,
              Portuguese and Russian)
            </a>
          </div>
        </div>
        <div className="col">
          McDonald, T., Gann, G.D., Jonson, J., Dixon, K.W. (2016)
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://www.ser.org/page/SERStandards/International-Standards-for-the-Practice-of-Ecological-Restoration.htm">
              International standards for the practice of ecological restoration
              – including principles and key concepts.
            </a>
          </span>
          Society for Ecological Restoration, Washington, D.C.
          <a href="https://www.ser.org/page/SERStandards/International-Standards-for-the-Practice-of-Ecological-Restoration.htm">
            <Icon as={LinkIcon} />
          </a>
          (available in English, Spanish, Portuguese, Arabic, Korean and French)
        </div>
        <div className="col">
          IUCN and WRI (2014).
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://portals.iucn.org/library/node/46351">
              A guide to the Restoration Opportunities Assessment Methodology
              (ROAM): Assessing forest landscape restoration opportunities at
              the national or sub-national level. Working Paper (Road-test
              edition).{" "}
            </a>
          </span>
          Gland, Switzerland: IUCN. 125pp. Accessed on 25.10.2018 at
          <a href="https://portals.iucn.org/library/node/46351">
            <Icon as={LinkIcon} />
          </a>
          (available in English, Spanish, French, Portuguese, Russian,
          Indonesian)
        </div>
      </div>
    </>
  );
};

export default Tooll19;
