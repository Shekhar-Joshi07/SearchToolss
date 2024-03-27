import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll16 = (props) => {
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
        <div className="row fw-bold fs-5 height" style={{ height: "65px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 16
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            <a href="http://cmp-openstandards.org/download-os/">
              THE CONSERVATION MEASURES PARTNERSHIP. OPEN STANDARDS FOR THE
              PRACTICE OF CONSERVATION (CMP OS)
            </a>
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2013
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Conservation Measures Partnership
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
            Adaptive, results based management of conservation projects
            (including but not limited to PA projects) and programmes.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The Open Standards (OS) are based on a version of the project cycle
            with specific guidance and visualiza-tion of five major steps and
            several sub-steps under each of these <br />
            <br />
            <ol>
              <li>
                Conceptualize the project vision and context: define planning
                purpose and project team, scope, vision and conservation targets
                (features) of project, identify critical threats, analyse the
                conservation situation
              </li>
              <li>
                Plan actions and monitoring: develop goals, strategies,
                assumptions and objectives, monitoring and operational plan
              </li>
              <li>
                Implement actions and monitoring: develop work plan and
                timeline, develop and refine budget, imple- ment plans
              </li>
              <li>
                Analyse data, use the results, and adapt: prepare data for
                analysis, analyse results, adapt strategic plan
              </li>
              <li>
                Capture and share learning: document and share learning, create
                a learning environment
              </li>
            </ol>
            <br />
            <ul>
              <li>
                Guidance on general principles for implementation of OS:
                stakeholder involvement and participatory im- plementation,
                development and cultivation of partnerships, emphasis on
                learning as part of project cycle, documentation of decisions,
                adaptive management including adjustment of plans
              </li>
              <li>
                CMP OS allow management planning for biodiversity-based human
                well-being targets, based on pub- lished extension{" "}
                <a href="http://cmp-openstandards.org/guidance/addressing-human-wellbeing/">
                  {" "}
                  <Icon as={LinkIcon} />
                </a>
              </li>
              <li>
                Climate Smart Open Standards are available as a prototype
                extension of the methodology{" "}
                <a href="https://drive.google.com/drive/u/0/folders/0BxhA_Up8mhOmNVF5cEdXRTJPNTA">
                  {" "}
                  <Icon as={LinkIcon} />
                </a>
                , to be published in final form in 2019
              </li>
              <li>
                The manual of a version of the OS for ecosystem-based adaptation
                to climate change is under prepara- tion by GIZ
              </li>
              <li>
                Implementation typically in the form of participatory planning
                workshop series and involving the Miradi software. Miradi files
                can largely replace project (including PA management) plans if
                this programme is used
              </li>
              <li>
                mplementation, learning and teaching of the CMP OS is supported
                by a global network of practitioners, coaches and trainers
                (Conservation Coaches Network:{" "}
                <a href="http://www.ccnetglobal.com/">
                  {" "}
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
            areas
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
              <li>Basic training in Open Standards.</li>
              <li>
                At least solid knowledge of the area of interest, including
                biodiversity and human wellbeing values, stakeholders, threats
                with their drivers and root causes
              </li>
              <li>
                Prerequisites for project implementation vary depending on
                nature and scope of project.
              </li>
              <li>
                For most applications at the planning stage, the capacity to
                conduct participatory planning workshops is needed
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
                Broad support and thorough long-term collaborative development
                of OS
              </li>
              <li>
                Clear framework for results based strategic project (including
                PA) design
              </li>
              <li>
                Orientated towards monitoring, learning and adaptive management{" "}
              </li>
              <li>
                Allows for identifying, evaluating and addressing assumptions in
                strategies considered during planning
              </li>
              <li>
                Clear links for derivation of operational and financial planning
                from strategic planning
              </li>
              <li>Useful visualisations to support planning process</li>
              <li>Interoperability with Miradi software </li>
              <li>Existing network of practitioners/coaches</li>
              <li>Well-documented and accessible experience</li>
              <li>
                Capability of planning and management for biodiversity dependent
                human well-being targets
              </li>
              <li>
                Suitability for participatory project design, planning,
                management, monitoring and learning
              </li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Designed to start planning from scratch – can be dif- ficult to
                apply to constrained settings, where significant decisions have
                already been taken
              </li>
              <li>
                Experience with Steps 4–5 of the cycle, and effective- ness of
                approach at these stages not as clearly doc- umented as for
                Steps 1-3 (baseline analysis, project design and initial
                planning, implementation)
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The Conservation Measures Partnership (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://cmp-openstandards.org/wp-content/uploads/2014/03/CMP-OS-V3-0-Final.pdf">
                Open Standards for the Practice of Conservation. Version 3.0
              </a>
            </span>
            / April 2013. CMP. 51 pp. Accessed on 8 October 2018 at
            <a href="http://cmp-openstandards.org/wp-content/uploads/2014/03/CMP-OS-V3-0-Final.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Several updates since first publication in 2004. Current version is
            Version 3 (2013). Version 4.0 is expected to be published in May
            2019.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Ernoul, L. N. Beck, D. Cohez, C. Perennou, M. Thibault, L. Willm, &
            B. Poulin (2014).{" "}
            <b>
              Trends in management plans and guides: 25 years of experience from
              Southern France.
            </b>{" "}
            Journal of Environmental Planning and Man-agement 58(6): 1096 –1112.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Margoluis, R., Stem, C., Swaminathan, V., Brown, M., Johnson, A., &
            Placci, G., et al. (2013).
            <a href="https://www.ecologyandsociety.org/vol18/iss3/art22/">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Results chains: A tool for conservation action design,
                management, and evaluation. Ecology and Society, 18(3), 22.
              </span>{" "}
              Accessed on 8 September 2018 at
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Schwartz, M. W., K. Deiner, T. Forrester, P. Grof-Tisza, M. J. Muir,
            M. J. Santos, L. E. Souza, M. L. Wilkerson, M. Zylberberg (2012).{" "}
            <b>
              Perspectives on the open standards for the practice of
              conservation. Biological Conser-vation 155:
            </b>{" "}
            169 –177.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Spoelder, P., M. Lockwood, S. Cowell, P. Gregerson, A. Henchman
            (2015) Planning. In: Worboys, G. L., M. Lockwood, A. Kothari, S.
            Feary, I. Pulsford (Eds.):{" "}
            <b>Protected Area Governance and Management.</b> pp. 381–412.
            Canberra: ANU Press
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Numerous examples of the application of the CMP OS to PAs around the
            World are available through a project database under Miradi Share{" "}
            <a href="https://www.miradishare.org/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Schumacher, P., T. Garstecki, B. Mislimshoeva, J. Morrison, B.
            Ibele, C. Lesk, S. Dzhumabaeva, U. Bulbulshoev, S. Martin (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://link.springer.com/chapter/10.1007/978-3-319-72874-2_2">
                Using the Open Standards-Based Framework for Planning and
                Implementing Ecosystem-Based Adaptation Projects in the High
                Mountainous Regions of Central Asia.
              </a>
            </span>{" "}
            In: Alves, F. et al. (eds.), Theory and Practice of Climate
            Adaptation, Climate Change Management. Springer Nature. Pp. 23 – 48.
            Accessed on 11 October 2018 at
            <a href="https://link.springer.com/chapter/10.1007/978-3-319-72874-2_2">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Salafsky, N., D. Salzer, A. J. Stattersfield, C. Hilton-Taylor, R.
            Neugarten, S. H. M. Butchart, B. Collen, N. Cox, L. L. Master, S.
            O’Connor, D. Wilkie (2008).
            <span style={{ textDecoration: "underline", color: "green" }}>
              {" "}
              <a href="http://cmp-openstandards.org/wp-content/uploads/2014/03/Classification-of-threats-and-actions.pdf">
                A Standard Lexicon for Biodiversity Conservation: Unified
                Classifi-cations of Threats and Actions. Conservation Biology,
                22:
              </a>
            </span>{" "}
            897–911. Accessed on 24 September 2018 at{" "}
            <a href="http://cmp-openstandards.org/wp-content/uploads/2014/03/Classification-of-threats-and-actions.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll16;
