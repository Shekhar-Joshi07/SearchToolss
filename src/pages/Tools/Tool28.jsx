import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll28 = (props) => {
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
            TOOL 28
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            TOURISM CONCESSIONS IN PROTECTED AREAS: GUIDELINES FOR MANAGERS
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2014
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UNDP
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
            Guideline and toolbox including case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Improving the capability of protected area managers, governments and
            the private sector to develop and manage tourism concessions.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The guideline is a 300 page comprehensive, well-structured
            collection of accumulated knowledge, lessons and experiences of park
            agencies around the world with tourism concession management.
            Guidance is provided on topics ranging from planning and
            implementing concessions to environmental impact assessment and
            monitoring performance of concessions in the field.
            <ul>
              <li>
                Each chapter ends with a tools section, listing tools provided
                in the appendix and other sources of information and examples;{" "}
              </li>
              <li>
                Tools provided in the appendix include for example model texts
                for concession law, regulation and policies, checklists to
                identify and mitigate potential effects of proposed concession
                activities, a competence self-assessment tool for concession
                staff or a valuation form for clients of concessionaires.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            To develop robust concession systems or to improve the management of
            existing concessions to maximize the benefits of working with the
            private sector.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            To develop regulatory frameworks for tourism concessions.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA or PA system level</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                To develop a tourism concession system, experience in financial
                management, legal and contract design and basic computer skills
                are mandatory.{" "}
              </li>
              <li>
                It is important that planners carefully assess the project
                context from different perspectives (sociopolitical,
                socio-ecological and market) – therefore expertise in these
                sectors is vital.
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
              <li>Many detailed case studies with lessons learned.</li>
              <li>
                Presents concessions only as one part of a sustainable financing
                plan.{" "}
              </li>
              <li>
                Also provides the concessionaire’s perspective, not only that of
                protected area managers.{" "}
              </li>
              <li>
                Specifically addresses the challenges of developing countries,
                including capacity development needs
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Only available in English.</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Thompson, A., Massyn, P.J., Pendry, J., Pastorelli, J. (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.undp.org/content/dam/undp/library/Environment%20and%20Energy/biodiversity/UNDP%20Tourism%20Concessions%20in%20Protected%20Natural%20Areas%20LR.PDF">
                Tourism Concessions in Protected Natural Areas: Guidelines for
                Managers. United Nations Development Programme.
              </a>
            </span>{" "}
            302 pp. Accessed on 27 September 2018 at
            <a href="http://www.undp.org/content/dam/undp/library/Environment%20and%20Energy/biodiversity/UNDP%20Tourism%20Concessions%20in%20Protected%20Natural%20Areas%20LR.PDF">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Dinica, V. (2018)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.tandfonline.com/doi/full/10.1080/09669582.2017.1322599?scroll=top&needAccess=true">
                The environmental sustainability of protected area tourism:
                towards a concession-related theory of regulation, Journal of
                Sustainable Tourism,
              </a>
            </span>
            26:1, 146-164 pp. Accessed on 2 October 2018 at
            <a href="https://www.tandfonline.com/doi/full/10.1080/09669582.2017.1322599?scroll=top&needAccess=true">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            The guideline includes case studies from the USA, Australia, New
            Zealand, Namibia, Mozambique, the Galap-agos Islands (Ecuador) and
            Mongolia.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Thompson, A., Massyn, P.J., Pendry, J., Pastorelli, J. (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.undp.org/content/dam/undp/library/Environment%20and%20Energy/biodiversity/UNDP%20Tourism%20Concessions%20in%20Protected%20Natural%20Areas_Appendices%20LR.pdf">
                Tourism Concessions in Protected Natural Areas: Appendices.
                United Nations Development Programme.
              </a>
            </span>
            51 pp. Accessed on 1 October 2018 at
            <a href="http://www.undp.org/content/dam/undp/library/Environment%20and%20Energy/biodiversity/UNDP%20Tourism%20Concessions%20in%20Protected%20Natural%20Areas_Appendices%20LR.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Spenceley, A., Snyman, S., Eagles, P. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.cbd.int/tourism/doc/tourism-partnerships-protected-areas-web.pdf">
                Guidelines for tourism partnerships and concessions for
                protec-ted areas: Generating sustainable revenues for
                conservation and development. Report to the Secretariat of the
                Convention on Biological Diversity and IUCN.
              </a>
            </span>
            60 pp. Accessed on 1 October 2018 at
            <a href="https://www.cbd.int/tourism/doc/tourism-partnerships-protected-areas-web.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            World Bank Group. (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://documents.worldbank.org/curated/en/459431467995814879/pdf/105316-WP-PUBLIC-Tourism-Toolkit-19-4-16.pdf">
                An introduction to tourism concessioning: 14 characteristics of
                successful pro-grams. World Bank Group.
              </a>
            </span>
            32 pp. Ac-cessed on 1 October 2018 at
            <a href="http://documents.worldbank.org/curated/en/459431467995814879/pdf/105316-WP-PUBLIC-Tourism-Toolkit-19-4-16.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll28;
