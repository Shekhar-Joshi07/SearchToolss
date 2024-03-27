import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll37 = (props) => {
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
            <h4>3.6.1 | PA MANAGEMENT EFFECTIVENESS ASSESSMENT</h4>
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
            TOOL 37
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            ENHANCING OUR HERITAGE TOOLKIT (EOH)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2008
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UNESCO
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
            Assessment methodology including a set of twelve methods ("tools")
            and case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Management effectiveness assessment of natural World Heritage sites
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Broadly based on IUCN WCPA PAME framework (Hockings et al. 2006)
              </li>
              <li>
                Consists of 12 detailed descriptions of assessment steps and
                methods used ("tools") focusing on specific aspects of WH
                management effectiveness assessment - along the management cycle
                as identified by Hockings et al. (2006) – and complementing each
                other
              </li>
            </ul>
            <ol>
              <il>Identifying Site Values and Management Objectives</il>
              <il>Identifying Threats</il>
              <il>Relationships with Stakeholders</il>
              <il>Review of National Context</il>
              <il>Assessment of Management Planning</il>
              <il>Design Assessment</il>
              <il>Assessment of Management Needs and Inputs</il>
              <il>Assessment of Management Processes</il>
              <il>Assessment of Management Plan Implementation</il>
              <il>Work/Site Output Indicators</il>
              <il>Assessing the Outcomes of Management</il>
              <il>Review of Management Effectiveness Assessment Results</il>
            </ol>
            <ul>
              <li>
                Each assessment step is conducted following a concise worksheet
                with additional explanations and based on various combinations
                of indicators and appraisals
              </li>
              <li>Methods designed to be used as a whole, or as subsets</li>
              <li>
                Typically used by World Heritage site managers, based on
                participatory assessment workshops
              </li>
              <li>Can be repeated over time (monitoring)</li>
              <li>
                Includes broad guidance on how to collate and analyse data,
                identify and fill knowledge gaps, improve integration with
                management
              </li>
              <li>
                Methods build on other existing generic approaches (e.g. of TNC,
                CMP)
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
              Management effectiveness assessment of individual natural/mixed
              World Heritage sites or small sets of sites
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
                Management effectiveness assessment for cultural World Heritage
                properties (see)
              </li>
              <li>
                Management effectiveness assessment of PAs that are not World
                Heritage sites
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs (natural or mixed World Heritage sites) or small sets
            of sites
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <li>
              Considerable information on the management aspects covered by the
              methodology
            </li>
            <li>
              Capacity to conduct participatory assessment workshops and produce
              complex assessment reports
            </li>
            <li>
              Specific costs for conducting assessment depend on scope and
              degree of participation.
            </li>
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
              <li>Comprehensiveness</li>
              <li>
                Modular structure and resulting flexibility for adaptation
              </li>
              <li>
                Relatively high standardization and reproducibility (strict
                worksheet format) makes tool suitable for trend monitoring
              </li>
              <li>
                Broad complementarity with IUCN PAME framework (Hockings et al.
                2006)
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Relatively narrow focus on natural WH sites</li>
              <li>
                Objectivity depends on degree of participation in conducting the
                assessment (othe)
              </li>
              <li>Limited comparability between PAs</li>
              <li>
                Some of the component methods are qualitative or semiquantitativ
              </li>
              <li>
                Gives relatively little weight to outcomes, although these are
                key for adaptive management
              </li>
              <li>
                Limited integration with strategic management frameworks of
                sites
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Hockings, M., R. James, S. Stolton, N. Dudley, V. Mathur, J.
            Makombo, J. Courrau, J. Parrish (2008).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://whc.unesco.org/document/100750">
                Enhancing our Heritage Toolkit. Assessing management
                effectiveness of natural World Heritage sites.
              </a>
            </span>
            Paris: UNESCO. 108 pp. Accessed on 9 October 2018 at
            <a href="http://whc.unesco.org/document/100750">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Leverington, F., K. L. Costa, J. Courrau, H. Pavese, C. Nolte, M.
            Marr, L. Coad, N. Burgess, B. Bomhard, M. Hockings (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.eci.ox.ac.uk/publications/downloads/coad11-protected-areas.pdf">
                Management effectiveness evaluation in protected areas – a
                global study.
              </a>
            </span>
            Second edition 2010. Brisbane: The University of Queensland Accessed
            on 27 September 2018 at
            <a href="https://www.eci.ox.ac.uk/publications/downloads/coad11-protected-areas.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Methodology builds on experience and piloting in nine natural World
            Heritage properties. Case studies from India, Ecuador and Uganda are
            included in the guideline document.
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            EoH Evaluations coordinated by IUCN’s Program on African Protected
            Areas and Conservation (PAPACO) can be accessed here:
            <a href="http://papaco.org/eoh/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                The IUCN World Heritage Outlook ({" "}
                <a href="https://www.worldheritageoutlook.iucn.org/home-page">
                  <Icon as={LinkIcon} />
                </a>
                ) is a complementary, but more general and less in-depth method
                for the assessment of the status and outlook of natural and
                mixed World Heritage sites. Results of the WH Outlook are more
                comparable among sites
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll37;
