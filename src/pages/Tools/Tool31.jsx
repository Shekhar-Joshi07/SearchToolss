import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll31 = (props) => {
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
            TOOL 31
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            A GLOBAL REGISTER OF COMPETENCES FOR PROTECTED AREA PRACTITIONERS{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2016
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
            Includes: guideline, manual and tool
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Promote and improve the professionalization of protected area
            management and the performance of protected area organisations and
            personnel
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The publication is divided into four parts:
            <ol>
              <li> Background and overview</li>
              <li> The competence register explained</li>
              <li> How to use the competence register </li>
              <li>The competence register</li>
            </ol>
            The competence register is a list of 300 skills and competences
            regularly required in protected areas and in associated work around
            the world. These are organized in 15 categories within three groups:
            <ol>
              <li>Planning, management and administration</li>
              <li> Applied protected area management</li>
              <li> General personal competences</li>
            </ol>
            For each competence, specific needs are described for four staff
            levels of PA practitioners from “Executive” to “Senior Manager”,
            “middle manager/technical specialist” and “Skilled Worker”. Some
            competences are only relevant to some levels.
            <br />
            <br />
            The competence register is available in three forms
            <ul>
              <li>
                A pdf that includes the full Register, an overview of the
                competence based approach and a detailed guide on how to use the
                register{" "}
              </li>
              <li>
                An Excel Workbook , which includes all the competences and
                supporting material and enables users to search, copy, sort and
                adapt the competences to their own needs.{" "}
              </li>
              <li>A printed version</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              At PA management level it can support anyone involved in managing
              protected areas (senior officials, site staff, local communities,
              NGOs, trainers and educators as well as project staff):
              <li>To plan and manage staffing of protected areas</li>
              <li>
                To build and asses the actual skills, knowledge and personal
                qualities required by managers, staff and stewards of protected
                and other conserved areas
              </li>
              <li>
                To guide, inspire and recognise better practice and performance
                in protected area management.
              </li>
            </ul>
            In detail, the guidebook can be used for:
            <ul>
              <li>
                Developing national occupational definitions and standards
              </li>
              <li>Preparing job descriptions and support staff recruitment</li>
              <li>Designing and reorganising staffing structures</li>
              <li>
                Assessing current skills and competences and identifying
                priority needs for capacity development
              </li>
              <li>
                Identifying capacity development needs for implementing
                management plans and projects
              </li>
              <li>Designing training curricula and courses</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <ul>
                <li>Assessing and certifying competence</li>
                <li>
                  Designing internal capacity development strategies and plans
                </li>
                <li>
                  Ensuring that projects investing in capacity development
                  reflect local priorities and needs
                </li>
                <li>
                  Widening access to capacity development and protected area
                  work
                </li>
                <li>
                  Providing evidence to support arguments for mobilising
                  (external) support for protected areas
                </li>
                <li>
                  Cross-referencing the competences to other protected area and
                  conservation support tools
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Different levels of application, typically at a single PA, but can
            be used for a system of PAs (e.g. when reorganising or recruiting
            staff), and for personnel at the local up to the national level
            (e.g. when assessing competences or developing national occupational
            definitions and standards)
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            The skills and resources required depend on the purpose of use.{" "}
            <br />
            <br />
            For example, for competence assessment the main tool is the excel
            worksheet. For its application, a computer and intermediate computer
            literacy is required.
            <br />
            <br />A competence assessment consists of two main steps:
            <ol>
              <li>
                Creating a job profile based on areas of responsibility for the
                position in question
              </li>
              <li>
                Identifying relevant tasks and evaluating individual competences
                for their realisation{" "}
              </li>
            </ol>
            Depending on the complexity of the position (field of work, tasks)
            and the familiarity of the evaluated person with
            assessments/questionnaires the steps ca
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
                Can be flexibly adapted and used according to local needs,
                contexts, working practices and cultures{" "}
              </li>
              <li>Can be used at different levels of detail </li>
              <li>Low cost</li>
              <li>
                Provides guidance for every field of application (see typical
                and additional potential uses)
              </li>
              <li>
                The Excel Workbook includes assessment and certification
                examples for every competence.{" "}
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            As the tool is intended to be applicable in a wide range of
            contexts, the formulation of the competences and examples provided
            require a certain ability of abstract thinking to be able to adapt
            them to the specific context and may need translation into
            context-specific terms by a facilitator during the assessment.
            <br />
            <br />
            Currently the tool is available only in English and French; due to
            the rather technical vocabulary, its application might be
            challenging for people without a good command of one of these
            languages.
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Appleton, M.R. (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PATRS-002-En.pdf">
                A Global Register of Competences for Protected Area
                Practitioners.
              </a>
            </span>
            Gland, Switzerland: IUCN. 169 pp. Accessed on 13 September 2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PATRS-002-En.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Appleton, M.R. (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PATRS-002-En%20Wrkbk.xlsx">
                A Global Register of Competences for Protected Area
                Practitioners. Excel Workbook.
              </a>
            </span>
            IUCN, Gland, Switzerland. Accessed on 14 September 2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PATRS-002-En%20Wrkbk.xlsx">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Appleton, M. R., Toussaint, A., Daltry, J.C. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://npshistory.com/newsletters/parks/parks-2302.pdf#page=51">
                From forestry to protected area and ecosystem management:
                organisational change in Saint Lucia, West Indies. PARKS Vol.
                23.2.
              </a>
            </span>
            51-62 pp. Accessed on 13 September 2018 at
            <a href="http://npshistory.com/newsletters/parks/parks-2302.pdf#page=51">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            A collection of useful references is available in the annex of the
            publication. <br />
            <br />
            IUCN-WCPA. (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/Rep-2015-005.pdf">
                Strategic framework for capacity development in protected areas
                and other conserved territories 2015 – 2025.
              </a>
            </span>
            IUCN, Gland, Switzerland. 24 pp. Accessed on 14 September 2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/Rep-2015-005.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Kopylova, S. L., Danilina N. R. (Editors) (2011).
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

        <div className="row border-color">
          <div className="col">
            The competences can be cross-referenced with various widely used
            plans and tools that support the improvement of protected area
            standards. For example with the Management Effectiveness Tracking
            Tool (METT) as it includes assessments on thirty management issues.
            METT measures performance of protected area organisations rather
            than individual competence, but as discussed in Part 1 of the
            guideline there is a correlation between good staff skills and good
            METT scores.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll31;
