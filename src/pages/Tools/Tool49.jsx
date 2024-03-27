import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll49 = (props) => {
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
              <h3>Category 3.7 - GOVERNANCE</h3>
            </div>
            <h4>
              3.7.3 | INDIGENOUS PEOPLES’ AND COMMUNITY CONSERVED TERRITORIES
              AND AREAS (ICCAS)
            </h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height" style={{ height: "110px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 49
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            A TOOLKIT TO SUPPORT CONSERVATION BY INDIGENOUS PEOPLES AND LOCAL
            COMMUNITIES: BUILDING CAPACITY AND SHARING KNOWLEDGE FOR INDIGENOUS
            PEOPLES’ AND COMMUNITY CONSERVED TERRITORIES AND AREAS (ICCAS) (“THE
            ICCA TOOLKIT”)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2013
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UN Environment-WCMC (publisher), UNDP{" "}
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
            Collection of methods, tools, resources and case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Provision of resources for the purpose of building community
            capacities to effectively manage ICCAs
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of introductory part (including
            definitions), compilation of methods, tools and case examples
            organized in five themes, including many links to more specific
            tools, ordered by themes/purposes
            <br />
            <br />
            Themes:
            <br />
            <br />
            <ol>
              <li>
                Documenting Presence. Provides solutions for communities to
                establish proof of its physical presence on the land or sea
                through various formats, such as paper claims or maps.
              </li>
              <li>Management Planning.</li>
              <li>
                Monitoring and Evaluation. Helps communities to engage in
                monitoring of the natural resources and livelihoods. Shows how
                evaluating progress at regular intervals, especially through
                participation of community members, ensures that monitoring is
                locally meaningful, and can be used for adaptive learning.
              </li>
              <li>
                Communication. Various communication methods are presented for
                local organizations to draft and create their own narratives and
                communications.{" "}
              </li>
              <li>
                Values and Finance. Supports communities who govern and manage
                ICCAs to access appropriate resources, including finance, which
                are in line with their local value systems, and can help support
                their conservation initiatives.
              </li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Community-based organisations build their capacities for effective
            ICCA management and governance
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Informing organisations that support communities in managing and
                conserving their territories and areas (e.g. government,
                development cooperation)
              </li>
              <li>Learning</li>
              <li>CEPA</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual ICCAs (system level application possible)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Implementation costs vary depending on tools chosen and context.
            Typical use will require the capacity (in terms of network/access,
            logistics, facilitation, equipment and financial resources) to
            conduct training and participatory planning workshops.
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
                Developed specifically for use by local communities and civil
                society organizations
              </li>
              <li>Clear and simple structure that is based on user needs</li>
              <li>
                Many links to more specific resources, including methodologies
                and online tools
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Relatively recent so only limited experience with use available
              </li>
              <li>
                Will need regular updating, particularly regarding cross-linked
                tools and resources (URLs)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Corrigan, C., T. Hay-Edie (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.unep-wcmc.org/system/dataset_file_fields/files/000/000/070/original/ICCA_toolkit_final_Version_2.pdf?1398438727">
                A toolkit to support conservation by indigenous peoples and
                local commu-nities: building capacity and sharing knowledge for
                indigenous peoples’ and community conserved territories and
                areas (ICCAs).
              </a>
            </span>
            Cambridge, UK: UNEP- WCMC. 72 pp. Accessed on 5 October 2018 at
            <a href="https://www.unep-wcmc.org/system/dataset_file_fields/files/000/000/070/original/ICCA_toolkit_final_Version_2.pdf?1398438727">
              <Icon as={LinkIcon} />
            </a>{" "}
            (5 MB)
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            17 case studies, including from Cambodia, Colombia, Ecuador,
            Ethiopia, Gambia, Indonesia, Iran, Mexico, Peru, Philippines and
            Senegal, are included in the guideline document
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            ICCA Consortium{" "}
            <a href="http://www.iccaconsortium.org/">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            ICCA Registry (online platform for ICCAs, provides data, case
            studies, maps etc.) Accessed on 5 October 2018 at
            <a href="http://www.iccaregistry.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Gombos, M., Atkinson, S., Green, A., & Flower, K. (Eds.). (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.coraltriangleinitiative.org/sites/default/files/resources/11_Designing%20Effective%20Locally%20Managed%20Areas%20in%20Tropical%20Marine%20Environments%20Booklet%20(English).pdf">
                Designing Effective Locally Managed Areas in Tropical Marine
                Environments: A Booklet to Help Sustain Community Benefits
                through Management for Fisheries, Ecosystems, and Climate
                Change.
              </a>
            </span>
            Jakarta, Indonesia: USAID Coral Triangle Support Partnership.
            <a href="http://www.coraltriangleinitiative.org/sites/default/files/resources/11_Designing%20Effective%20Locally%20Managed%20Areas%20in%20Tropical%20Marine%20Environments%20Booklet%20(English).pdf">
              <Icon as={LinkIcon} />
            </a>
            Accessed on 19 February 2019
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll49;
