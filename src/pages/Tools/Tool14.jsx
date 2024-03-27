import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";

import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";
const Tooll14 = (props) => {
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
            TOOL 14
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            IUCN WCPA GUIDELINES FOR MANAGEMENT PLANNING OF PROTECTED AREAS
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2003
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
            Guideline
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            General guidance on PA management planning.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Consists of explanations on background, prerequisites for PA
            management planning, guidance on 13 plan-ning steps and
            participation, and a discussion of management planning for
            particular international designa-tions of PAs, as well as
            abbreviated planning approaches. <br />
            <br />
            Management planning steps: <br />
            <ol>
              <li>Pre-planning</li>
              <li>
                Data collection, background research and initial field work
              </li>
              <li>Evaluation of information</li>
              <li>Identification of constraints, opportunities and threats</li>
              <li>Development of management vision and objectives</li>
              <li>Identification of management options (including zoning)</li>
              <li>Drafting of plan</li>
              <li>
                Public consultation, including public exhibition of draft plan
              </li>
              <li>Revision of draft management plan</li>
              <li>Approval</li>
              <li>Implementation</li>
              <li>Monitoring and review</li>
              <li>Decision to review and update plan</li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Participatory management planning – typically implemented through
            more specific methods and tools
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Participatory planning of area based conservation measures
                outside PAs
              </li>
              <li>Updating of PA management plans</li>
              <li>
                Review and assessment of existing PA management frameworks and
                plans at the system level
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs or PA systems</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            None. General PA management planning capacity and mandate needed for
            putting guidelines into practiceCosts for implementation vary
            depending on scale of project. For typical implementation, the
            capacity to conduct participatory planning workshops and to produce
            complex documents with visual content is necessary.
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
                Broad, general, widely accepted and widely applicable approach
              </li>
              <li>
                Compatible with or underlying most more specific PA management
                planning approaches, methods and tools
              </li>
              <li>Emphasis on participatory approach</li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Lack of specific guidance on management planning</li>
              <li>Relatively weak on operational and financial planning</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Thomas, L., J. Middleton (2003).
            {/*    */}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/efiles/documents/PAG-010.pdf">
                Guidelines for Management Planning of Protected Areas.
              </a>
            </span>{" "}
            Gland, Switzerland and Cambridge, UK: IUCN. ix + 79pp. Accessed on
            21 April 2015 at{" "}
            <a href="https://portals.iucn.org/library/efiles/documents/PAG-010.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Spoelder, P., M. Lockwood, S. Cowell, P. Gregerson, A. Henchman
            (2015) Planning. In: Worboys, G. L., M. Lockwood, A. Kothari, S.
            Feary, I. Pulsford (Eds.): Protected Area Governance and Management.
            pp. 381– 412. Canberra: ANU Press.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The IUCN WCPA PA management planning guidelines underpin most PA
            management processes for PAs, at least to some extent, including in
            the development cooperation context. However, they are so general
            that they are often not cited specifically in relation to site-level
            processes. There are some examples which refer to the guidelines,
            however, for instance: <br /> <br /> Hossain Chowdhury, M. S. (Ed.)
            (2014).{" "}
            <b>
              Forest Conservation in Protected Areas of Bangladesh. Policy and
              Community Development Perspectives. World Forests No. 20.
            </b>{" "}
            Cham, Heidelberg, New York, Dordrecht, London: Springer. 258 pp
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Rizk, C., Semelin, J., Karibuhoye, C. (2011).{" "}
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              <a href="http://aires-marines.uqar.ca/39/">
                Methodological Guidebook for Development of Management Plans for
                Marine Protected Areas in West Africa.
              </a>
            </span>{" "}
            FIBA, Fondation internationale du Banc d'Arguin. 79 pp.{" "}
            <a href="https://aires-marines.uqar.ca/39/">
              <Icon as={LinkIcon} />
            </a>
            <br />
            <br />
            Also Available in French{" "}
            <a href="https://aires-marines.uqar.ca/37/">
              <Icon as={LinkIcon} />
            </a>{" "}
            and Portugese{" "}
            <a href="https://aires-marines.uqar.ca/38/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Idle, E.T., Bines, T.J.H. (2005)
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              Management planning for protected areas: a guide for practitioners
              and their bosses. Eurosite Project.
            </span>{" "}
            Accessed on 22 February 2019
            <a href="https://www.darwininitiative.org.uk/documents/10008/4738/10-008%20Management%20Planning%20for%20PAs.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Amer, W., Ashong, S., Tiomoko, D. (2015):
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              Management Manual for UNESCO Biosphere Reserves in Africa. A
              practical guide for managers. German Commission for UNESCO.
            </span>{" "}
            Accessed on 22 February 2019.
            <a href="https://www.unesco.de/sites/default/files/2018-01/Manual_BR_Africa_en-1.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll14;
