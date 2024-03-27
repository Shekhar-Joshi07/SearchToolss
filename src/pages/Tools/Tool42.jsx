import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll42 = (props) => {
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
            <h4>3.6.4 | COSTS, BENEFITS AND SOCIAL IMPACTS</h4>
          </div>
        </div>
        <hr className="mt-0" />
      </header>
      <div
        className="container my-5 "
        style={{ width: "800px", backgroundColor: "white", color: "black" }}
      >
        <div className="row fw-bold fs-5 height" style={{ height: "80px" }}>
          <div className="col col-md-2 col-sm-2 col-lg-2 border-color bg-fill d-flex  align-items-center">
            TOOL 42
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            THE PROTECTED AREAS BENEFITS ASSESSMENT TOOL (PA-BAT)
          </div>
        </div>
        <div className="row " style={{ marginTop: "10px" }}>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2012
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            WWF International{" "}
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
            Methodology and assessment tool
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            Assessment of PA benefits
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Document includes glossary, introduction, methodology description,
            guid-ance notes and data sheets, and an Appendix (trainer’s guide).
            <br />
            <br />
            The methodology includes a standard typology of values and benefits.
            The assessment involves conducting workshops in which stakeholders
            jointly fill in two data sheets, one on background information and
            one on benefits to PA stakeholders. It is recommended that different
            use zones are taken into consideration.
            <br />
            <br />
            Background information data sheet: name, IUCN category, location,
            socio-economic context, governance, etc, along with an opportunity
            to identify key management objectives and to make a value judgement
            about how much the protected area contributes to wellbeing in the
            dimensions: sub-sistence, economic, cultural and spiritual,
            environmental services, and political.
            <br />
            <br />
            Values and their benefits to PA stakeholders data sheets: A set of
            datasheets which collect basic information about: the values and
            types of benefits they generate; who they are important to; and
            qualitative infor-mation about their level of importance, their
            relationship to the protected area and the times of year in which
            they are important. The focus is on legal use.
            <br />
            <br />
            The types of values and resulting benefits are categorised into nine
            main groups: nature conservation; PA management (mainly jobs),
            values related to food, values related to water, cultural and
            spiritual values, health and recreation, knowledge, environmental
            services, materials), with 24 more detailed indicators.
            <br />
            <br />
            The completed worksheets constitute the assessment.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>
                Collation and building information about the overall values of
                and benefits from PAs, across a wide range of stakeholders.
              </li>
              <li>
                The results of the assessments can be aggregated to provide an
                overview of a portfolio of protected areas (e.g. regional
                groups, national systems, biome groups etc)
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
                Use in other areas of conservation value (e.g. forests,
                agricultural land-scapes) which are not formally declared as PAs
              </li>
              <li>Planning for use of benefits at the PA system level</li>
              <li>CEPA</li>
              <li>Learning</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Individual PAs (some aspects relevant to system level planning)
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            PDF downloadable free of charge. Application costs vary according to
            context.
            <br />
            <br />
            Involvement in PA management and general understanding of the PA(s)
            in question. Typical use requires access to stakeholders and
            capacity (in terms of logistics, facilitation, equipment and
            financial resources) to conduct participatory assessment workshops
            and produce assessment reports
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
              <li>Multi-stakeholder approach</li>
              <li>
                Typology (checklist by category) of values and benefits of PAs
              </li>
              <li>
                Inclusion of detailed data sheets that can be used to conduct
                assessmen
              </li>
              <li>
                Provides a good qualitative description of benefits and values
                of PAs
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>
                Essentially a qualitative approach, no quantitative output
              </li>
              <li>No valuation intended or supported</li>
            </ul>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Stolton, S., N. Dudley (2009).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://d2ouvy59p0dg6k.cloudfront.net/downloads/pa_bat_final_english.pdf">
                The Protected Areas Benefits Assessment Tool (PA-BAT). Revised
                version 2012.
              </a>
            </span>
            Gland, Switzerland and Zagreb, Croatia: WWF International and WWF
            Mediterranean Project Office. 72 pp. Accessed on 5 October 2018 at
            <a href="https://d2ouvy59p0dg6k.cloudfront.net/downloads/pa_bat_final_english.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Revised versions in 2009 and 2012, not further modified between then
            and July 2015.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Kettunen, M., P. ten Brink (2013). Social and Economic Benefits of
            Protected Areas. An Assessment Guide. Oxon, UK: Routledge. 34x pp.
          </div>
        </div>

        <div className="row border fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>

        <div className="row border-color">
          <div className="col">
            ÖBf (2009). Assessment of the value of the PA system of Ethiopia,
            “Mak-ing the Economic Case”. Addis Abbeba and Pukersdorf, Austria:
            Ethiopian Wildlife Conservation Authority and ÖBf. 100 pp. Available
            on request from Sue Stolton, Equilibrium Research.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            WWF Mediterranean Programme (2014).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.iucn.org/downloads/12_dinaric_arc_pa_bat.pdf">
                WWF PA benefit assessment in the Dinaric Arc.
              </a>
            </span>
            Zagreb: WWF Medi-terranean Programme Office. 4 pp. Accessed on 5
            October 2018 at
            <a href="https://www.iucn.org/downloads/12_dinaric_arc_pa_bat.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Mansourian, S., Higgins-Zogib, L., Dudley, N., Stolton, S. (2008).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://fas-amazonas.org/versao/2012/wordpress/wp-content/uploads/2013/08/CDB_Protected-areas-in-the-world.pdf#page=27">
                Poverty and protected areas. 5 – 18 pp. In Protected Areas in
                Today’s World: Their Values and Benefits for the Welfare of the
                Planet.
              </a>
            </span>
            Secretariat of the Convention on Biological Diversity, Montreal,
            Technical Series no. 36, i-vii + 96 pages. Accessed on 5 Octo-ber
            2018 at
            <a href="https://www.researchgate.net/publication/303247021_Poverty_and_Protected_Areas">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Ivani ́c, K.-Z., Štefan, A., Porej, D., Stolton, S. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://parksjournal.com/wp-content/uploads/2017/04/PARKS-23.1-Ivani%C4%87-et-al-10.2305IUCN.CH_.2017.PARKS-23-1K-ZI.en_.pdf">
                Using a Participatory Assessment of Ecosystem Services in the
                Dinaric Arc of Europe to support Protected Area Management.
              </a>
            </span>
            PARKS Vol 23.1. 61 74 pp. Accessed on 5 October 2018 at
            <a href="https://www.researchgate.net/publication/317548021_Using_a_participatory_assessment_of_ecosystem_services_in_the_Dinaric_Arc_of_Europe_to_support_protected_area_management">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Yenilmez Arpa, N., Ersöz, N., Yilmaz, Z., Haçat, A., Özkan, M.,
            Tiras ̨, H., Arda, S. S., Karaarslan, Z. (2017).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://dergipark.gov.tr/download/article-file/371599">
                Ben-efit assessment of forest protected areas: Case on Küre
                Mountains National Park.
              </a>
            </span>
            Kastamonu Univ., Journal of Forestry Faculty, 17 (3): 434-449 pp.
            Accessed on 5 October 2018 at
            <a href="http://dergipark.gov.tr/download/article-file/371599">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://www.worldheritageoutlook.iucn.org/">
                The IUCN World Heritage Outlook
              </a>
              <a href="http://www.worldheritageoutlook.iucn.org/">
                <Icon as={LinkIcon} />
              </a>
            </span>{" "}
            includes a modified version of the PA-BAT for individual sites. The
            same may be true for other more spe-cialist assessment approaches.
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="http://wwf.panda.org/our_work/biodiversity/protected_areas/arguments_for_protection/">
                WWF Arguments for protection
              </a>
            </span>

            <a href="http://wwf.panda.org/our_work/biodiversity/protected_areas/arguments_for_protection/">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.worldheritageoutlook.iucn.org/benefits/decision-tree">
                IUCN Decision tree
              </a>
            </span>{" "}
            (guides the practitioner through the selection process among nine
            existing ecosystem services assessment tools – ARIES,
            Cost-ingNature, EST, InVEST, MIMES, PA-BAT, SolVES, TESSA and Water-
            World). Accessed on 5 October 2018 at
            <a href="https://www.worldheritageoutlook.iucn.org/benefits/decision-tree">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll42;
