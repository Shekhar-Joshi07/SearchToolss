import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll23 = (props) => {
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
            TOOL 23
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            FINANCIAL PLANNING FOR NATIONAL SYSTEMS OF PROTECTED AREAS
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2008
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            The Nature Conservancy (TNC)
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
            Guideline, collection of methods and good practice standards.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            To provide guidelines and lessons to optimize the financial planning
            processes of PAs and the products resulting from these processes.
            Also: to improve the financial management capacities of individuals
            and institutions working in PA
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guidelines document consisting of four chapters, annexes, a
            bibliography and a list of useful websites. Key aspects covered
            include:
            <ul>
              <li> Financial analysis: funding needs and gaps</li>
              <li>
                Pre-selection and analysis of financial mechanisms and
                understanding the legislative and regulatory framework
                conditioning their use.{" "}
              </li>
              <li>Formulation of financial and business plans.</li>
              <li>
                {" "}
                Additionally important aspects related to implementation,
                monitoring, and evaluation of PA system financial plans.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">National PA system financial planning</div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Application at the sub-national level.</li>
              <li>
                Evaluation and review of existing PA system financial planning
                documents.
              </li>
              <li>Learning and communication related to PA finance.</li>
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
                Basic information about the financial situation (including needs
                and available resources) of the PA system in question..
              </li>
              <li>
                Basic understanding and skills in data and financial management,
                planning and reporting, sound numeracy skills
              </li>
              <li>Familiarity with generic PA financing mechanisms</li>
              <li>
                At least basic computer equipment (personal computers,
                spreadsheet programmes)
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
              <li>Well-founded, broad approach</li>
              <li>
                {" "}
                Thorough consideration of the impact of legal, institutional and
                capacity related frameworks on opportunities and constraints of
                PA system financing.
              </li>
              <li>
                ood coverage of operational business planning and implementation
                aspects.
              </li>
              <li>Relevant examples from the Americas.</li>
              <li>Useful illustrations</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Lack of methodological detail regarding individual financing
                tools.
              </li>
              <li>Examples almost exclusively from Latin America.</li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="col">
          Flores, M., G. Rivero, F. León, G. Chan, et al. (2008).
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="http://www.rootchange.org/about_us/resources/publications/FinancialPlanningforNationalSystemsofProtectedAreas.pdf">
              Financial Planning for National Systems of Protected Areas:
              Guidelines and Early Lessons.
            </a>
          </span>
          Arlington, Virginia: The Nature Conservancy. 114 pp. Accessed on 8
          October 2018 at
          <a href="https://www.cepal.org/ilpes/noticias/paginas/8/35988/finance_book_in_english-complete-2nd.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            A number of examples from various Central and South American
            countries, but no comprehensive case studies are included in the
            guideline document.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="col">
          Discusses Biodiversity Finance in general, not PA specific:
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://www.biodiversityfinance.net/sites/default/files/content/publications/undp-biofin-web_0.pdf">
              The Biodiversity Finance Initiative. (2016). BIOFIN Workbook:
              Mobilizing Resources for Biodiversity and Sustai-nable
              Development. UNDP.
            </a>
          </span>{" "}
          266 pp. Accessed on 05.11.2018 at
          <a href="https://www.biodiversityfinance.net/sites/default/files/content/publications/undp-biofin-web_0.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>

        <div className="col">
          Meyers, D., Bohorquez, J., Cumming, T., Emerton, L., Heuvel, O.v.d.,
          Riva, M., and Victurine, R. 2020.
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/5e8c97ecf33f8960fc2cbda3/1586272239963/Conservation+Finance+Framework.pdf">
              Conservation Finance: A Framework, Conservation Finance Alliance,{" "}
            </a>
          </span>
          Accessed on 6 June 2020 at
          <a href="https://static1.squarespace.com/static/57e1f17b37c58156a98f1ee4/t/5e8c97ecf33f8960fc2cbda3/1586272239963/Conservation+Finance+Framework.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Tooll23;
