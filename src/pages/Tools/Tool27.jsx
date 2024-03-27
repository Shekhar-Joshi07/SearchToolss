import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll27 = (props) => {
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
              <h3>Category 3.4 - PROTECTED AREA FINANCING</h3>
            </div>
            <h4>3.4.4 | SPECIFIC FINANCING INSTRUMENTS</h4>
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
            TOOL 27
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            PAYMENTS FOR ECOSYSTEM SERVICES (PES): BEST PRACTICE GUIDE
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2013
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Department for Environment, Food and Rural Affairs (UK){" "}
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
            Guideline including case studies.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            This guide is intended to support the design and implementation of
            Payments for Ecosystem Services (PES) schemes.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The guide is aimed at the key participants in a PES scheme (e.g.
            buyers and sellers of ecosystem services, the brokers or
            intermediaries that can facilitate scheme delivery, and the wide
            range of actors who can support the emergence of PES schemes, for
            example, scientists, regulators and planners) The Guide is divided
            into three parts:
            <ol>
              <li>
                {" "}
                Introduces PES including the key principles and concepts which
                under-pin scheme development, and provides a useful resource for
                those seeking an overview
              </li>
              <li>
                {" "}
                Step-by-step advice on designing and implementing PES schemes
                with references to case studies:
              </li>
              <li>
                Points readers in the direction of further information and
                resources and is followed by a glossary of key terms
              </li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Design and implementation of Payments for Ecosystem Services
            schemes.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            May be helpful for organisations interested in promoting PES schemes
            in their areas
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Various</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Data: Biophysical information (status and trends in the flow of
                ecosystem services), economic valuation of ecosystem services,
                institutional and cultural framework, including key stakeholders
                (e.g. providers, beneficiaries, intermediaries), quantification
                of demand.{" "}
              </li>
              <li>
                Skills: Ecosystem services assessments and valuation,
                stakeholder assessment and management, financial planning.
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
                Relatively comprehensive and up-to-date methodological guidance
                for PES schemes.
              </li>
              <li>
                Provides key questions for buyers and sellers in the process of
                establishing a PES scheme
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Promotes one individual financing tool, rather than assessing
                and comparing different options and/or combinations.
              </li>
              <li>Examples mainly from developed countries.</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Smith, S., Rowcroft, P., Everard, M., Couldrick, L., Reed, M.,
            Rogers, H., Quick, T., Eves, C. and C. White (2013)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.gov.uk/government/publications/payments-for-ecosystem-services-pes-best-practice-guide">
                Payments for Ecosystem Services: A Best Practice Guide.
                Department for Environment, Food and Rural Affairs,{" "}
              </a>
            </span>{" "}
            London.
            <a href="https://www.gov.uk/government/publications/payments-for-ecosystem-services-pes-best-practice-guide">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            The Annex provides details to 17 relevant case studies from UK, USA,
            Australia, Norway, and France.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Wunder, Sven (2005).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.cifor.org/publications/pdf_files/OccPapers/OP-42.pdf">
                Payments for environmental services: Some nuts and bolts.
                Occasional Paper No. 42.
              </a>
            </span>
            CIFOR. Accessed on 13 November 2018 at
            <a href="http://www.cifor.org/publications/pdf_files/OccPapers/OP-42.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Forest Trends, The Katoomba Group, and UNEP (2008):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.unep.org/pdf/PaymentsForEcosystemServices_en.pdf">
                Payments for Ecosystem Services. Getting Started: A Primer.
              </a>
            </span>
            Accessed on 13 November 2018 at
            <a href="https://www.unenvironment.org/resources/report/payments-ecosystem-services-getting-started">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Wunder, S., Brouwer, R., Engel, S., Ezzine-de-Blas, D., Muradian,
            R., Pascual, U., Pinto, R. (2018).{" "}
            <b>
              From principles to practice in paying for nature’s services.
              Nature Sustainability
            </b>{" "}
            1: 145 –150
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Greiber, T. (Ed) (2009).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="">
                Payments for Ecosystem Services. Legal and Institutional
                Frameworks.
              </a>
            </span>
            Gland, Switzer-land: IUCN. xvi + 296 pp. Accessed on 20 September
            2018 at
            <a href="">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br /> Greiber et. al. provides recommendations and guidance for the
            future development of legal and institutional frameworks which
            support water-related PES schemes and their implementation
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Questionnaire for country assessments:
            <a href="https://www.iucn.org/downloads/guiding_questionnaire_for_country_assessments___final.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll27;
