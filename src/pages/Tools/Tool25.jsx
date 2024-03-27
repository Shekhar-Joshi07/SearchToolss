import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll25 = (props) => {
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
            <h4>3.4.3 | FINANCING MECHANISMS</h4>
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
            TOOL 25
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GUIDE TO CONSERVATION FINANCE: SUSTAINABLE FINANCING FOR THE PLANET
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2009
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            WWF US
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
            Guideline including overview of financing mechanisms and case
            studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            General overview about existing mechanisms and approaches on
            sustainable conservation (including PA) financing
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guideline document consisting of a general introduction and an
            overview (with practical case examples) of 37 approaches and
            mechanisms under the following categories, plus references:
            <ol>
              <li> Carbon finance (4 approaches/ mechanisms)</li>
              <li> Payments for watershed services (1 approach)</li>
              <li>
                {" "}
                Revenue from tourism and recreation (6 approaches/mechanisms)
              </li>
              <li> Compensation payments (5 approaches/mechanisms)</li>
              <li> Fishing industry revenues (4 approaches/mechanisms)</li>
              <li>
                {" "}
                Real estate and economic activity (2 approaches/mechanisms)
              </li>
              <li>
                {" "}
                Revenue from the sale and trade of wildlife (4
                approaches/mechanisms)
              </li>
              <li>
                {" "}
                Sustainable capital and environmental investment funds (4
                approaches/mechanisms
              </li>
              <li>
                {" "}
                Allocations from government revenues (6 approaches/mechanisms)
              </li>
              <li>. Conservation trust funds (1 approach)</li>
            </ol>
            For each category, specific instruments with case examples are
            listed and briefly discussed.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            General orientation about possible sustainable financing options,
            approaches and methods for PAs or other conservation activities.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>CEPA.</li>
              <li>
                Identification of existing case studies for further
                consultation/study
              </li>
              <li>
                Assessment and evaluation of existing sustainable financing
                strategies of PAs.
              </li>
            </ul>
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
                General information about the context (legal and policy
                framework, institutional context).
              </li>
              <li>
                Basic information about the financial situation (including needs
                and available resources) of the PA in question.
              </li>
              <li>
                Additional skills needed and implementation costs depend on
                context and tool
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
              <li>Wide thematic scope.</li>
              <li>
                {" "}
                Many interesting case studies with relevance to development
                cooperation.
              </li>
              <li>Concise presentation.</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Lack of detailed methodological guidance</li>
              <li>Not PA specific</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="col">
          WWF US (2009).
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="http://awsassets.panda.org/downloads/wwf_guide_to_conservation_finance.pdf">
              Guide to Conservation Finance. Sustainable Financing for the
              Planet. Washington, D.C.:
            </a>
          </span>
          WWF US. 64 pp. Accessed on 20 September 2018 at
          <a href="http://awsassets.panda.org/downloads/wwf_guide_to_conservation_finance.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Numerous (typically short) examples and case studies, including from
            Belize, Brazil, Costa Rica, Ecuador,Guatemala, Honduras, Indonesia,
            Kenya, Madagascar, Malaysia, Mozambique, Namibia, Peru, Philippines,
            Rwanda and Tanzania discussed in the document.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Meyers, D., Bohorquez, J., Cumming, T., Emerton, L., Heuvel, O.v.d.,
            Riva, M., and Victurine, R.
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/5e8c97ecf33f8960fc2cbda3/1586272239963/Conservation+Finance+Framework.pdf">
                Conservation Finance: A Framework, Conservation Finance
                Alliance,
              </a>
            </span>
            2020. Accessed on 6 June 2020 at
            <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/5e8c97ecf33f8960fc2cbda3/1586272239963/Conservation+Finance+Framework.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Gobin, C., Landreau, B. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://mava-foundation.org/wp-content/uploads/2018/01/MAVA_InnovatingConservationFinance_Janv2018.pdf">
                Innovating conservation finance in West Africa and the
                Mediterranean. MAVA Fondation pour la nature.
              </a>
            </span>
            Gland Switzerland. 40 pp. Accessed on 05.11.2018 at
            <a href="http://mava-foundation.org/wp-content/uploads/2018/01/MAVA_InnovatingConservationFinance_Janv2018.pdf">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            Includes a number of “new” mechanisms such as Green/Blue Bonds or
            Project Finance for Permanence (PFP)
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Spergel, B. and M. Moye (2004)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.panda.org/downloads/marine/fmcnewfinal.pdf">
                Financing Marine Conservation: A Menu of Options. WWF Center for
                Conserva-tion Finance.
              </a>
            </span>
            Washington, D.C. USA. 68 pp. Accessed on 05.11.2018 at
            <a href="http://www.cciforum.org/pdfs/Financing%20Marine%20Cons%20-%20A%20menu%20of%20Options%20(WWF).pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll25;
