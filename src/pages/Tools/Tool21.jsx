import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll21 = (props) => {
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
            <h4>3.4.1 | GENERAL</h4>
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
            TOOL 21
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            <a href="http://cmp-openstandards.org/download-os/">
              {" "}
              SUSTAINABLE FINANCING OF PROTECTED AREAS: A GLOBAL REVIEW OF
              CHALLENGES AND OPTIONS{" "}
            </a>
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2006
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            IUCN
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
            Guideline including case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Review and assess the status of various protected area finance
            mechanisms, the major obstacles and opportunities for their
            implementation. It seeks to identify lessons which influence the
            success of different financing mechanisms, and to provide
            recommendations for improving the future sustainability, efficiency
            and effectiveness of protected area financin
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The Guideline is divided into three parts:
            <ul>
              <li>
                presents the background and conceptual framework within which we
                investigate PA financing
              </li>
              <li>
                defines and describes different mechanisms for financing PAs,
                and reviews their strengths and weaknesses in light of
                real-world experiences.{" "}
              </li>
              <li>
                identifies lessons learned and points the way forward in
                improving the sustainability, efficiency and effectiveness of PA
                financing.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Primarily for government and non-government agencies responsible for
            funding and managing PAs, although some findings may also be
            relevant to private companies involved in PA management
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA or PA-system leve</div>
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
                Recognises that PA financial sustainability is to do with more
                than just mobilising additional funding
              </li>
              <li>
                Case studies provide concrete examples of how specific financing
                mechanisms are being used in a r{" "}
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Published in 2006, some of the more recent developments are not
                reflected
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Emerton, L., Bishop, J. and L. Thomas (2006).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-013.pdf">
                Sustainable Financing of Protected Areas: A Global Review of
                Challenges and Options. World Commission on Protected Areas Best
                Practice Protected Area Guidelines Series No. 13,
              </a>
            </span>
            IUCN, Gland. Accessed on 05.11.2018 at
            <a href="https://portals.iucn.org/library/sites/library/files/documents/PAG-013.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The guideline provides 29 case studies from Vietnam, Lao PDR, Kenya,
            Uganda, Indonesia, Madagascar, Australia, Bhutan, USA, Brazil,
            Tanzania, Pakistan, Zanzibar, Seychelles, Netherlands, South Africa,
            New Zealand, Turkey, Bolivia, EU as concrete examples of how
            specific financing mechanisms are being used in a range of contexts.
            However, they are not intended as illustrations of “best practice”
            in PA financing.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="col">
          The preceding IUCN Guideline (
          <span style={{ textDecoration: "underline", color: "green" }}>
            <a href="https://portals.iucn.org/library/node/7774">
              “Financing Protected Areas – Guidelines for Protected Area
              Managers”
            </a>
          </span>
          Gland, Switzerland and Cambridge (2000), UK: IUCN. viii + 58pp.
          Accessed on 3 November 2018 at{" "}
          <a href="https://portals.iucn.org/library/node/7774">
            <Icon as={LinkIcon} />
          </a>{" "}
          is still a useful resource as it provides a solid basis, however, it
          does not reflect many of the advances in thinking that have taken
          place since publication in 2000.
        </div>
      </div>
    </>
  );
};

export default Tooll21;
