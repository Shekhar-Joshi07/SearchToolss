import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll29 = (props) => {
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
            <h4>3.4.5 | BUSINESS PLANNING</h4>
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
            TOOL 29
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            DEVELOPING PROTECTED AREA CONSERVATION INVESTMENT PLANS – QUICK
            REFERENCE GUIDE AND WORKBOOK
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            World Conservation Society Myanmar
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
            Guideline
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Conservation Investment Plans (CIPs) give a clear picture of the
            financial needs that must be met in order to deliver the management
            plan, locate the most appropriate funding sources, and identify the
            other actions that are required to overcome the financial
            constraints to effective PA management.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            These guidelines describe in a very comprehensive and simple way how
            to apply a conservation investment planning approach. A stepwise
            approach is introduced along with guidance, key questions and tables
            for recording information for each step:
            <ol>
              <li>
                Reviewing the financing status & context What are the key
                financial constraints, opportunities and risks to effective PA
                management?
              </li>
              <li>
                Calculating management plan costs What will the management plan
                and biodiversity conservation cost, and for whom?{" "}
              </li>
              <li>
                Assessing funding needs & gapsWhat funds are available, how much
                is still needed, what are the other financial conditions for
                effective management?
              </li>
              <li>
                Identifying new financing sources What potential new revenues,
                funders and other financial instruments can be developed to meet
                these needs?
              </li>
              <li>
                Developing investment packages What is the best way of
                organizing and presenting funding needs to potential investors
                and budget holders?
              </li>
              <li>
                Designing the strategy for engagement How and to whom should the
                CIP be communicated, what are the best means of engagement and
                most strategic entry points?
              </li>
              <li>
                Setting targets & actions for delivery What needs to be done to
                secure funding and financial sustainability, when and by whom?
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
              <li>
                Developing a CIP to ensure that the right financial and funding
                conditions are provided to enable the management plan.
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
                CIP as communications and marketing tool to convey to public
                decision-makers, government staff, potential donors and other
                stakeholders the conservation investment rationale, needs,
                anticipated out comes and funding requirements of the PA
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA or PA-system level.</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Stakeholder engagement and facilitation skills.</li>
              <li>
                Detailed expenditure and cost figures from both the annual PA
                budgets and the management plan.
              </li>
              <li>
                In most cases, a two or three day brainstorming or workshop is
                supposed to be sufficient to develop a CIP.
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
              <li>Hands-on guide to elaborate a CIP.</li>
              <li>
                Simple and practical, usually no external expertise needed
              </li>
              <li>
                Also provides the concessionaire’s perspective, not only that of
                protected area managers.{" "}
              </li>
              <li>
                Includes strategy development (e.g. investment packages and
                marketing)
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Is supposed to be an integrated part of the PA management
                planning process, but might lead to separate exercises in some
                cases.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Emerton, L., Tizard, R. and Saw Htun (2018)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.researchgate.net/publication/341985095_Developing_Protected_Area_Conservation_Investment_Plans_Quick_Reference_Guide_and_Workbook">
                Developing Protected Area Conservation Investment Plans – Quick
                Reference Guide and Workbook.
              </a>
            </span>
            WCS Myanmar, Yangon Accessed on 06.11.2018 at
            <a href="https://www.researchgate.net/publication/341985095_Developing_Protected_Area_Conservation_Investment_Plans_Quick_Reference_Guide_and_Workbook">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ruzzier, M., J. Zujo, M . Marinsek, S. Sosic (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.southeast-europe.net/document.cmt?id=260">
                Guidelines for the Preparation of Protected Areas Business Plan.
                Lubljana: NATREG project.
              </a>
            </span>
            47 pp. Accessed on 24 September 2018 at
            <a href="https://whc.unesco.org/en/businessplanningtoolkit/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            UNESCO (2008)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://whc.unesco.org/en/businessplanningtoolkit/">
                Business Planning for Natural World Heritage Sites A Toolkit.
                UNESCO World Heritage Centre, Paris and Shell Foundation,
                London.
              </a>
            </span>
            Accessed on 5 November 2018
            <a href="https://whc.unesco.org/en/businessplanningtoolkit/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll29;
