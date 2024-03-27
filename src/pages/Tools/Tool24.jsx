import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll24 = (props) => {
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
            TOOL 24
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            THE LITTLE BIODIVERSITY FINANCE BOOK
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2012
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Global Canopy Programme
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
            Sourcebook.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Lays out options for financing biodiversity and ecosystem services,
            and highlights the need and potential for synergies not only between
            financing mechanisms, but also between financing sources earmarked
            for development, climate change and biodiversity.It seeks to help
            key stakeholders including governments, NGOs, the private sector,
            indigenous peoples and local communities to compare existing and
            future options for biodiversity finance in a clear and consistent
            way.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            This publication introduces an overarching framework that organises
            financial mechanisms under three main headings:
            <ol>
              <li>Revenue generation. </li>
              <li>Delivery. </li>
              <li> Institutional arrangements</li>
            </ol>
            Details of different biodiversity financing mechanisms are given.
            These modules can be thought of as independent building blocks that
            can be arranged in a ‘mix and match’ approach, choosing the most
            suitable options from each module to create a more effective,
            efficient, and equitable financial system. Overall, 17 finance
            generation mechanisms are discussed in the book.{" "}
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            Review and compare financing options and combinations of financing
            mechanisms for biodiversity and ecosystems service
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Learning and communication related to conservation finance.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Various (not PA specific).</div>
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
                Proides a global assessment of current available financing for
                biodiversity.
              </li>
              <li>
                {" "}
                Sourcebook for understanding the variety of financing options
                and assessment and comparison of different options based on
                criteria.
              </li>
              <li>
                ood coverage of operational business planning and implementation
                aspects.
              </li>
              <li>
                Includes options for the institutional arrangement of finance
                for biodiversity and ecosystem services and examples
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                By focusing on financing options, essential prerequisites and
                framework conditions and/or existing constraints to financial
                sustainability may be overlooked or underestimated.
              </li>
              <li>
                Additional methodological guidance regarding the suitability and
                feasibility of each financing option is needed for
                decision-making.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="col">
          Parker, C., Cranford, M., Oakes, N. and M. Leggett (eds. (2012)
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://globalcanopy.org/sites/default/files/documents/resources/LittleBiodiversityFinanceBook_3rd%20edition.pdf">
              The Little Biodiversity Finance Book, Global Canopy Programme,
              Oxford.
            </a>
          </span>
          Accessed on 05.11.2018 at
          <a href="https://globalcanopy.org/sites/default/files/documents/resources/LittleBiodiversityFinanceBook_3rd%20edition.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="col">
          Cranford, M., Oakes, N., Leggett, M., Parker, C., ed., 2012.
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="http://globalcanopy.org/sites/default/files/documents/resources/Little-Forest-Finance-Book-Methodology.pdf">
              The Little Biodiversity Finance Book Methodology Appendix, Global
              Canopy Programme; Oxford.
            </a>
          </span>
          Accessed on 05.112018 at
          <a href="http://globalcanopy.org/sites/default/files/documents/resources/Little-Forest-Finance-Book-Methodology.pdf">
            <Icon as={LinkIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Tooll24;
