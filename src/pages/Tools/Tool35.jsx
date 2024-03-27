import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll35 = (props) => {
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
            TOOL 35
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            RAPID ASSESSMENT AND PRIORITIZATION OF PROTECTED AREAS MANAGEMENT
            (RAPPAM)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2003
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">WWF</div>
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
            Assessment methodology
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Broad level comparison of PA management and management effectiveness
            among many PAs, typically within national PA systems.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Five-step appraisal methodology: (1) determining the scope of
                the assessment, (2) assessing existing information for each
                protected area, (3) administering the RAPPAM questionnaire, (4)
                analyzing the findings, (5) identifying next steps and
                recommendations
              </li>
              <li>
                Central step: questionnaire (not indicator) based appraisal of
                sets of PAs (typically not individual PAs)
              </li>
              <li>
                Questionnaire covers general information, context, planning,
                inputs, processes, outputs
              </li>
              <li>Corresponds to IUCN PAME framework (Hockings et al. 2006)</li>
              <li>Allows for multi-variate analyses</li>
              <li>
                Typically administered in a workshop setting involving
                representatives of the PAs included in the assessment
              </li>
            </ul>
            <br />
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Identification of management strengths and weaknesses of PA
                systems
              </li>
              <li>
                Analysis of pressures and threats across entire PA systems
              </li>
              <li>
                Identification of areas of high ecological and social importance
              </li>
              <li>Prioritization of policy interventions</li>
              <li>
                Identification of follow-up steps, particularly at the PA system
                level
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
              <li>Tracking of the above over time</li>
              <li>Appraisal of individual PAs</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">National or sub-national PA systems</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Necessary skills: Workshop organization and facilitation, MS Excel
            or comparable skills Costs of appraisal workshop depends on number
            of PAs appraised Information on the assessed aspects of all PAs
            included in a RAPPAM assessment is needed
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
              <li>Simplicity, rapidity and low cost</li>
              <li>Simple but powerful prioritization function</li>
              <li>Relevance to the PA system level</li>
              <li>
                Complementarity with IUCN PAME framework (Hockings et al. 2006)
              </li>
              <li>
                Suitability to support and guide discussion in participatory
                appraisal workshops
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Susceptibility to subjective judgement and bias (particularly if
                used outside workshop setting)
              </li>
              <li>Limited reproducibility</li>
              <li>Limited suitability for single PA assessments</li>
              <li>
                Lack of integration with strategic management frameworks of
                sites appraised
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ervin, J. (2003).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://assets.panda.org/downloads/rappam.pdf">
                Rapid Assessment and Prioritization of Protected Area Management
                (RAPPAM) Methodology.{" "}
              </a>
            </span>
            Gland, Switzerland: WWF. 52 pp.
            <a href="http://assets.panda.org/downloads/rappam.pdf">
              <Icon as={LinkIcon} />
            </a>
            (PDF 4.8 MB)
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
                global study. Second edition 2010.
              </a>
            </span>
            Brisbane: The University of Queensland Accessed on 24 September 2018
            at
            <a href="https://www.eci.ox.ac.uk/publications/downloads/coad11-protected-areas.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Hockings, M., F. Leverington, C. Cook (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://press.anu.edu.au/titles/protected-area-governance-and-management-2/">
                Protected area management effectiveness.
              </a>
            </span>
            In G. L. Worboys, M. Lockwood, A. Kothari, S. Feary and I. Pulsford
            (eds.):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://press.anu.edu.au/titles/protected-area-governance-and-management-2/">
                Protected Area Governance and Management,
              </a>
            </span>
            pp. 889–928. Canberra: ANU Press. Accessed on 24 September 2018 at
            <a href="https://press.anu.edu.au/publications/protected-area-governance-and-management">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Jamison, E. (2003)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://academic.oup.com/bioscience/article/53/9/833/311440">
                Rapid Assessment of Protected Area Management Effectiveness in
                Four Countries, BioSci-ence, Volume 53, Issue 9, 1,
              </a>
            </span>
            833–841 pp. Accessed on 24 September 2018 at
            <a href="https://academic.oup.com/bioscience/article/53/9/833/311440">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            A critical review, which is based on a case study, is provided here:
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Carranza, T., A. Manica V. Kapos, A. Balmford (2014). Mismatches
            between conservation outcomes and man-agement evaluation in
            protected areas: A case study in the Brazilian Cerrado. Biological
            Conservation 173: 10 –16.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>
        <div className="row border-color">
          <div className="col">
            <li>
              Serbia{" "}
              <a href="http://awsassets.panda.org/downloads/serbia_rappam_report.pdf">
                <Icon as={LinkIcon} />
              </a>{" "}
            </li>
            <li>
              Cambodia{" "}
              <a href="http://d2ouvy59p0dg6k.cloudfront.net/downloads/rappamreportcambodia2004.pdf">
                <Icon as={LinkIcon} />
              </a>{" "}
            </li>
            <li>
              Senegal{" "}
              <a href="http://wwf.panda.org/fr/?204381/rappam-senegal">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Malawi{" "}
              <a href="https://wwf.panda.org/?unewsid=71320">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Chile{" "}
              <a href="as-reas-Silvestres-Protegidas-de-la-Ecorregion-Valdiviana-RAPPAM">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              China{" "}
              <a href="https://wwf.panda.org/discover/knowledge_hub/all_publications/?6503/RAPPAM-China-Case-Study">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Russia{" "}
              <a href="http://wwf.panda.org/knowledge_hub/all_publications/?6521/RAPPAM-Russia-Case-Study">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              South Africa{" "}
              <a href="ub/all_publications/?6523/RAPPAM-South-Africa-Case-Study">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Bhutan{" "}
              <a href="https://wwf.panda.org/discover/knowledge_hub/all_publications/?6524/RAPPAM-Bhutan-Case-Study">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Mongolia{" "}
              <a href="https://wwf.panda.org/discover/knowledge_hub/all_publications/?83260/Management-Effectiveness-Assessment-of-the-Mongolian-Protected-Areas-System-using-WWFS-RAPPAM-Methodology">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Romania{" "}
              <a href="https://wwf.panda.org/discover/knowledge_hub/all_publications/?83260/Management-Effectiveness-Assessment-of-the-Mongolian-Protected-Areas-System-using-WWFS-RAPPAM-Methodology">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Georgia{" "}
              <a href="https://wwf.panda.org/discover/knowledge_hub/all_publications/?99700/WWF-assessment-Making-protected-area-managment-more-effective-in-Georgia">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Brazil{" "}
              <a href="https://wwf.panda.org/discover/knowledge_hub/all_publications/?22790/Implementation-of-WWFs-RAPPAM-methodology-in-Brazil">
                <Icon as={LinkIcon} />
              </a>
            </li>
            <li>
              Taiwan{" "}
              <a href="https://www.researchgate.net/publication/225059063_Evaluating_the_Management_Effectiveness_of_Five_Protected_Areas_in_Taiwan_Using_WWF's_RAPPAM">
                <Icon as={LinkIcon} />
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll35;
