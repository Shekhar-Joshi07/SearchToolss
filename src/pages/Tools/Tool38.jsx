import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll38 = (props) => {
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
              <h3>Category 3.6 - ASSESSMENT, MONITORING AND EVALUATION</h3>
            </div>
            <h4>3.6.2 | GLOBAL PA PERFORMANCE STANDARDS</h4>
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
            TOOL 38
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            ENHANCING OUR HERITAGE TOOLKIT (EOH)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2008
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            UNESCO
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
            Assessment methodology including a set of twelve methods ("tools")
            and case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Management effectiveness assessment of natural World Heritage sites
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The core element of the IUCN Green List is a global standard. This
            standard includes four globally consistent components and 17
            criteria, which are supported by 50 indicators, to measure site
            performance. It is assumed that PAs that meet the standard will
            deliver successful conservation outcomes
            <br />
            <br />
            Components and criteria (source: IUCN Green List standard)
            <br />
            <br />
            Indicators for the criteria can be adapted to the national context.
            <br />
            <br />
            The implementation of the IUCN Green List standard is detailed in
            the User Manual.
            <br />
            <br />
            Certification for the Green List is a three-step process
            (application, candidate and green list phase), during which
            applicants have to demonstrate that their sites meet all Green List
            criteria. Decision on awarding Green List status is taken by the
            IUCN Green List of Protected and Conserved Areas Committee
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Gap analysis of performance against the IUCN Green List
                Stand-ard using it as diagnostic tool in a process of
                self-assessment and improvement towards best practice.
              </li>
              <li>
                Demonstrating performance and maintaining the capacity of PAs to
                deliver conservation results.
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
              <li>Formulating national PA policy(see)</li>
              <li>
                Planning and prioritising measures to improve performance and
                effectiveness of PAs and PA systems
              </li>
              <li>Allocation of PA funding and resources;</li>
              <li>
                Communication, education and awareness raising among PA
                practitioners and the general public
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs (can be applied simultaneously to many PAs within a
            PA system)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Skills and resources required and preconditions to be met prior to
            application for certification to the Green List standard as listed
            below refer to preparing an application, not to meeting the criteria
            of the standard. Depending on the area, the latter may require
            substantial additional resources, as it may entail major changes to
            the governance and management of an existing PA.
            <br />
            <br />
            Skills and resources required and preconditions to be met when
            applying for certification
            <br />
            <ul>
              <li>
                Mandate to commit to the standard on behalf of an area’s
                management authority
              </li>
              <li>
                Knowledge and understanding of the IUCN Green List standard and
                user manual (i.e. also: proficiency in one of the languages in
                which it is available)
              </li>
              <li>
                Resources to conduct site level stakeholder consultation and
                host visit of an international exper
              </li>
              <li>
                Resources and capacity to prepare and submit a full nomination
                dossier on how the site meets the criteria of the standard.
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
                Global, widely supported, increasingly respected, comprehensive
                standard for good PA governance and management
              </li>
              <li>
                Clear guidance in many languages,support on demand available
                from IUCN;
              </li>
              <li>Relatively lean certification process</li>
              <li>Adaptability of indicators for criteria to national/regio</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Evidence for meeting some of the criteria (e.g. measures of
                success, conservation of natural values and ecosystem services)
                requires considerable data and on-site monitoring systems that
                do not exist in many PAs.
              </li>
              <li>
                Some of the generic indicators leave considerable room for
                interpretation in national adaptations of the standard which
                poses a challenge to the quality assurance mechanisms of the
                overall programme.{" "}
              </li>
              <li>
                The requirement that Green List certification of individual
                sites requires prior commitment of a whole jurisdiction
                including setting-up of structures and processes to support
                implementation may act as a barrier for managers of individual
                sites willing to undergo certification if the jurisdiction is
                not committed.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Slezak, M. (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.theguardian.com/environment/2018/mar/24/new-green-list-highlights-the-positives-in-nature-conservation">
                New ‘green list’ highlights the positives in nature
                conservation.
              </a>
            </span>{" "}
            The Guardian, 23 March 2018. Accessed on 1 October 2018 at
            <a href="https://www.theguardian.com/environment/2018/mar/24/new-green-list-highlights-the-positives-in-nature-conservation">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border fw-bold bg-fill">
          <div className="col">RELATED RESOURCES</div>
        </div>

        <div className="row border-color">
          <div className="col">
            IUCN and World Commission on Protected Areas (WCPA) (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.iucn.org/sites/dev/files/iucn_green_list_user_manual_version_1.1_may_2018_-_final.pdf">
                IUCN Green List of Protected and Conserved Areas: User Manual,
                Version 1.1.
              </a>
            </span>
            Gland, Switzerland: IUCN. Accessed on 1 October 2018 at
            <a href="https://www.iucn.org/resources/conservation-tool/iucn-green-list-protected-and-conserved-areas">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            IUCN Green List electronic information and help desk:
            <a href="https://www.iucn.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            IUCN and World Commission on Protected Areas (WCPA) (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.iucn.org/our-work/protected-areas-and-land-use">
                IUCN Green List Bulletin.
              </a>
            </span>
            Gland, Switzerland: IUCN. Accessed on 1 October 2018 at
            <a href="https://www.iucn.org/our-work/protected-areas-and-land-use">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            IUCN and World Commission on Protected Areas (WCPA) (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://iucn.my.salesforce.com/sfc/p/#24000000e5iR/a/1o0000005FBq/Od6wezU5G3bMvrKX10MyUYrN.LykKS7SicquUy241e4">
                IUCN Green List of Protected and Conserved Areas: Standard,
                Version 1.2.
              </a>
            </span>
            Gland, Switzerland: IUCN. Accessed on 20 January 2020 at
            <a href="https://iucn.my.salesforce.com/sfc/p/#24000000e5iR/a/1o0000005FBq/Od6wezU5G3bMvrKX10MyUYrN.LykKS7SicquUy241e4">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            It is expected that additional versions of the standard will be
            published in the future.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll38;
