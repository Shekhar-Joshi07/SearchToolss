import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll17 = (props) => {
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
              <h3>Category 3.3 - MANAGEMENT PLANNING</h3>
            </div>
            <h4>3.3.1 | GENERAL</h4>
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
            TOOL 17
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            <a href="http://cmp-openstandards.org/download-os/">MIRADI</a>
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2018
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Conservation Measures Partnership (CMP) and Sitka Technology Group
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
            Software tool
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Design and adaptive management of conservation projects (including,
            but not limited to PA projects) based on the Conservation Measures
            Partnership's Open Standards for the Practice of Conservation.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>Java based software tool</li>
              <li>
                See programme tutorial for detailed information on structure and
                function of the tool (downloadable at{" "}
                <a href="https://www.miradi.org/software-features/">
                  <Icon as={LinkIcon} />
                </a>{" "}
                )
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Design, planning, adaptive management and implementation, monitoring
            of and learning from conservation projects/programmes and protected
            areas based on the CMP Open Standards for the Practice of
            Conserva-tion areas
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Projects aimed at the conservation of non-biological or cultural
                heritage conservation and management
              </li>
              <li>Programme design and management</li>
              <li>Evaluation and accountability, conservation audits</li>
              <li>
                Design, planning, adaptive management and implementation,
                monitoring of and learning from projects on ecosystem-based
                adaptation to climate change
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Typically individual PAs or project sites. Application to thematic
            projects/programmes and PA systems possible
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Knowledge and capacity requirements: understanding of site
                including biodiversity and threats, at least basic understanding
                of CMP Open Standards for the Practice of Conservation
              </li>
              <li>
                System requirements: Computer with standard OS (Windows, MacOS X
                or Linux) and Java
              </li>
              <li>
                Only basic computer skills needed to learn and use Miradi{" "}
              </li>
              <li>
                Additional application prerequisites vary depending on context
              </li>
            </ul>{" "}
            <br />
            <br />
            Annual subscriptions in 2018 range from $30 (student/low income) to
            $300 per user (individual or company packages). 60 d trial
            subscription free. See more at{" "}
            <a href="https://www.miradi.org/pricing/#subscribe">
              <Icon as={LinkIcon} />
            </a>
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
              <li>Relatively easy to use, good documentation and guidance</li>
              <li>
                Fully compatible with the CMP Open Standards for the Practice of
                conservation
              </li>
              <li>Strong output and reporting functions</li>
              <li>Strong visualizations for project design phase</li>
              <li>
                Supported by strong community of practice and through project
                exchange platform Miradi Share, and Conservation Coaches Network
              </li>
              <li>
                Integration of project design, planning, management, monitoring
                and reporting functions
              </li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Not spatially explicit – no mapping functions</li>
              <li>
                Relatively inflexible approach to threat prioritization (in
                “simple” mode)
              </li>
              <li>
                Most experience with project design and planning functions– less
                with project management and monitoring functions
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Salzer, D. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.miradi.org/software-features/">
                Miradi – a tool to adaptively manage conservation projects.
                Overview and Tutorial with screen shots.
              </a>
            </span>
            PPT, 30 pp. Arlington, Virginia: TNC. Accessed 8 October 2018 at
            <a href="https://www.miradishare.org/ux/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Several versions and language packs since launch in 2008 - Version
            4.5 launched in 2018.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Schwartz, M. W., K. Deiner, T. Forrester, P. Grof-Tisza, M. J. Muir,
            M. J. Santos, L. E. Souza, M. L. Wilkerson, M. Zylberberg (2012).{" "}
            <b>
              Perspectives on the open standards for the practice of
              conservation. Biological Conser-vation 155:
            </b>{" "}
            169 –177
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Examples of the use of Miradi are available through a project
            database under Miradi Share
            <a href="https://www.miradishare.org/ux/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Miradi (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              <a href="https://www.google.com/search?q=Miradi+self-guided+tutorial&ie=utf-8&oe=utf-8&client=firefox-b">
                Miradi – a tool to Adaptively Manage Conservation Projects.
              </a>
            </span>{" "}
            Self-guided PPT tutorial. Accessed on 11 October 2018 a
            <a href="https://www.google.com/search?q=Miradi+self-guided+tutorial&ie=utf-8&oe=utf-8&client=firefox-b">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll17;
