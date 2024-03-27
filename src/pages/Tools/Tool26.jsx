import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll26 = (props) => {
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
            TOOL 26
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            PRACTICE STANDARDS FOR CONSERVATION TRUST FUNDS (CTFS)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2014
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Conservation Finance Alliance (CFA){" "}
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
            Standards and good practice guidelines.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Improving the design, management, and monitoring/evaluation of CTFs,
            based on voluntary observation of standards
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of sections on background/objectives,
            instructions for use, overview table and detailed
            descriptions/discussions of 52 standards on the below aspects of
            CTFs. The annexes provide checklists of standards to consider when
            creating or assessing CTFs and information about the methodology
            used to produce the standards. The following areas are covered
            <ul>
              <li>Governance (10 standards)</li>
              <li>Operations (10 standards)</li>
              <li>Administration (6 standards)</li>
              <li>Reporting, monitoring and evaluation (10 standards)</li>
              <li>Asset management (9 standards)</li>
              <li>Resource mobilization (7 standards)</li>
            </ul>
            Each section begins with a glossary of terms used. A rationale,
            practical considerations and suggested sources of evidence for
            applying the standard (e.g. in an assessment) are provided for each
            individual standard.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Implementing good international practice in the design, management,
            and monitoring/evaluation of CTFs. NOT meant to be a certification
            tool in their current form.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Harmonization of CTFs and relevant international donor rules
                related to them.
              </li>
              <li>
                Learning and communication related to CTFs and good CTF
                practice.
              </li>
              <li>Promoting better donor support for CTFs</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Depends on scope of trust fund – typically PA system level
            (sub-national, national or eco-regional), but can also focus on
            individual areas.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Involvement with a CTF. The practice standards are most relevant
                to organizations which either run a CTF or have the capacity and
                intention to do so.
              </li>
              <li>Application costs vary.</li>
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
                Broad comprehensive thematic focus and wide applicability.
              </li>
              <li> Provides some detailed guidance on key elements of CTFs.</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Merely voluntary – not a certification approach.</li>
              <li>
                No detailed methodological guidance is provided as to how each
                of the standards can be met
              </li>
              <li>Relatively complex.</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Spergel, B., Mikitin, K. (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/5953eae486e6c0fb1c81cb93/1498671896001/CFA_Standards_full-compressed.pdf">
                Practice Standards for Conservation Trust Funds.: Conservation
                Finance Alliance.
              </a>
            </span>
            113 pp. Accessed on 19 September 2018 at
            <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/5953eae486e6c0fb1c81cb93/1498671896001/CFA_Standards_full-compressed.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="col">
          CFA. (2014).
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="http://www.biofund.org.mz/wp-content/uploads/2017/03/Sust-Financing-PA-CTF-and-Projects-Comparative-Advantages-2014.pdf">
              Sustainable Financing of Protected Areas: Conservation Trust Funds
              and Projects: Comparative Advantages.
            </a>
          </span>
          CFA 44 pp. Accessed on 05.11.2018 at
          <a href="http://www.biofund.org.mz/wp-content/uploads/2017/03/Sust-Financing-PA-CTF-and-Projects-Comparative-Advantages-2014.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Conservation Finance Alliance (CFA). (2008)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.cbd.int/financial/trustfunds/g-rapidassess.pdf">
                Rapid Review of Conservation Trust Funds. Prepared for the CFA
                Working Group on Environmental Funds by Barry Spergel and
                Philippe Taïeb. Second Edition.
              </a>
            </span>
            Accessed on 05.11.2018 at
            <a href="https://www.cbd.int/financial/trustfunds/g-rapidassess.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            This document presents an overview of experiences and lessons
            learned on the creation, operation and evaluation of conservation
            trust funds across the globe.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Berghöfer, Augustin et al. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.econstor.eu/bitstream/10419/168029/1/896004457.pdf">
                Sustainable financing for biodiversity conservation: A review of
                experiences in German development cooperation, UFZ Discussion
                Papers, No. 1/2017,
              </a>
            </span>
            Helmholtz-Zentrum für Umwelt-forschung (UFZ), Leipzig. 143 pp.
            Accessed on 20 September 2018 at
            <a href="https://www.econstor.eu/bitstream/10419/168029/1/896004457.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Lapeyre, R., Laurans, Y. (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.iddri.org/sites/default/files/import/publications/lapeyre_laurans_study-ifms-aps-africa_web.pdf">
                Innovating for Biodiversity Conservation in African Protected
                Areas: Funding and Incentives. Insights from Côte d’Ivoire,
                Sierra Leone and South Africa. Study summary, ministère des
                Affaires étrangères et du Développement international, Institut
                du développement durable et des relations internationales, and
                France-IUCN Partnership, Paris.
              </a>
            </span>
            40 pp. Accessed on 4 October 2018 at
            <a href="https://www.iddri.org/sites/default/files/import/publications/lapeyre_laurans_study-ifms-aps-africa_web.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Further resources such as webinars and book recommendations
            available at
            <a href="https://www.conservationfinancealliance.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            The Environmental Funds Toolkit shares the experiences of
            contributing Environmental Funds – their legal documents, manuals,
            plans, and communications materials and is accessible at
            <a href="https://www.conservationfinancealliance.org/eftk-home">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Winter, J. (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/580ea0b99f74561bfcc204c8/1477353665228/CTF+Pooling+Study+FINAL+7-10-15.doc.pdf">
                Exploring Options for Pooling the Administrative, Investment
                Management, and Training Functions of Conservation Trust Funds.
              </a>
            </span>
            IUCN, WCS, FIBA et al. 63 pp. Accessed on 19 September 2018 at
            <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/580ea0b99f74561bfcc204c8/1477353665228/CTF+Pooling+Study+FINAL+7-10-15.doc.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll26;
