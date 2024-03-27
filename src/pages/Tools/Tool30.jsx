import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll30 = (props) => {
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
            TOOL 30
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            GUIDEBOOK FOR THE DEVELOPMENT OF SIMPLIFIED BUSINESS PLANS FOR
            PROTECTED AREAS
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2012
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Fondation Internationale du Banc d'Arguin (FIBA)
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
            Guideline and summary collection of methods
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Guidance to PA managers for development of simplified PA business
            plans
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Guidebook on simple PA business planning, including general sections
            and step by step guidance on developing a simple PA business plan.
            The guidebook was originally developed for western Africa, but is
            applicable more widely General sections:
            <ul>
              <li>Role of business plan;</li>
              <li>Main steps in completing a simple business plan;</li>
              <li>
                Guidance on developing and completing MS Excel files for PA
                busi-ness planning;
              </li>
              <li>Further reading;</li>
              <li>Sample table of content of a PA business plan.</li>
            </ul>
            Stepwise guide (each step with sub-steps and summaries of specific
            methods that can be used)
            <ol>
              <li> Determining long-term financial needs</li>
              <li> Presentation of existing funding sources.</li>
              <li>
                {" "}
                Identifying other possible funding (including discussion of
                existing funding mechanisms)
              </li>
              <li>
                {" "}
                Identifying and setting up Payments for Environmental Services
                (PES) schemes.
              </li>
            </ol>
            The last step is optional as applicability of PES depends on the
            given PA.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>PA business planning in resource limited situations.</ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>Assessment of existing business plans.</ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs (possibly sets of several of them).
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>

        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Medium computer literacy including sound MS Excel skills</li>
              <li>
                Information about funding and likely costs for the given PA
              </li>
              <li>Sound numeracy skills</li>
              <li>Capacity and resources to conduct planning workshops</li>
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
              <li>Good simple overview with easy how-to guidance</li>
              <li>Simple language and good step-by-step structure.</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Relatively general</li>
              <li>
                {" "}
                Quite a lot of text is dedicated to summarizing specific PA
                funding mechanisms/approaches which are described more
                comprehensively elsewhere
              </li>
              <li>Relatively text heavy for a methodological guide.</li>
              <li>
                PES is not a part of PA business planning and the section could
                be misinterpreted
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Landreau, B. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://aires-marines.uqar.ca/41/1/Guide%20business%20plans%20FIBA.pdf">
                Guidebook for the Development of Simplified Busi-ness Plans for
                Protected Areas.
              </a>
            </span>
            Dakar, Senegal: FIBA. Accessed on 1 October 2018 at
            <a href="http://aires-marines.uqar.ca/41/1/Guide%20business%20plans%20FIBA.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            A CD with sample excel files for business planning was created in
            2012, but is currently not publicly available.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll30;
