import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll4 = (props) => {
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
              <h3>
                Category 3.2 - SPATIAL PLANNING FOR PROTECTED AREAS AND
                PROTECTED AREA SYSTEMS
              </h3>
            </div>
            <h4>3.2.1 | SITE PRIORITIZATION METHODS AND APPROACHES</h4>
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
            TOOL 4
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            A GLOBAL STANDARD FOR THE IDENTIFICATION OF KEY BIODIVERSITY AREAS
            (KBA)
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2016
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
            Guideline, assessment methodology and global standard.
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            To locate and highlight sites that make significant contributions to
            the global persistence of biodiversity and, thus, identify high
            priority areas for protection of biodiversity
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The standard is a set of 11 criteria with corresponding thresholds
            for KBA status, explanations and guidance for application. If at
            least one KBA criterion is met, a site is considered a KBA. General
            guidance on the spatial delineation of KBAs (i.e. where to draw
            their borders) and a glossary of all relevant terms is also
            provided.
            <br />
            KBA criteria:
            <ul>
              <li>
                Threatened biodiversity
                <ul>
                  <li>Threatened species</li>
                  <li>Threatened ecosystem types</li>
                </ul>
              </li>

              <li>
                Geographically restricted biodiversity
                <ul>
                  <li>Individual geographically restricted species</li>
                  <li>Co-occurring geographically restricted species</li>
                  <li>Geographically restricted assemblages</li>
                  <li>Geographically restricted ecosystem types</li>
                </ul>
              </li>
              <li>Ecological Integrity</li>
              <li>
                Biological Processes
                <ul>
                  <li>Demographic aggregations</li>
                  <li>Ecological refugia</li>
                  <li>Recruitement Sources</li>
                </ul>
              </li>
              <li>Irreplaceability through quantitative analysis</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">TYPICAL USE</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            Site prioritization for PA system development or individual PA
            siting/zoning, based on occurrence of species of high conservation
            importance
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">ADDITIONAL POTENTIAL USES</div>
        </div>
        <div className="row border-color ">
          <div className="col">
            <ul>
              <li>Review of existing PA systems</li>
              <li>Site prioritisation for PA system support</li>
              <li>Species conservation action planning in a spatial context</li>
              <li>
                Site prioritization for other effective area-based conservation
                measures (OECMs)
              </li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Individual PAs (e.g. for zoning) or PA systems
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Sound information on the distribution patterns of globally (or,
                in the case of national adaptations) nationally important
                biodiversity that potentially triggers KBA criteria in the area
                of interest, in- cluding on relative abundance/coverage. If this
                is not readily available, considerable taxonomic and/ or field
                ecological expertise
              </li>
              <li>GIS expertise for spatial delineation of KBAs</li>
              <li>
                Capacity to run expert consultation workshops to apply the
                criteria and to produce reports presenting and discussing the
                findings
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
                Transparent, reproducible and concise guideline and method with
                quantitative thresholds
              </li>
              <li>Relatively Simple</li>
              <li>
                Direct link to IUCN Red List of Threatened Species, which
                provides sound information base for evaluation of species
                extinction risk
              </li>
              <li>
                Developed with strong expertise and authority of IUCN network,
                and tested through extensive user consultation during
                preparation and before publication
              </li>
              <li>
                Integrates earlier approaches that focused on individual
                taxonomic groups, such as birds (IBA) or plants (IPA)
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Focused on site-based conservation measures</li>
              <li>
                Does not provide clear guidance or a GIS tool for spatially
                explicit site prioritization
              </li>
              <li>
                Requires comprehensive data, particularly in relation to judging
                the irreplaceability of a given area for the species in question
              </li>
              <li>
                Thresholds of criteria are set for global bio- diversity
                importance and may need adaptation
              </li>
              <li>
                Method detects importance of sites for bio- diversity
                conservation only – not degree of being threatened or costs of
                conservation measures. Further analysis may be needed to derive
                con- servation priorities from KBA results
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://portals.iucn.org/library/sites/library/files/documents/2016-048.pdf">
                IUCN (2016). A Global Standard for the Identification of Key
                Biodiversity Areas, Version 1.0.
              </a>
            </span>
            First edition. Gland, Switzerland: IUCN. 46 pp. Accessed on 12
            October 2018
            <a href="https://portals.iucn.org/library/sites/library/files/documents/2016-048.pdf">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Predecessor version: Langhammer, P. F., M. I. Bakarr, L. A. Bennun,
            T. M. Brooks, R. P. Clay, W. Darwall, N. DeSilva, G. J. Edgar, G.
            Eken, L. D. C. Fishpool, G. A. B. Fonseca, M. N. Foster, D. H. Knox,
            P. Matiku, E. A. Radford, A. S. L. Rodrigues, P. Salaman, W.
            Sechrest, A. W. Tordoff (2007).{" "}
            <a href="https://portals.iucn.org/library/efiles/documents/PAG-015.pdf">
              Identification and Gap Analysis of Key Biodiversity Areas: Targets
              for Comprehensive Protected Area Systems.
            </a>{" "}
            <a href="https://portals.iucn.org/library/efiles/documents/PAG-015.pdf">
              Gland, Switzerland: IUCN. 134 pp. Accessed on 5 October 2018
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The following reviews discuss the 2007 version of the KBA
            methodology: <br /> <br />
            Bennun, L., M. Bakarr, G. Eken, D. A. Da Fonseca (2007).{" "}
            <b>
              Clarifying the key biodiversity areas approach. BioScience 57:
              645– 645
            </b>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Brooks, T. M., N. de Silva, M. V. Duya, M. Foster, D. Knox, P.
            Langhammer, P., W. R. Marthy, B. Tabaranza Jr. (2008).{" "}
            <b>
              Delineating Key Biodiversity Areas as targets for protecting
              areas,
            </b>{" "}
            Cambridge University Press. (Book Chapter).
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            The following publications discuss experience with the 2007 version
            of the KBA methodology: <br />
            Holland, R. A., W. R. T. Darwall, K. G. Smith (2012).{" "}
            <a href="https://www.iucn.org/sites/dev/files/import/downloads/holland_et_al__2012_biological_conservation.pdf">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Conservation priorities for freshwater biodiversity: The Key
                Biodiversity Area approach refined and tested for continental
                Africa. Biological Conservation 148
              </span>
              : 167-179. Accessed on 12 September 2018
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Sodhi, N. S., G. Acciaioli, M. ERB, A. K.-J. Tan (2008).
            <a href="https://assets.cambridge.org/97805218/70214/frontmatter/9780521870214_frontmatter.pdf">
              <span style={{ textDecoration: "underline", color: "green" }}>
                Biodiversity and human livelihoods in protected areas: case
                studies from the Malay Archipelago
              </span>
              , Cambridge University Press. Accessed on 12 September 2018
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>

        <div className="row border-color">
          <div className="col">
            Edgar, G. J., P. F. Langhammer, G. Allen, T. M. Brooks, J. Brodie,
            W. Crosse, N. de Silva, L. D. C. Fishpool, M. N. Foster, D. H. Knox,
            J. E. McCosker, R. McManus, A. J. K. Millar, R. Mugo, R. (2008).
            <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1002/aqc.902">
              Bass, D., P. Anderson, N. De Silva (2011).
              <span style={{ textDecoration: "underline", color: "green" }}>
                Key biodiversity areas as globally significant target sites for
                the conservation of marine biological diversity. Aquatic
                Conservation-Marine and Freshwater Ecosystems 18:
              </span>
              969–983. Accessed on 5 October 2018
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>

        <div className="row border-color">
          <div className="col">
            Knight, A. T., R. J. Smith, R. M. Cowling, P. G. Desmet, D. P.
            Faith, S. Ferrier, C. M. Gelderblom, H. Grantham, A. T. Lombard, K.
            Maze, J. L. Nel, J. D. PARRISH, G. Q. K. Pence, H. P. Possingham, B.
            Reyers, M. Rouget, D. Roux, K. A. Wilson (2007).{" "}
            <b>
              Improving the key biodiversity areas approach for effective
              conservation planning
            </b>
            . BioScience 57: 256-261.
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Accessed on 5 October 2018 at
            <a href="https://academic.oup.com/bioscience/article/57/3/256/268526">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            The global KBA standard was extensively consulted with various end
            users and experts before publication. This consultation is
            documented at
            <a href="https://www.iucn.org/content/applications-key-biodiversity-areas-end-user-consultations">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll4;
