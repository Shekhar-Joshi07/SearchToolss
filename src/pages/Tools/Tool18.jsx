import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll18 = (props) => {
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
            TOOL 18
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            ADAPTIVE MANAGEMENT OF VULNERABILITY AND RISK AT CONSERVATION SITES
            (MARISCO)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2014
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            HNE Eberswalde, Centre for Econics and Ecosystem Management{" "}
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
            Methodology
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Strategic design, planning and management of conservation (including
            PA related) projects with particular attention on vulnerability and
            risks, such as those related to climate change.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Modified version of the Conservation Measures Partnership's Open
            Standards for the Practice of Conservation, which places greater
            emphasis on ecosystem dynamics, change, uncertainty and risk, with a
            particular focus on the effects and problems relating to climate
            change <br />
            Differences to CMP Open Standards mainly in the project design and
            planning phase <br />
            Issues that are specifically addressed in MARISCO, in contrast to
            the CMP Open Standards:
            <ul>
              <li>Spatial analysis</li>
              <li>
                Ecosystem diagnostics analysis (key attributes: biomass,
                information and network)
              </li>
              <li>
                Ecosystem function and ecosystem based adaptation principles
                integrated in situation analysis, more than in CMP Open
                Standards
              </li>
              <li>Comprehensive assessment of stresses</li>
              <li>Scenario planning</li>
              <li>
                Concept of vulnerability in adaptive conservation management.
              </li>
            </ul>
            MARISCO management planning process consists of four basic,
            interrelated steps, for which the methodology provides concise
            guidance:
          </div>
          <ol>
            <li>
              Preparation and initial conceptualization (including ecosystem
              diagnostics analysis)
            </li>
            <li>Systemic vulnerability and risk analysis</li>
            <li>
              Comprehensive evaluation, prioritization and strategy formulation,
              including related to risk management
            </li>
            <li>Implementation and (non-)knowledge management</li>
          </ol>
        </div>
        <br />
        Typically carried out as a “MARISCO exercise” in a stakeholder workshop
        setting.
        <br />
        Further information on structure and function in MARISCO manual (see
        reference).
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
                Assessment and evaluation of existing conservation
                projects/programmes from an ecosystem and risk perspective{" "}
              </li>
              <li>
                Risk assessment and risk-proofing of existing conservation
                activities, e.g. in the context of climate change
              </li>
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
            Individual PAs (or areas of interest) or PA systems
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Capacity and knowledge requirements: basic ecological
                understanding essential, familiarity with MARISCO or at least
                CMP Open Standards and Miradi software
              </li>
              <li>
                Relatively extensive information needs about scope area
                implementation costs vary depending on project
              </li>
              <li>
                Implementation of the full range of MARISCO modules requires the
                capacity to train implementation staff in the methodology, to
                conduct extensive participatory planning workshops, and to
                produce complex documents with visual content
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
              <li>
                Focused on ecosystem functionality, which depicts cause-impact
                networks affecting biodiversity and ecosystem services more
                realistically than a focus on species and habitats only
              </li>
              <li>
                Aimed at taking into account uncertainty, vulnerability and
                risk, which are often not considered sufficiently in strategic
                planning for conservation
              </li>
              <li>
                Stepwise process with strong visualization, based on the CMP
                Open Standards
              </li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Relatively theory-heavy and informationhungry approach</li>
              <li>
                Complex process and product of situation analysis, which
                requires considerable knowledge, understanding and skill of
                those involved
              </li>
              <li>
                Only partly supported by Miradi and not supported by other
                conservation software tools
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Ibisch, P. L., P.R. Hobson (eds.) (2014). MARISCO
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.marisco.training/app/download/5799189998/MARISCO-guide_eng_02-2014.pdf">
                {" "}
                Adaptive Management of vulnerability and Risk at Conser-vation
                sites. A guidebook for risk-robust, adaptive and ecosystem-based
                conservation of biodiversity.
              </a>
            </span>{" "}
            Ebers- walde, Germany: Centre for Econics and Ecosystem Management.
            190 pp. Accessed on 8 October 2018 at
            <a href="https://www.marisco.training/app/download/5799189998/MARISCO-guide_eng_02-2014.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <a
              href=" Conservation and sustainable development in a Volatility,
            Uncertainty, Complexity, and Ambiguity world: the need for a systemic and ecosystem-based approach. Ecosystem Health and Sustainability 3(4): e"
            ></a>
            Schick, A., P. R. Hobson, and P. L. Ibisch. (2017).{" "}
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://esajournals.onlinelibrary.wiley.com/doi/epdf/10.1002/ehs2.1267">
                Conservation and sustainable development in a Volatility,
                Uncertainty, Complexity, and Ambiguity world: the need for a
                systemic and ecosystem-based approach. Eco-system Health and
                Sustainability 3(4):
              </a>
            </span>{" "}
            e01267. 10.1002/ehs2.1267 Accessed on 11 September 2018 at{" "}
            <a href="https://esajournals.onlinelibrary.wiley.com/doi/epdf/10.1002/ehs2.1267">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)
            (2011):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://mia.giz.de/qlink/ID=40869000">
                {" "}
                Análisis de la vulnerabilidad y estrategias para la adaptación
                al cambio climático en la Reserva Comunal El Sira – Perú.
              </a>
            </span>{" "}
            Accessed on 11 Septem-ber 2018 at
            <a href="https://mia.giz.de/qlink/ID=40869000">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Case studies from Albania, China, Cost Rica, Ecuador, Germany,
            Guatemala, Peru, Ukraine and United King-dom available at
            <a href="https://www.marisco.training/resources/case-studies/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Additional experience from Kazakhstan and Russia mentioned in
            manual.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            MARISCO Training.
            <a href="https://www.marisco.training/training/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll18;
