import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll22 = (props) => {
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
            <h4>
              3.4.2 | ASSESSING, MONITORING AND DIAGNOSING FINANCING STATUS
            </h4>
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
            TOOL 22
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            FINANCIAL SUSTAINABILITY SCORECARD FOR NATIONAL SYSTEMS OF PROTECTED
            AREAS
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2010
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
            PURPOSE
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            Methodology and tool.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            This tool provides a simple checklist for recording and diagnosing
            the current status of PA financing in a country. It can be used to
            provide a one-off snapshot, or to establish a baseline and monitor
            trends in PA financing. In addition, it offers a vehicle to promote
            discussion and reflection on PA financing by PA and financial
            planners and managers.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Scorecard tables (two main parts) on financial situation, preceded
            by a general introduction and instructions
            <ul>
              <li>
                Determination of costs, revenues and financing gaps of the PA
                system both in the current year and as forecast for the future.
                Provides a quantitative analysis of the PA system and shows the
                financial data needed by PA planners to determine financial
                targets, and hence the additional funds required to finance
                effective management of their PA system
              </li>
              <li>
                Compartmentalised into three fundamental components for a fully
                functioning financial system at the site and system level, i.e.
                (1) governance and institutional frameworks, (2) business
                planning and other tools for cost-effective management (e. g.
                accounting practices) and (3) revenue generation.
              </li>
              <li>
                Scoring Scores can be used to track progress over time Intended
                for a participatory workshop setting
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Analysis, assessment and monitoring of PA system level financing
            systems, as an input into the planning for their financial
            sustainability. It is often included as a core part of GEF project
            baselines and targets, and required for GEF project reporting.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Analysis at the level of subsets of national PA systems</li>
              <li>
                Exploration of data needs for effective financial analysis
              </li>
              <li>
                vPrioritization of financial needs for fund allocation of
                donors.
              </li>
              <li>Communication and fundraising.</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">National PA systems</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Availability of comprehensive financial data (both inflows and
                outflows) for the PA system of interest, including government
                expenditures, PA revenues and donor funding. As this tool is
                designed to be filled in via a consultative process, it is also
                usually necessary to plan for some kind of roundtable or con
                sultation which brings together different PA and financial
                planners and managers.
              </li>
              <li>
                Basic understanding and skills in data and financial management
                and reporting, sound numeracy skills.
              </li>
              <li>
                At least basic computer equipment (personal computers,
                spreadsheet programmes).
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
                Simple and at the same time relatively comprehensive approach to
                assessing the monetary funding of PA systems.
              </li>
              <li>
                {" "}
                Useful for establishing a baseline and monitoring trends in
                funding amounts. Scoring can be used to track progress or to set
                goals for it{" "}
              </li>
              <li>Suitable for catalysing discussion among stakeholders</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Requires comprehensive data about PA system financing situation
              </li>
              <li>
                By looking at scores and funding only, more subtle developments
                in the financing situation may be overlooked or
                under-appreciated for example non-monetary aspects of or
                constraints to PA financial sustainability.
              </li>
              <li>
                It does not diagnose or improve financial sustainability or
                provide a means of identifying financing ‘solutions’. This would
                require a much deeper analysis e.g. institution and context
                analysis, decision analysis, political economy assessments.
              </li>
              <li>
                Not suitable to be used alone to diagnose PA financial situation
                or responses/solutions. This requires a more reasoned analysis
                of the drivers and underlying causes of PA financial
                (un)sustainability, and of appropriate responses and financing
                mechanisms
              </li>
              PA financial sustainability scorecard is usually best-applied in
              combi- nation with an institutional context analysis or detailed
              political economy assessment (check the other tools in this
              section).
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Bovarnick, A. (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.us.undp.org/content/dam/aplaws/publication/en/publications/environment-energy/www-ee-library/biodiversity/financial-sustainability-scorecard-for-national-systems-of-pas---2010/Financial%20Sustainability%20Scorecard%20for%20PAs%20-%202010%20Edition.pdf">
                Financial Sustainability Scorecard for National Systems of
                Protected Areas. 2nd edition.{" "}
              </a>
            </span>
            New York: UNDP. Accessed on 8 October 2018 at{" "}
            <a href="http://www.us.undp.org/content/dam/aplaws/publication/en/publications/environment-energy/www-ee-library/biodiversity/financial-sustainability-scorecard-for-national-systems-of-pas---2010/Financial%20Sustainability%20Scorecard%20for%20PAs%20-%202010%20Edition.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">First edition 2007, second edition 2010</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            See “Related resources” above for a comprehensive review for South
            and Central America and the Caribbean. It is likely that there are
            additional examples, which have not been documented to the same
            extent.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="col">
          Bovarnick, A., J. Fernandez Baca, J. Galindo, H. Negret (2010).
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="">
              Financial Sustainability of Protected Areas in Latin America and
              the Caribbean: Investment Policy Guidance. New York and Arlington,
              Virginia: United Nations Development Programme (UNDP) and The
              Nature Conservancy (TNC).
            </a>
          </span>
          162 pp. Accessed on 8 October 2018 at{" "}
          <a href="">
            <Icon as={LinkIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Tooll22;
