import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll32 = (props) => {
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
              <h3>Category 3.5 - CAPACITY DEVELOPMENT</h3>
            </div>
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
            TOOL 32
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            PROTECTED AREA STAFF TRAINING: GUIDELINES FOR PLANNING AND
            MANAGEMENT
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2011
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
            Purpose
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            Guideline including case studies, method descriptions and templates
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Guidance on how to raise the capacity of PA managers to adapt to new
            challenges, using innovative and creative approaches, as well as
            guidance on developing and managing PA training centres.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of summary, introduction, nine core
            sections, conclusions, six appendices (including templates for
            assessments of needs and participant satisfaction) and references.
            <br />
            <br />
            Core sections:
            <ol>
              <li>
                Training PA staff: A way of increasing PA management efficiency
              </li>
              <li>Training needs assessments: Approaches and results</li>
              <li>
                PA training centres around the world: International review of
                training opportunities for PA staff
              </li>
              <li>Strategic and business planning for training centres</li>
              <li>Networking mechanisms between training centres</li>
              <li>
                How to create a positive “group climate”? Psychological aspects
                of successful training programmes
              </li>
              <li>
                How to organize space and time: Delivery of practice-oriented
                training
              </li>
              <li>Monitoring and evaluation of training effectiveness</li>
              <li>
                Certification and accreditation in PA staff training: Some
                questions to consider
              </li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Guidance on establishing and running PA training centres</li>
              <li>
                Guidance on design, planning, implementation and evaluation of
                PA-related training courses
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
                Assessment and evaluation of existing training centres/courses
              </li>
              <li>General learning</li>
              <li>
                Project development in the sphere of PA training, including
                specific aspects, such as training needs analysis
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

        <div className="row border-color ">
          <div className="col">
            Involvement with PA staff training <br />
            <br />
            The guidelines are most relevant to organizations with a mandate and
            capacity (staff, venue, equipment, financial resources etc.) to run
            PA-related training programmes. Implementation costs depend on
            specific situation
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
                Covers both training centre development and training courses in
                general
              </li>
              <li>
                Detailed how-to approach to PA related training, including
                “soft” but crucial aspects such as creating a good working
                atmosphere
              </li>
              <li>
                Many (if often rather short) case studies and practice examples
              </li>
              <li>Inclusion of templates for various assessment forms</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Limited suggestions on skills and competences in need of
                training (but approaches how to determine those are provided)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Kopylova, S. L., N. R. Danilina (Editors) (2011).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-017.pdf">
                Protected Area Staff Training: Guidelines for Planning and
                Management.
              </a>
            </span>
            Gland, Switzerland: IUCN. xiv + 102 pp. Accessed on 17 September
            2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-017.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>
        <div className="row border-color">
          <div className="col">
            39 case studies (including from South East Asia, southern Africa,
            Belize, Costa Rica, India, Kazakhstan) are included in the guideline
            document.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            WildTeam (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://docs.wixstatic.com/ugd/61e1ac_80202ace6b604ec494bf263f4c9a5824.pdf">
                Delivering Training Workshops for Wildlife Conservation
              </a>
            </span>
            <a href="https://docs.wixstatic.com/ugd/61e1ac_80202ace6b604ec494bf263f4c9a5824.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            v1. WildTeam , Cornwall, UK.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll32;
