import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll15 = (props) => {
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
            <h4>3.3.1 | GENERAL</h4>
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
            TOOL 15
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            <a href="https://www.iucn.org/content/guidelines-applying-protected-area-management-categories-0">
              IUCN GUIDELINES FOR APPLYING PROTECTED AREA MANAGEMENT CATEGORIES
            </a>
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2013
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
            Guideline and methodology
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Categorization of PAs according to IUCN system based on manage-ment
            objective and governance type.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guidelines document consisting of eight chapters, appendix and
            references; key content includes: <br />
            <br />
            <ul>
              <li>Explanation of IUCN PA definition</li>
              <li>
                Definition and explanation of the seven IUCN PA categories
                including primary and other objectives, dis- tinguishing
                features, role in the landscape/seascape, differential
                diagnosis, issues for consideration
              </li>
              <li>
                Definition of PA governance types and discussion of their
                relationship with each other and with PA man- agement categories
                (“governance matrix”)
              </li>
              <li>Guidance on applying and using the categories</li>
              <li>
                Short discussion of some international PA designations (Ramsar
                sites, World Heritage sites) and their relationship to the
                category system
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
                PA and PA system planning and policy, particularly
                (re-)assignment of IUCN PA categories to new or existing PAs
              </li>
              <li>Climate change adaptation planning</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Monitoring and evaluation</li>
              <li>
                Reporting, e.g. on implementation of international PA related
                commitments, or at the national level
              </li>
              <li>CEPA</li>
              <li>Allocation of PA related funding</li>
              <li>
                Various additional specialized uses are discussed in Chapter 6
                of the document
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PAs and PA systems</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Information about management objectives of PAs to be categorized
              </li>
              <li>
                Knowledge and understanding of the values, management and
                governance of the PA (system) in question
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
              <li>Wide applicability</li>
              <li>
                Long-standing, widely accepted approach to PA categorization
              </li>
              <li>
                Focus on management objective – no judgement of relative
                importance of categories allows for comprehensive, well-balanced
                PA systems.
              </li>
              <li>Clear guidance on category assignment and use</li>
              <li>
                Can be combined with independent categorization based on
                governance type
              </li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Terminological confusion is possible where national categories
                have the same names but are defined differently than according
                to the IUCN rules
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Dudley, N. (Editor) (2008).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-021.pdf">
                Guidelines for Applying Protected Area Management Categories.
              </a>
            </span>
            Gland, Switzer-land: IUCN. x + 86pp. WITH Stolton, S., P. Shadie and
            N. Dudley (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-021.pdf">
                IUCN WCPA Best Practice Guidance on Recognising Protected Areas
                and Assigning Management Categories and Governance Types: Best
                Practice Protected Area Guidelines Series No. 21:
              </a>
            </span>{" "}
            Gland, Switzerland: IUCN. Xx pp. Accessed on 8 October 2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-021.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Earlier versions approved 1978, 1994. Published in 2008 and
            re-published in 2013 with additional documentation
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            A review of the history and effectiveness of the IUCN PA categories
            is included in Chapters 1 and 8 of the Guidelines
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The IUCN PA categories have been applied in many countries with the
            support of development cooperation organizations, but few examples
            that focus specifically on the categorization aspect are available.{" "}
            <br />
            <br /> Some examples – including from a development cooperation
            context – are mentioned throughout the guide-lines document.
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Govan, H., Jupiter, S. (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://parksjournal.com/wp-content/uploads/2013/04/PARKS-19.1-Govan-Jupiter-10.2305IUCN.CH_.2013.PARKS-19-1.HG_.en_.pdf">
                Can the IUCN 2008 protected areas management categories support
                pacific island approaches to conservation? PARKS Vol 19.1.
              </a>
            </span>{" "}
            Accessed at 10 September on
            <a href="https://parksjournal.com/wp-content/uploads/2013/04/PARKS-19.1-Govan-Jupiter-10.2305IUCN.CH_.2013.PARKS-19-1.HG_.en_.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Day J., N. Dudley , M. Hockings, G. Holmes, D. Laffoley, S. Stolton,
            S. Wells (2012). S
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              <a href="http://cmsdata.iucn.org/downloads/uicn_categoriesamp_eng.pdf">
                Guidelines for applying the IUCN Protected Area Management
                Categories to Marine Protected Areas.
              </a>
            </span>{" "}
            Gland, Switzerland: IUCN. 36pp. Accessed on 8 October 2018 at{" "}
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-019-2nd%20ed.-En.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll15;
