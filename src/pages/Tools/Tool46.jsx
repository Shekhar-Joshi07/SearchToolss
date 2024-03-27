import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";
import "./tools.css";

const Tooll46 = (props) => {
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
            <h4>3.7.1 | GENERAL</h4>
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
            TOOL 46
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GOVERNANCE OF PROTECTED AREAS: FROM UNDERSTANDING TO ACTION{" "}
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2013
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN WCPA{" "}
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
            Guideline including concepts, case studies and assessment
            methodology
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ol>
              <li>
                Understanding and reflecting the concept of governance in the
                context of protected areas
              </li>
              <li>
                Assessing the governance situation in PA systems and in
                individual protected areas with a focus on governance diversity
                and governance quality as well as identifying options for action
              </li>
            </ol>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of two core parts. Additionally, IUCN
            provides three annexes that are not part of the document itself.
            <br />
            <br />
            Part 1 – Understanding governance – explains key concepts,
            introduces the four different protected area governance types
            recognised by IUCN and the IUCN Protected Area Matrix, explores the
            issue of governance diversity in a PA system, describes different
            degrees of participation by introducing the governance continuum and
            sets out five principles of good governance for protected areas with
            detailed considerations underpinning each.
            <br />
            <br />
            Part 2 – Towards effective action – offers practical guidance on
            assessing, evaluating and improving governance for a given protected
            area system or for a single site including tools, key questions and
            ideas for improvement. It also provides suggestions for a four-step
            multi-stakeholder process to conduct governance assessments.
            <br />
            <br />
            Annexes (provided in a separate document):
            <br />
            <ul>
              <li>
                DOs and DON’Ts in recognising and supporting Indigenous Peoples’
                and Community Conserved Territories and Areas (ICCAs),
              </li>
              <li>
                A group exercise to examine and discuss governance quality
              </li>
              <li>Suggested indicators for monitoring governance quality </li>
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
                Reviewing and adapting the policy, legal and regulatory
                framework for protected and conserved areas systems
              </li>
              <li>
                Identifying potential for expanding/improving a PA
                system/network
              </li>
              <li>
                Reviewing and adapting processes of decision-making in
                individual protected areas as to their effectiveness,
                inclusiveness and equitability
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
                Assessing and improving PA governance with a view to meeting the
                IUCN Green List standards in the governance dimension.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs and PA systems (two separate methods included)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            The skills and resources required depend on the purpose of use and
            geographical and topic scope of the assessment
            <br />
            <br />
            For a participatory governance assessment a small team comprising
            trusted individuals who are able to communicate with and convene a
            broad variety of rightsholders and stakeholders is suggested to
            design and facilitate the process. It may be useful to include an
            expert on governance issues and a professional facilitator.
            Particularly a system level assessment needs to draw on spatial data
            management expertise. The process will need a convening agency and
            resources for workshops and potentially for data gathering or
            mapping work.
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
                comprehensive clarification of concepts illustrated by examples{" "}
              </li>
              <li>based on a wide range of experiences around the world</li>
              <li>
                provides broad guidance for PA governance assessments that can
                be adapted to different needs and purposes
              </li>
              <li>
                in line with international policies provided by the Convention
                on Biological Diversity
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                assessment methodology needs adaptation to specific contexts and
                practical application
              </li>
              <li>
                suggested comprehensiveness ofassessments can seem overwhelming
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Borrini-Feyerabend, G., N. Dudley, T. Jaeger, B. Lassen, N. Pathak
            Broome, A. Phillips and T. Sandwith (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-020.pdf">
                Governance of Protected Areas: From understanding to action.
                Best Practice Protected Area Guidelines Series No. 20.
              </a>
            </span>
            Gland, Switzerland: IUCN. xvi + 124pp. Accessed on 5 October 2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-020.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            (5,75 MB)
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Six case studies (including from Brazil, Colombia, Nepal and
            Senegal) are included in the guidelines document.
            <br />
            <br />
            Experience from German development cooperation: Governance
            assessment of the Hin Nam No National Protected Area for equitable
            and effective management (chapter 4.1 )
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Borrini-Feyerabend, G., P. Bueno, T. Hay-Edie, B. Lang, A. Rastogi
            and T. Sandwith (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/node/44874">
                A primer on go-vernance for protected and conserved areas,
                Stream on Enhancing Diversity and Quality of Governance, 2014
                IUCN World Parks Congress.
              </a>
            </span>
            Gland, Switzerland: IUCN. Accessed on 20 January 2020 on{" "}
            <a href="https://portals.iucn.org/library/node/44874">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            Convention on Biological Diversity (2018): Montreal: CBD.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.cbd.int/doc/c/75d4/07a8/95d2c59b0963a9845fd40d3d/sbstta-22-inf-08-en.pdf">
                Protected and conserved areas governance in the Convention on
                Biological Diversity: A review of key concepts, experiences, and
                sources of guidance. Subsidiary Body on Scientific,
                Technological and Technical Advice, CBD/SBSTTA/22/INF/8.
              </a>
            </span>
            Accessed on 20 January 2020 at{" "}
            <a href="https://www.cbd.int/doc/c/75d4/07a8/95d2c59b0963a9845fd40d3d/sbstta-22-inf-08-en.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            Convention on Biological Diversity (2018):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.cbd.int/doc/decisions/cop-14/cop-14-dec-08-en.pdf">
                Decision adopted by the Conference of the Parties to the
                Con-vention on Biological Diversity 14/8:
              </a>
            </span>
            Protected areas and other effective area-based conservation
            measures. Sharm El-Sheikh: CBD. Accessed on 20 January 2020 at{" "}
            <a href="https://www.cbd.int/doc/decisions/cop-14/cop-14-dec-08-en.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            IUCN, World Commission on Protected Areas (WCPA) and Assurance
            Services International (ASI) (2019).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://iucn.my.salesforce.com/sfc/p/#24000000e5iR/a/1o0000005FBq/Od6wezU5G3bMvrKX10MyUYrN.LykKS7SicquUy241e4">
                IUCN Green List of Protected and Conserved Areas: User Manual,
                Version 1.2.{" "}
              </a>
            </span>
            Gland, Switzerland: IUCN. Acces-sed on 20 January 2020 at{" "}
            <a href="https://iucn.my.salesforce.com/sfc/p/#24000000e5iR/a/1o0000005FBq/Od6wezU5G3bMvrKX10MyUYrN.LykKS7SicquUy241e4">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll46;
