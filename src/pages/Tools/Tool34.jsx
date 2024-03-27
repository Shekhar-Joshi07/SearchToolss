import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll34 = (props) => {
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
            <h4>3.6.1 | PA MANAGEMENT EFFECTIVENESS ASSESSMENT</h4>
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
            TOOL 34
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            MANAGEMENT EFFECTIVENESS TRACKING TOOL (METT) AND METT HANDBOOK
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2007 (Tool)2016 (Handbook)
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            WWF and World Bank (original tool)WWF-UK (Supporting METT Handbook)
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
            Assessment methodology / Best practice Guideline
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Identification of progress on management effectiveness of PAs and PA
            related projects (originally those of WWF and the World Bank, now
            also GEF-funded projects) over time.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The Management Effectiveness Tracking Tool:
            <ul>
              <li>Questionnaire-based self-assessment methodology</li>
              <li>
                Consists of a data sheet (baseline information on PA) and a
                questionnaire of 30 questions on context, planning, inputs,
                processes and outputs
              </li>
              <li>
                Answers are linked to a scoring system (range 0-3 for poor to
                excellent) which can be aggregated to give an overall score
              </li>
              <li>Corresponds to IUCN PAME framework (Hockings et al. 2006)</li>
              <li>
                Typically used by PA managers or teams themselves, with the
                support of a skilled METT facilitator
              </li>
            </ul>
            <br />
            The supporting METT Handbook aims to improve the efficacy with which
            the METT is applied. The different chapters include detailed
            additional guidance on:
            <ul>
              <li>Experiences from 15 years of METT use</li>
              <li>Best Practice when implementing the METT</li>
              <li>METT Question-By-Question Guidance</li>
              <li>
                METT: Preparing the groundwork for protected area standards
              </li>
              <li>Conclusions</li>
              <li>
                Addendum: METT origins, different versions and implementation
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Tracking of management effectiveness trends of individual PAs or
                PA related projects over time
              </li>
              <li>
                Identification and prioritization of key management issues in a
                specific PA, and how to resolve them in an adaptive management
                context
              </li>
              <li>
                Identification of appropriate follow-up steps, particularly at
                the site level
              </li>
              <li>
                Reporting of management effectiveness for a PA system (e.g.
                proportion of PAs which have undergone an assessment, and score
                achieved)
              </li>
              <li>
                Collective reflection and learning of PA management teams about
                their own PAs
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
                Provision of baseline data on PA project portfolios and
                assistance with reporting and accountability
              </li>
              <li>
                Identification of portfolio trends and priorities for the
                development of appropriate tools and policies
              </li>
              <li>Donor/treasury evaluation</li>
              <li>Accountability/audit</li>
              <li>Evaluation of small sets of closely related PAs</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">Individual PAs or small sets of similar PAs</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Information about and understanding of the aspects addressed in
                the METT questionnaire
              </li>
              <li>
                Capacity to run small internal METT workshops and document
                findings
              </li>
              <li>
                Involvement of an experienced METT facilitator usually a plus
              </li>
              <li>
                A good METT process takes up to three days. It is recommended
                that a diverse group of stakeholders have a chance to
                contribute.
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
              <li>Simplicity, rapidity and low cost</li>
              <li>Universal applicability</li>
              <li>Produces a score which can be monitored over time</li>
              <li>
                Relatively high standardisation and reproducibility (guiding
                questions for scoring system) makes tool suitable for trend
                monitoring
              </li>
              <li>
                Complementarity with IUCN PAME framework (Hockings et al. 2006)
              </li>
              <li>Wide acceptance as a standard tool</li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Self-assessment without indicators that are linked to
                objectively verifiable sources of information – somewhat
                susceptible to subjective bias. Therefore, it is better at
                addressing changes over time at a single site than detailed
                comparison of individual management aspects between different
                sites
              </li>
              <li>Limited comparability between PAs</li>
              <li>
                Lack of integration with strategic management frameworks of
                sites
              </li>
              <li>
                Issues of stakeholder participation and governance are only
                addressed to a very limited extent although they often have a
                large influence on overall effectiveness of a PA
              </li>
              <li>
                Gives only limited weight to outcomes, although these are key
                for adaptive management
              </li>
              <li>
                Weak at discovering whether that management is ultimately
                successful in terms of nature conservation and other values.
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Latest Version of the <b>Management Effectiveness Tracking Tool:</b>{" "}
            <br />
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://assets.panda.org/downloads/mett2_final_version_july_2007.pdf">
                WWF (2007). Management Effectiveness Tracking Tool. Reporting
                Progress at Protected Area Sites. 2nd edition.{" "}
              </a>
            </span>
            Gland, Switzerland: WWF International Accessed on 24 September 2018
            at
            <a href="http://assets.panda.org/downloads/mett2_final_version_july_2007.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Latest Version of <b>supporting Handbook on METT:</b>
            Stolton, S. and N. Dudley (2016).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.protectedplanet.net/system/comfy/cms/files/files/000/000/045/original/WWF_METT_Handbook_2016_FINAL.pdfx">
                METT Handbook: A guide to using the Management Effectiveness
                Tracking Tool (METT),
              </a>
            </span>{" "}
            WWF-UK, Woking. 75 pp. Accessed on 24 September 2018 at
            <a href="https://www.protectedplanet.net/system/comfy/cms/files/files/000/000/045/original/WWF_METT_Handbook_2016_FINAL.pdfx">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            First edition of the Management Effectiveness Tracking Tool was
            released in 2003, the second edition in 2007.
            <br />
          </div>
        </div>
        <div className="row border-color ">
          <div className="col">
            A version for MPAs has been developed based on the first edition of
            the METT and published by the World Bank (Staub & Hatziolus 2004).
            <br />
          </div>
        </div>

        {/* </div> */}
        {/* </div> */}
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>

        <div className="row border-color">
          <div className="col">
            A selection of reviews of the METT approach is listed below.
            (Further reviews and documented experience are available in the METT
            Handbook).
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Hockings, M., F. Leverington, C. Cook (2015). Protected area
            management effectiveness. In G. L. Worboys, M. Lockwood, A. Kothari,
            S. Feary and I. Pulsford (eds.):
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://press.anu.edu.au/titles/protected-area-governance-and-management-2/">
                Protected Area Governance and Management,{" "}
              </a>
            </span>
            pp. 889–928. Canberra: ANU Press. Accessed on 24 September 2018 at
            <a href="http://press.anu.edu.au/titles/protected-area-governance-and-management-2/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Leverington, F., K. L. Costa, J. Courrau, H. Pavese, C. Nolte, M.
            Marr, L. Coad, N. Burgess, B. Bomhard, M. Hockings (2010).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.eci.ox.ac.uk/publications/downloads/coad11-protected-areas.pdf">
                Management effectiveness evaluation in protected areas – a
                global study. Second edition 2010.
              </a>
            </span>{" "}
            Brisbane: The University of Queensland Accessed on 24 September 2018
            at
            <a href="https://www.eci.ox.ac.uk/publications/downloads/coad11-protected-areas.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            WWF (2007).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://d2ouvy59p0dg6k.cloudfront.net/downloads/mett_report__june_2007_final.pdf">
                Tracking progress in managing protected areas around the World.
                Gland Switzerland: WWF International.
              </a>
            </span>
            32 pp. Accessed on 24 September 2018 at
            <a href="http://d2ouvy59p0dg6k.cloudfront.net/downloads/mett_report__june_2007_final.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Geldmann, J., Coad, L., Barnes, M, et al. (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://macroecointern.dk/pdf-reprints/Geldmann_Biol.%20Conserv_2015.pdf">
                Changes in protected area management effectiveness over time: a
                global analysis. Biological Conservation, 191,
              </a>
            </span>
            692-699 pp. Accessed on 12.11.2018 at
            <a href="http://macroecointern.dk/pdf-reprints/Geldmann_Biol.%20Conserv_2015.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            GEF. (2015).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.thegef.org/sites/default/files/council-meeting-documents/IMPACT%20EVALUATION%20OF%20GEF%20SUPPORT%20TO%20PROTECTED%20AREAS%20AND%20PROTECTED%20AREA%20SYSTEMS.pdf">
                Impact Evaluation of GEF Support to Protected Areas and
                Protected Area Systems.
              </a>
            </span>
            GEF, Wash-ington, D.C. Accessed on 12.11.2018 at
            <a href="https://www.thegef.org/sites/default/files/council-meeting-documents/IMPACT%20EVALUATION%20OF%20GEF%20SUPPORT%20TO%20PROTECTED%20AREAS%20AND%20PROTECTED%20AREA%20SYSTEMS.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Since 2001, the METT has been used in over 2,500 protected areas
            covering over 4.2 million km2 in 127 countries around the world
            according to data held in the METT database
            <a href="https://pame.protectedplanet.net/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            METT surveys of 330 PAs from 51 countries summarized in WWF (2007).
            Additional examples and statistics in Leverington et al. (2010) and
            Hockings et al. (2015).
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Examples of the use of METT in the context of UNDP PA related
            projects (including UNDP GEF projects) can be found in the
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://open.undp.org/#2015">UNDP project database</a>
            </span>
            <a href="https://open.undp.org/#2015">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Fuentes, E., Domínguez, R., Gómez, N. (2015)
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://bdrnap.mma.gob.cl/recursos/privados/Recursos/CNAP/GEF-SNAP/Fuentes_Dominguez_Gomez_2015.pdf">
                Consultoría de aplicación y análisis de resultados del
                manage-ment effectiveness tracking tool (METT) a las principales
                áreas protegidas en Chile 2015. Proyecto: Creación de un Sistema
                Nacional Integral de Áreas Protegidas Para Chile: Estructura
                Financiera y Operacional.
              </a>
            </span>
            334 pp. Accessed on 25 September 2018 at
            <a href="http://bdrnap.mma.gob.cl/recursos/privados/Recursos/CNAP/GEF-SNAP/Fuentes_Dominguez_Gomez_2015.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ministerio del Ambiente. (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://suia.ambiente.gob.ec/documents/10179/346525/Gu%C3%ADa-Metodol%C3%B3gica-Evaluaci%C3%B3n-de-EfectividadManejoPatrimonio%C3%81reas-PG.pdf/8cd4223b-954a-42df-8b73-3490831a61c2">
                Evaluación de Efectividad de Manejo del Patrimonio de Áreas
                Naturales del Estado: Guía Metodológica.
              </a>
            </span>
            85 pp. Accessed on 26 September 2018 at
            <a href="https://www.ambiente.gob.ec/wp-content/uploads/downloads/2015/04/Gu%C3%ADa-Metodol%C3%B3gica-Evaluaci%C3%B3n-de-Efectividad-de-Manejo-del-Patrimonio-de-%C3%81reas-PG.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Mardiastuti, A., Ratu Simorangkir, A., Kusrini, M, Buchori, D,
            Suryadi, I. (2013).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.researchgate.net/publication/316234384_Management_Effectiveness_of_ASEAN_Heritage_Parks">
                Management Effectiveness of ASEAN Heritage Parks: A Study Report
              </a>
            </span>
            <a href="https://www.researchgate.net/publication/316234384_Management_Effectiveness_of_ASEAN_Heritage_Parks">
              <Icon as={LinkIcon} />. Deutsche Gesellschaft für Internationale
              Zusammenarbeit (GIZ) GmbH and ASEAN Centre for Biodiversity. 91
              pp.
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Staub, F., M. E. Hatziolos (2004).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://siteresources.worldbank.org/EXTBIODIVERSITY/Resources/MPA_tool.pdf">
                Score Card to Assess Progress in Achieving Management
                Effectiveness Goals for Marine Protected Areas.
              </a>
            </span>
            Washington, D. C.: The World Bank. 29 pp. Accessed on 24 September
            2018 at
            <a href="https://documents1.worldbank.org/curated/en/101301468135588216/pdf/32938a10ScoreC1rogress200401public1.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            UN Environment-WCMC, IUCN. (2018).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://pame.protectedplanet.net/">
                Global Database on Protected Area Management Effectiveness.{" "}
              </a>
            </span>
            Accessed on 31.10.2018 at
            <a href="https://pame.protectedplanet.net/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll34;
