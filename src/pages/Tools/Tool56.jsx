import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";

import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll56 = (props) => {
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
            <h4>3.7.5 | CONFLICT RESOLUTION</h4>
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
            TOOL 56
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            UNDERSTANDING, PREVENTING AND SOLVING LAND CONFLICTS: A PRACTICAL
            GUIDE AND TOOLBOX
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2017
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            GIZ{" "}
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
            Guideline including tool descriptions and case studies
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            The Guideline aims to broaden the understanding of the complexity of
            causes that lead to land conflicts in order to provide for more
            targeted ways of addressing such conflicts. For this purpose, it
            provides tools and options that can be used to analyse and settle
            ongoing land conflicts, and to prevent new ones.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The guideline is divided into eight chapters:
            <br />
            <br />
            <ol>
              <li>
                Introduction (examples of land conflicts; defining land
                conflicts)
              </li>
              <li>
                Understanding land conflicts (different types of land conflicts
                and consequences and social dimension)
              </li>
              <li>
                Analysing land conflicts (type of information/data needed for
                land conflict analysis; tools to visualize and analyse land
                conflicts)
              </li>
              <li>
                Dealing with land conflicts (approaches to uncover hidden land
                conflicts; forms of land conflict resolution; tools to solve
                land disutes)
              </li>
              <li>
                Preventing land conflicts (creating awareness; establishing
                institu-tional framework; tools to prevent land dispute)
              </li>
              <li>
                The role of land in (violent) conflict and peacebuilding (land
                as cause of broader conflicts; the role of land during and
                post-conflict settings)
              </li>
              <li>Case studies – Good practices from a project level</li>
              <li>Conclusion</li>
            </ol>
            <br />
            <br />
            Each chapter (except No. 7 and No. 8) ends with concepts for review,
            questions for discussion, exercises and further reading. In
            addition, Chapter 3 – 5 provide tools to support the process of
            solving land conflicts
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Search for overview information and guidance to better
                understand land conflicts and options for action in a project
                context
              </li>
              <li>
                Support in processes of analysing, settling or preventing land
                conflicts
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
                The end of chapter notes can be used for general courses on land
                administration and land management
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Level of application depends on purpose. If it is used to analyse
            land dis-putes it would typically be at the individual PA or
            sometimes at the PA system level.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Skills and resources required for applying the tools presented
                vary.
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
                Provides clear definitions and explanations of terms and
                concepts
              </li>
              <li>Includes good practice case studies</li>
              <li>Broad overview over tools regarding land conflicts</li>
              <li>
                Includes further reading, concepts for review, question for
                discussion and exercises to deliberate the lessons learned
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Need of external support (e.g. mediator) for the application of
                tools presented
              </li>
              <li>Not PA-specific</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Wehrmann, B. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://mia.giz.de/qlink/ID=49425000">
                Understanding, preventing and solving land conflicts. A
                practical guide and toolbox.{" "}
              </a>
            </span>
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH,
            Bonn/Eschborn; Bundesministerium für wirtschaftliche Zusammenarbeit
            und Entwicklung (BMZ), Berlin. 156 pp. (2,844 KB) Accessed on 17
            September 2018
            <a href="https://mia.giz.de/qlink/ID=49425000">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>First edition (2008)</li>
              <li>Revised second edition (2017)</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Of six case studies two are PA-related (Laos, Philippines)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES / FURTHER READING </div>
        </div>

        <div className="row border-color">
          <div className="col">
            An accompanying Training Manual can be obtained upon request at
            <a href="">
              <Icon as={LinkIcon} />
            </a>{" "}
            <br />
            <br />
            Further readings for the specific tools and methods are included in
            the Guideline.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            E-learning course: FAO. (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.fao.org/elearning/#/elc/en/course/VG7">
                Addressing Disputes and Conflicts over the Tenure of Natural
                Resources.
              </a>
            </span>{" "}
            Accessed on 17 September 2018 at
            <a href="http://www.fao.org/family-farming/detail/en/c/1052948/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Food and Agriculture Organization of the United Nations. (2012).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.fao.org/docrep/016/i2801e/i2801e.pdf">
                Voluntary Guidelines on the Responsible Go-vernance of Tenure of
                Land, Fisheries and Forests in the Context of National Food
                Security.
              </a>
            </span>{" "}
            Food and Agricul-ture Organization of the United Nations, Rome. 40
            pp. Accessed on 17 September 2018 at
            <a href="http://www.fao.org/docrep/016/i2801e/i2801e.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll56;
