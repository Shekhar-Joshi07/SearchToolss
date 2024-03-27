import { LinkIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";
import "./tools.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pcalogo.png";

const Tooll13 = (props) => {
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
            <h4>
              3.2.2 | PROTECTED AREA SYSTEM PLANNING, INTEGRATED GAP ANALYSIS,
              ZONING
            </h4>
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
            TOOL 13
          </div>
          <div className="col col-md-10 col-sm-10 col-lg-10  heading-dark d-flex  align-items-center">
            ZONATION{" "}
          </div>
        </div>
        <div className="row ">
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color  fs-10">
            2014
          </div>
          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            University of Helsinki (Finland), Conservation Informatics Group{" "}
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
            Spatial prioritization for conservation sites, including various
            biodi-versity-related benefits and costs related to the needs of
            other land uses.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col ">STRUCTURE AND FUNCTION</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>
                Produces a hierarchical prioritization of the landscape based on
                the occurrence levels of biodiversity features in sites (cells),
                by iteratively removing the least valuable remaining cell while
                accounting for connectivity and generalized complementarity
              </li>
              <li>
                Output can be imported into GIS software to create maps or for
                further analysis
              </li>
              <li>
                V4.0 can process very large data sets containing up to ~50
                million grid cells with effective data
              </li>
              <li>
                Identification of areas important for retaining habitat quality
                and connectivity for multiple species, indi- rectly aiming at
                species’ long-term persistence
              </li>
              <li>
                Computational strategy: maximal retention of weighted, range
                size normalized (rarity corrected) richness to produce
                complementarity-based priority ranking of sites for conservation
              </li>
              <li>
                Further information on structure and function in user manual
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
              <li>Biodiversity offsetting</li>
              <li>Climate change adaptation planning for PA networks</li>
              <li>Targeting for habitat restoration/management</li>
              <li>CEPA</li>
            </ul>
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">LEVEL OF APPLICATION</div>
        </div>
        <div className="row border-color ">
          <div className="col">PA system</div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">SKILLS AND RESOURCES REQUIRED</div>
        </div>
        <div className="row border-color">
          <div className="col">
            <ul>
              <li>Computer (Windows or Linus OS), input data.</li>
              <li>
                Effort for data preparation and analysis depends on scale of
                use.
              </li>
              <li>
                Solid understanding of PA system planning, systematic
                conservation planning required for meaningful use
              </li>
              <li>Advanced GIS and general IT competence</li>
              <li>
                Advanced competence in data management and dataset preparation
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
              <li>Ability to work with large datasets</li>
              <li>
                Takes into account connectivity (for mul- tiple conservation
                features) benefits and costs in relation to other land uses
              </li>
              <li>Can work with modelled species distribution data</li>
              <li>
                Not based simply on spatial coverage targets for conservation
                features, but able to work with more derived aggrega- tion
                algorithms across multiple features
              </li>
              <li>Free of charge</li>
            </ul>
          </div>

          <div className="col col-md-6 col-sm-6 col-lg-6 border-color">
            <ul>
              <li>Output quality depends on input quality</li>
              <li>
                Outputs need to be interpreted, discussed and some times adapted
                to be turned into on-the-ground solu- tions (in spite of their
                often "nice" visual impression)
              </li>
              <li>
                Weak in dealing with demographic interconnectedness of planning
                units
              </li>
              <li>
                Preparation of datasets requires time and relatively high
                competence
              </li>
              <li>
                Does not show how an area/zone needs to be managed to conserve
                its features
              </li>
            </ul>
          </div>
        </div>
        <div className="row border fw-bold bg-fill">
          <div className="col">REFERENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Moilanen, A., A. M. A. Franco, R. Early, R. Fox, B. Wintle, C.D.
            Thomas (2005). Prioritising multiple-use land-scapes for
            conservation: methods for large multi-species planning problems.
            Proceedings of the Royal Society of London B Biological Sciences
            272: 1885–1891.
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            The documentation for Marxan provided on the website includes
            technical information about how Marxan works, how to use Marxan, and
            how to troubleshoot when faced with common problems.
          </div>
        </div>
        <div className="row border-color fw-bold bg-fill">
          <div className="col">VERSIONS AND/OR MODIFICATIONS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Various versions since first launch. Current version V4 (2014).
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">REVIEWS</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Moilanen, A., B. J. Anderson, F. Eigenbrod, A. Heinemeyer, D. B.
            Roy, S. Gillings, P. R. Armsworth, K. J. Gaston, C.D. Thomas (2011).
            <span style={{ textDecoration: "underline", color: "green" }}>
              <a href="https://www.academia.edu/3746589/Balancing_alternative_land_uses_with_the_Zonation_conservation_prioritization_approach">
                Balancing alternative land uses in conservation prioritization.
                Ecological Applications, 21:
              </a>
            </span>
            1419-1426. Accessed on 8 October 2018 at{" "}
            <a href="https://www.academia.edu/3746589/Balancing_alternative_land_uses_with_the_Zonation_conservation_prioritization_approach">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Moilanen, A., H. Kujala, J. Leathwick (2009). The Zonation framework
            and software for conservation prioriti-zation. In: Moilanen, A., K.
            A. Wilson H. P. Possingham (eds). Spatial Conservation
            Prioritisation: Quantitative Methods and Computational Tools.
            Oxford, UK: Oxford University Press. pp 196-210.
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">DOCUMENTED EXPERIENCE</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Kremen, C., A. Cameron, A. Moilanen, S. Phillips, C. D. Thomas et
            al. (2008). Aligning conservation priorities across taxa in
            Madagascar, a biodiversity hotspot, with high-resolution planning
            tools. Science 320: 222– 226.
          </div>
        </div>
        <div className="row border-color">
          <div className="col">
            Leathwick, J.R., A. Moilanen, M. Francis, J. Elith, P. Taylor, K.
            Julian, T. Hastie (2008). Novel methods for the design and
            evaluation of marine protected areas in offshore waters.
            Conservation Letters 1: 91–102. (example from New Zealand, but
            generally relevant to MPA planning)
          </div>
        </div>

        <div className="row border-color fw-bold bg-fill">
          <div className="col">RELATED RESOURCES/FURTHER READING</div>
        </div>
        <div className="row border-color">
          <div className="col">
            Manuals, presentations and example setups available at{" "}
            <a href="https://www.helsinki.fi/en/researchgroups/digital-geography-lab/software-developed-in-cbig#section-52992">
              <Icon as={LinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooll13;
